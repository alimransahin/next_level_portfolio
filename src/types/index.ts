import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TProject = {
  _id: string;
  name: string;
  live: string;
  client: string;
  server: string;
  technology: string[];
  feature: string[];
  mainImage: string;
  images: string[];
  description: string;
  isDeleted: boolean;
};
export type TBlogPost = {
  _id: string;
  title: string;
  author: string;
  content: string;
  tags: string[];
  imageUrl: string;
  isPublished: boolean;
  createdAt: string;
};
export type TSkill = {
  _id: string;
  name: string;
  image: string;
  category: string;
  isDeleted: boolean;
};
export type TExperience = {
  _id: string;
  title: string;
  role: string;
  startTime: string;
  endTime: string;
  description: string;
  isDeleted: boolean;
};
