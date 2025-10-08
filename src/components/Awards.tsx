const Awards = () => {
  const awards = [
    { title: "SOARS Award", organization: "Interswitch Group", year: "2023" },
    { title: "Commendation Letter", organization: "GTBank", year: "2017" }
  ];

  return (
    <section id="awards" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Awards & Membership</h2>
        <div className="space-y-8">
          {awards.map((award, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary">{award.title}</h3>
              <p className="text-accent font-medium">{award.organization}</p>
              <p className="text-gray-600 dark:text-gray-400">{award.year}</p>
            </div>
          ))}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary">Professional Membership</h3>
            <p className="text-gray-700 dark:text-gray-300">Member of ISC2 | ISACA | IIA (Lagos and Atlantic Canada Chapters)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
