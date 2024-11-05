import { useState } from "react";
import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css";
import { Camera } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useUser } from "@/src/context/UserProvider";
import envConfig from "../config";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const toolbarOptions = [
  [{ header: "1" }, { header: "2" }, { font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline", "strike"],
  ["link"],
  ["clean"],
];

const QuillEditor = () => {
  const [description, setDescription] = useState<string>("");
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const [image, setImage] = useState<string | undefined>();
  const [category, setCategory] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const { user } = useUser();

  const handleChange = (content: string) => {
    setDescription(content);
  };

  const imgbbApiKey = envConfig.imgbb_api;
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      await handleUpload(selectedFile);
    }
  };

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        formData
      );
      const directLink = response.data.data.url;
      setImage(directLink);
      toast.success("Image uploaded successfully");
    } catch (error) {
      toast.error("Error uploading image");
    }
  };

  const handleSubmit = () => {
    if (!category) {
      toast.error("Please select a category");
      return;
    }

    const postData = {
      description,
      category,
      isPremium,
      image,
      tags,
    };
    console.log(postData);
    // handlePost(postData);
  };

  const addTag = () => {
    if (tagInput && tags.length < 4) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    } else if (tags.length >= 4) {
      toast.error("You can only add up to 4 tags");
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const modules = {
    toolbar: {
      container: toolbarOptions,
    },
  };

  return (
    <div className="mx-auto rounded-lg p-6 w-full max-w-3xl">
      <div className="flex justify-center items-center mb-6">
        <h2 className="text-2xl font-semibold">Create a Blog</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Blog Title"
          className="mb-4 w-full p-2 border border-gray-300 rounded"
        />
        <div>
          <ReactQuill
            className="rounded-lg h-40 sm:h-60 lg:h-72 mb-4"
            modules={modules}
            placeholder="Write something amazing..."
            value={description}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
          <div>
            <input
              className="hidden"
              id="fileInput"
              name="image"
              type="file"
              onChange={handleFileChange}
            />
            <label
              className="border border-gray-300 bg-gray-50 p-3 flex items-center cursor-pointer rounded-md hover:bg-gray-100 transition"
              htmlFor="fileInput"
            >
              <Camera className="mr-2 text-gray-500" /> Attach Photo
            </label>
            {image && (
              <p className="text-sm text-green-600 mt-1">Image attached!</p>
            )}
          </div>
        </div>

        {/* Tags Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Tags (max 4)</label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Add a tag"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
            />
            <button
              onClick={addTag}
              className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-500 transition"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full flex items-center"
              >
                {tag}
                <button
                  onClick={() => removeTag(index)}
                  className="ml-2 text-gray-600 hover:text-gray-800"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded w-full transition"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuillEditor;
