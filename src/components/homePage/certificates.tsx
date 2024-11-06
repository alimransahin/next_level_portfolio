const Certificates = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-4" id="awards-certifications">
      {/* Section Header */}
      <h3
        className="text-3xl  text-center  py-4 bg-gradient-to-r from-primary-100 to-secondary-100 font-bold rounded-md"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        Awards & Certifications
      </h3>

      {/* Awards & Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {/* Award/Certification 1 */}
        <div className="flex items-start bg-gradient-to-br from-primary-50  p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="text-5xl text-secondary mr-4">🏆</div>
          <div>
            <h4 className="text-2xl font-bold text-primary mb-2">
              Best Developer Award
            </h4>
            <p className="text-default-700 mb-2">
              Awarded by Tech Innovators Summit
            </p>
            <p className="text-default-500">2023</p>
          </div>
        </div>

        {/* Award/Certification 2 */}
        <div className="flex items-start bg-gradient-to-br from-primary-50  p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="text-5xl text-secondary mr-4">📜</div>
          <div>
            <h4 className="text-2xl font-bold text-primary mb-2">
              Full-Stack Web Developer Certification
            </h4>
            <p className="text-default-700 mb-2">Issued by Coursera</p>
            <p className="text-default-500">2022</p>
          </div>
        </div>

        {/* Award/Certification 3 */}
        <div className="flex items-start bg-gradient-to-br from-primary-50  p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="text-5xl text-secondary mr-4">🥇</div>
          <div>
            <h4 className="text-2xl font-bold text-primary mb-2">
              Hackathon Winner
            </h4>
            <p className="text-default-700 mb-2">Global Coding Challenge</p>
            <p className="text-default-500">2021</p>
          </div>
        </div>

        {/* Add more awards or certifications below in the same format */}
      </div>
    </div>
  );
};

export default Certificates;
