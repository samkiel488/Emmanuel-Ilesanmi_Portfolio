"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "Senior ICFR/SOX IT Auditor",
      company: "TD Bank, Canada",
      period: "Jan 2025 – Present",
      icon: "🏦",
      description: "Support ICFR/SOX audit planning process while ensuring the completion of appropriate programs and risk assessments to identify key risks and opportunities to mitigate those risks.",
      details: "Assist in the execution of ICFR/SOX audit testing (ITGC-Access Security, Computer Operations, Change Management, Program Development, IT application controls, and Interface Controls. Manage audit communications process and presentation of findings, recommendations to client and audit management in accordance with established General Audit methodology and professional standards. Collaborate with management and follow-up on remediation of open ICFR/SOX audit findings for remediation. Prepare and present complex reporting, analysis and assessments to improve internal processes and controls while keeping current on emerging business trends, developments and analytical tools, and technique. Support the team in the analysis, and implementation of initiatives to deliver quality results within tight timeframes."
    },
    {
      title: "Head, Information Systems Audit",
      company: "Interswitch Group",
      period: "Oct 2023 – Nov 2024",
      icon: "💻",
      description: "Plan and led annual Information Technology audit plan and projects in line with Global Internal Audit Standards.",
      details: "Conducted IT General Control (User Access, Change, Patch Mgt., IT Operations, System Acquisition & Development) including ICFR/SOX IT control, IT Application, and Interface control testing audit projects. Led audit of business resilience, payment gateway, and emerging technologies deployed by business. Executed cybersecurity (SIEM, DAM, IDS, IPS, NAC, Antivirus) and cloud infrastructure assurance engagements. Evaluated the controls designs and operating effectiveness of enterprise network, VM and exchange infrastructures. Assessed technology governance security controls and DevOps implementation secure security best practices. Conducted PCI DSS certification compliance reviews and Integrated Management Systems (ISO) Audits. Performed assurance reviews on IT outsourced service providers and compliance to service agreements. Performed specialized fraud investigations and documentation of control recommendations for management action. Collaborated with stakeholders on implementation of risk based, cost-effective Management Action Plans (MAPs). Prepared and presented periodic performance report metrics and dashboards to the Audit and Risk Committee."
    },
    {
      title: "Team Lead, Information Systems Audit",
      company: "Interswitch Group",
      period: "Sep 2022 – Oct 2023",
      icon: "💻",
      description: "Performed same functions as outlined above and other assurance engagement as advised by Div. Head and CIA.",
      details: "Key accomplishments in both roles: Led the strategic planning and execution of risk-based annual IT audit plans across Interswitch's three subsidiaries with a team of four internal auditors and co-source partners (Deloitte, EY, and KPMG) while mentoring other young audit team members and led initiative on continuous auditing leveraging PowerBI in cost saving of fifty million Naira."
    },
    {
      title: "Lead, IT Auditor",
      company: "United Bank for Africa",
      period: "Jul 2021 – Sep 2022",
      icon: "🏦",
      description: "Executed several IT audits projects across the bank’s headquarter, twenty regional officers and subsidiaries.",
      details: "Evaluated IT General Controls, Network, web, mobile applications, Cloud Computing, Information Security. Performed the audit of the management standards of the organisation (ISO 27001, 20000, 22301, 45001, 9001). Led fraud investigations and special reviews and provided reports that enhanced financial losses. Conducted assurance review on SWIFT in line with Swift Customer Security Controls Framework. Conducted Core banking, digital banking applications and SOC 2 compliance audit reviews. Executed other audit assurance activities as requested by Group Head, IT and digital banking audit, and CIA."
    },
    {
      title: "Information System Auditor",
      company: "WEMA Bank PLC",
      period: "May 2019 – Jul 2021",
      icon: "🏦",
      description: "Responsible for the review of control processes around user access controls, change management, business continuity and entity level controls across six strategic business units and a digital bank (ALAT) and core banking.",
      details: "Led the organization's first management system audits of ISO 20000 and 22301 standards and Data Privacy in line with NDPR and GDPR, saving the organization $5000 in surveillance auditor costs. Performed annual Cybersecurity, Digital transformation business units, SWIFT, including cloud infrastructures."
    },
    {
      title: "IT Risk Management Analyst",
      company: "First Bank Nigeria LTD",
      period: "Jul 2018 – May 2019",
      icon: "🏦",
      description: "Performed Control Risk and Self Assessments (CRSA) for IT departments and IT third-party/vendor assessments.",
      details: "Managed IT Risk register, while collaborating with administrators to remediate vulnerabilities in the risk register. Managed IT Security governance risks and disaster exercise and readiness reporting metrics and dashboards. Led the bank’s PCI DSS re-certification, reduced compliance gaps while improving security in payment systems. Contributed to Strategic IT projects and IT Steering committees’ deliberations and deliverables. Conducted IT and security awareness on policies, PCI DSS standards, processes, and controls."
    },
    {
      title: "IT Compliance Officer",
      company: "Guaranty Trust Bank PLC",
      period: "Jan 2015 – Jul 2018",
      icon: "🏦",
      description: "Developed, documented, reviewed, and communicated IT policies across multiple IT departments.",
      details: "Monitored compliance with current and emerging laws, regulations, and standards by regulatory bodies CBN). Collaborated with system administrators to remediate IT risks and resolved 80% of open items in risk register. Planned and coordinated annual disaster recovery tests and achieved a 95% failover and failback success rate. Performed vulnerability assessments using Nessus, Qualys and Acunetix, Veracode on technology systems. Prepared application availability and performance metrics/dashboards for the Chief Information Officer (CIO)."
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-white dark:bg-[#001f3f]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-12 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent text-center mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{exp.icon}</span>
                    <h3 className="text-xl font-semibold text-primary dark:text-accent">{exp.title}</h3>
                  </div>
                  <p className="text-accent font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
                </div>
              </div>
              <p className="text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">{exp.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => toggleExpanded(index)}
                className="text-accent hover:text-primary dark:hover:text-accent font-medium mt-4 transition-colors duration-300"
              >
                {expandedIndex === index ? "Read Less" : "Read More"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
