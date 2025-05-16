// src/data/vacancies.js
export const allVacanciesData = [
    {
        slug: "senior-grc-consultant",
        title: "Senior GRC Consultant",
        category: "Cyber Security", // Category for grouping
        department: "Cyber Security Practice", // Specific department
        location: "UK",
        employmentType: "Full-time",
        postedDate: "2024-05-16", // Example date
        shortDescription: "Provide expert GRC consultancy, helping clients manage cyber risks, navigate regulations, and establish robust governance frameworks.",
        description: `
            <p>Eraneos UK is seeking a highly skilled and experienced Senior GRC (Governance, Risk, and Compliance) Consultant to join our dynamic Cyber Security team. In this role, you will be instrumental in helping our clients establish and mature their GRC frameworks, navigate complex regulatory landscapes, and manage cyber risks effectively.</p>
            <p>You will work closely with diverse clients across various industries, providing expert advice, developing tailored solutions, and driving the implementation of best-practice GRC strategies to ensure their information assets are protected and their operations are compliant.</p>
        `,
        responsibilities: [
            // Governance
            "Oversee the effectiveness of governance checklists and blueprints to embed robust governance frameworks.",
            "Drive process change using techniques such as reporting, document analysis, requirements workshops, surveys, business process descriptions, business analysis, and workflow analysis.",
            "Manage risk mitigation and project requirements to propose enablers to process, people, and technology; re-engineer processes to increase efficiencies where required.",
            "Review quality control activities, including periodically using maturity assessments where applicable.",
            // Risk
            "Lead Cyber Risk assessment activities in collaboration with business stakeholders.",
            "Take a risk-based approach to identify and treat risks as they relate to technology, business strategy, and objectives.",
            "Anticipate changes in clients' operational risk profiles, providing insight and reporting on current and likely future security risks.",
            "Ensure effective risk management for clients' Information Security risks.",
            "Identify, evaluate, and report on information security risks to support the effective protection of information assets.",
            "Deliver risk mitigation plans in response to changes in risk profiles driven by internal/external events and lessons learned.",
            "Engage with internal functions and external partners to support project bids and ensure client compliance with legal, regulatory, and compliance requirements.",
            "Support Senior Managers in Group and Business Unit Incident and crisis response management.",
            // Compliance
            "Enforce regulatory policies, procedures, and controls, including customer due diligence, transaction monitoring, reporting, and liaising with relevant authorities.",
            "Support the delivery of a GRC model that allows for consistent risk management, reporting, and assurance."
        ],
        qualifications: [
            "An undergraduate qualification (Bachelor's degree or equivalent) in computer science, business informatics, engineering/technology, or psychology.",
            "A postgraduate qualification (Master's/Doctoral degree or equivalent) in computer science, business informatics, engineering/technology, or equivalent is preferred.",
            "Professional certifications in Information Security from industry-standard security frameworks (e.g., ISACA, BCS, CIPP, ITIL, Crest, ISC2, COMPTIA) and key security vendors (e.g., Microsoft, Qualys, IBM).",
            "A recognised Information Security, Risk, and Audit qualification/certification (e.g., CRISC, CISA, CISM, ISO27001 Lead Auditor/Implementer).",
            "Experience in developing behavioural needs analyses that lead to effective programmes of behaviour change in the context of cyber risk.",
            "Experience in developing and delivering learning material through a range of channels and technologies is preferred.",
            "Proven ability to conduct security risk assessments for business applications and computer installations.",
            "Experience performing risk assessments, business impact analyses, and accreditations for major information systems.",
            "Experience supporting the implementation of information assurance strategies.",
            "Ability to plan programmes to review activities and ensure compliance.",
            "Eligibility to work in the UK."
        ],
        whatWeOffer: [
            "A key role in a growing and influential Cyber Security practice with a focus on GRC.",
            "The opportunity to work with a variety of clients on challenging and impactful GRC projects.",
            "A collaborative environment that fosters continuous learning and professional development in the GRC domain.",
            "Competitive salary, comprehensive benefits package, and performance-based incentives.",
            "Clear pathways for career advancement within a leading international consultancy."
        ],
        contactInfo: "To apply, please submit your CV and a detailed cover letter outlining your GRC experience via our online portal.",
        applicationPolicy: "Please note: We are not engaging with recruitment agencies for this role or any other. Direct applications only. Applicants must have the right to work in the UK, as we do not provide visa sponsorship."
    }
    // To add a "Data & AI" category later, you would add another job object here:
    // {
    //     slug: "data-scientist-example",
    //     title: "Data Scientist",
    //     category: "Data & AI",
    //     department: "Data & AI Practice",
    //     location: "UK",
    //     ... other fields ...
    // }
];