const Education = () => {
  const education = [
    {
      degree: "Master of Information Technology",
      institution: "National Open University of Nigeria",
      year: "2024"
    },
    {
      degree: "B. Eng. Electrical & Electronics",
      institution: "MAUTECH",
      year: "2013"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
              <p className="text-accent font-medium">{edu.institution}</p>
              <p className="text-gray-600 dark:text-gray-400">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
