const Skills = () => {
  const skills = [
    "ITGC", "ITAC", "SOX/ICFR", "COBIT", "ISO 27001", "Risk Management",
    "PCI DSS", "ITIL", "Vulnerability Management (Nessus | Qualys | Burp)",
    "GRC Tools (Archer | PowerBI | ACL | Alteryx)", "Cloud Security", "DevOps", "Fraud Investigation"
  ];

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Core Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
