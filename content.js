// =============================================================
//  SITE CONTENT — edit this file to update your website.
//  Everything below is plain JavaScript data: strings, arrays,
//  objects. No coding required — just change the text.
// =============================================================

window.SITE = {
  // -----------------------------------------------------------
  //  IDENTITY  — appears in the header / hero / contact card
  // -----------------------------------------------------------
  name: "Srikar Katta",
  title: "PhD Candidate, Computer Science",
  affiliation: "Duke University",
  lab: "Almost Matching Exactly Lab",
  advisors: [
    { name: "Cynthia Rudin", url: "https://users.cs.duke.edu/~cynthia/" },
    { name: "Alexander Volfovsky", url: "https://volfovsky.github.io/" },
  ],
  photo: "assets/headshot.jpg",
  email: "srikar.katta@duke.edu",
  links: {
    github:    "https://github.com/kattasa",
    linkedin:  "https://www.linkedin.com/in/srikar-katta",
    scholar:   "", // add Google Scholar URL when ready
    cv:        "uploads/cv.pdf",
  },

  // -----------------------------------------------------------
  //  BIO  — short paragraph(s) for the home page.
  //  Use plain text. Use <a href="..."> for links if you want.
  // -----------------------------------------------------------
  // Short bio for the home page (keep tight — 2 paragraphs).
  bio: [
    `I am a PhD candidate in Computer Science at Duke University,
     advised by <a href="https://users.cs.duke.edu/~cynthia/">Cynthia Rudin</a>
     and <a href="https://volfovsky.github.io/">Alexander Volfovsky</a>.`,
    `My research develops methods for reliable inference and interpretation
     in complex data environments. I am especially interested in problems
     where the data are messy, the stakes are high, and the user needs to be
     able to read and trust the answer. Two questions drive most of my work.
     <br><br>
     First, how do we leverage machine learning to analyze data that come
     from non-traditional sources — social media posts, wearable sensors,
     medical images? Second, when machine-learning systems are used to
     answer these open questions, how do we audit their reasoning and
     understand when they can and cannot be trusted?
     <br><br>
     My methods have been recognized with multiple early-career paper awards
     from the American Statistical Association, spotlights at ICML and
     NeurIPS, and the Apple Scholar in AI/ML Fellowship.`,
  ],

  // A longer research statement — lives on the Research page.
  researchStatement: [
    `My research develops methods for <strong>reliable inference and
     interpretation</strong> in complex data environments. I am especially
     interested in problems where the data are messy, the stakes are high,
     and the user needs to be able to read and trust the answer — health,
     social science, and policy.`,
    `Two questions drive most of my work. <strong>First</strong>, how do we
     estimate causal effects when the data come from non-traditional sources
     — social media posts, wearable sensors, distributional measurements?
     <strong>Second</strong>, when machine-learning systems are used to
     answer scientific questions, how do we audit their reasoning and
     understand when they can and cannot be trusted?`,
    `My methods have been recognized with multiple early-career paper
     awards from the American Statistical Association, spotlights at
     leading machine-learning conferences, and the Apple Scholar in
     AI/ML Fellowship.`,
  ],

  // -----------------------------------------------------------
  //  RESEARCH AREAS  — short cards on the home page.
  //  Keep to 3–4 for a clean layout.
  // -----------------------------------------------------------
  areas: [
    {
      title: "Interpretable Causal Inference",
      blurb: "Estimating causal effects from wearables, sensors, and other complex data with methods you can read, audit, and trust.",
    },
    {
      title: "Variable Importance & the Rashomon Effect",
      blurb: "Stable, model-agnostic measures of variable importance — even under unobserved confounding.",
    },
    {
      title: "Causal Inference with Text & LLMs",
      blurb: "Experimental designs and benchmarks for using language models in causal analyses of social media and dialogue.",
    },
  ],

  // -----------------------------------------------------------
  //  NEWS  — most-recent first. Add a new entry at the TOP.
  //  Date format is up to you ("Apr 2026", "2026-04-15", etc.)
  // -----------------------------------------------------------
  news: [
    { date: "May 2026", text: `I'm an area chair for NeurIPS 2026.` },
    { date: "Apr 2026", text: `Our <em>Nature Health</em> paper was covered by <href="https://www.usnews.com/news/health-news/articles/2026-04-28/daylight-saving-time-fails-to-boost-daily-steps-study-finds">U.S. News and World Report!</a>` },
    { date: "Apr 2026", text: `Got to share our latest research on variable importance and omitted variable bias at Bocconi!` },
    { date: "Feb 2026", text: `Our paper on the <strong>impact of daylight saving time on physical activity</strong> appeared in <em>Nature Health</em>.` },
  ],

  // -----------------------------------------------------------
  //  PUBLICATIONS  — grouped by status.
  //  Use { authors, title, venue, year, awards, links } per item.
  //  authors: string. Wrap your own name in <strong>…</strong>.
  //  links: any of { pdf, arxiv, code, site, slides, bibtex }.
  // -----------------------------------------------------------
  publications: {
    published: [
      {
        authors: "J. Donnelly*, <strong>S. Katta*</strong>, E. Borgonovo, C. Rudin",
        title: "Variable Importance with Unobserved Confounding and the Rashomon Effect",
        venue: "AISTATS",
        year: 2026,
        awards: ["Risk Analysis Section Early Career Paper Award (Honorable Mention), ASA"],
        featured: true,
        blurb: "How important is a variable, really, when you can't see all the confounders — and there are many equally-good models to choose from?",
        links: { site: "https://arxiv.org/abs/2510.12734" },
      },
      {
        authors: "H. Jeong*, <strong>S. Katta*</strong>, W. K. Wang, A. Volfovsky, J. Dunn",
        title: "Impact of Daylight Saving Time on Physical Activity Patterns",
        venue: "Nature Health",
        year: 2026,
        links: { publisher: "https://www.nature.com/articles/s44360-026-00115-z", preprint: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12838301/"},
      },
      {
        authors: "<strong>S. Katta</strong>, H. Parikh, C. Rudin, A. Volfovsky",
        title: "Interpretable Causal Inference for Analyzing Wearable, Sensor, and Distributional Data",
        venue: "AISTATS",
        year: 2024,
        awards: ["Biometrics Section Early Career Paper Award, ASA"],
        featured: true,
        blurb: "Matching-based causal estimators for messy, high-dimensional data from wearables and sensors — with answers you can read.",
        links: { site: "https://proceedings.mlr.press/v238/katta24a.html" },
      },
      {
        authors: "C. Rudin, C. Zhong*, L. Semenova*, M. Seltzer*, R. Parr*, J. Liu*, <strong>S. Katta*</strong>, J. Donnelly*, H. Chen*, Z. Boner*",
        title: "Amazing Things Come from Having Many Good Models",
        venue: "ICML",
        year: 2024,
        awards: ["Spotlight (Top 3%)"],
        links: { site: "https://proceedings.mlr.press/v235/rudin24a.html" },
      },
      {
        authors: "J. Donnelly*, <strong>S. Katta*</strong>, C. Rudin, E. Browne",
        title: "The Rashomon Importance Distribution: Getting Rid of Unstable, Single Model-Based Variable Importance",
        venue: "NeurIPS",
        year: 2023,
        awards: ["Spotlight (Top 3%)"],
        featured: true,
        blurb: "Variable importance shouldn't depend on which equally-good model you happened to fit. A distribution-level answer that doesn't.",
        links: { site: "https://arxiv.org/abs/2309.13775", pdf: "https://openreview.net/pdf?id=TczT2jiPT5" },
      },
      {
        authors: "Y. J. Yang, K. Hackett, <strong>S. Katta</strong>, R. M. Ludwig, J. Jarcho, T. Giovannetti, D. S. Fareri, D. V. Smith",
        title: "Psychological, Social, and Health-Related Factors Predict Risk for Financial Exploitation",
        venue: "Communications Psychology",
        year: 2023,
        awards: ["SRNDNA Open Data Award"],
        links: { site: "https://www.nature.com/articles/s44271-025-00266-x" },
      },
    ],
    submitted: [
      {
        authors: "A. van Loon, <strong>S. Katta</strong>, C. A. Bail, D. S. Hillygus, A. Volfovsky",
        title: "Designing Social Media to Promote Productive Political Dialogue on a New Research Platform",
        venue: "Revise & Resubmit at Nature Scientific Reports",
        year: 2025,
        links: {preprint: "https://osf.io/preprints/psyarxiv/dngcj"},
      },
      {
        authors: "G. Tierney*, <strong>S. Katta*</strong>, C. Bail, S. Hillygus, A. Volfovsky",
        title: "A New Experimental Design for Causal Inference with Text: Can a Language Model Be Too Big?",
        venue: "Revise & Resubmit, JRSSA",
        year: 2025,
        links: {preprint: "https://arxiv.org/abs/2510.08758"},
      },
    ],
    inPrep: [
      {
        authors: "<strong>S. Katta</strong>, H. Parikh, C. Rudin, A. Volfovsky, H. Sun, B. Westover",
        title: "Why Machine Learning Your Biological Age Fails",
        venue: "In preparation",
        year: "2025+",
        awards: ["1st Place, AAAI W3PHIAI Hackathon on Aging"],
        links: {},
      },
    ],
  },

  // -----------------------------------------------------------
  //  AWARDS
  // -----------------------------------------------------------
  awards: [
    { year: 2026, title: "Risk Analysis Section Early Career Paper Award (Honorable Mention)", org: "American Statistical Association" },
    { year: 2025, title: "Apple Scholar in AI/ML Fellowship", org: "Apple" },
    { year: 2024, title: "Biometrics Section Early Career Paper Award", org: "American Statistical Association" },
    { year: 2023, title: "1st Place, AAAI W3PHIAI Hackathon on Aging", org: "AAAI" },
    { year: 2023, title: "Open Data Award", org: "Scientific Research Network on Decision Neuroscience and Aging" },
    { year: 2022, title: "Scott Hibbs Future of Computing Award", org: "Temple University" },
  ],

  // -----------------------------------------------------------
  //  EXPERIENCE
  // -----------------------------------------------------------
  experience: [
    {
      role: "Machine Learning Research Scientist Intern",
      org: "Apple",
      where: "New York City, NY",
      dates: "May 2025 – Aug 2025",
      bullets: [
        "Developed longitudinal biomarkers of aging from over 149 million participant-days of wearables data.",
        "Improved disease diagnoses from cross-sectional aging biomarkers by 20%+.",
        "Predicted onset of adverse heart events with accuracy comparable to invasive longitudinal biomarkers.",
      ],
    },
    {
      role: "Applied Scientist Intern",
      org: "Amazon",
      where: "Seattle, WA",
      dates: "May 2024 – Aug 2024",
      bullets: [
        "Automated analyses of customer-level experimental data at scale, reducing runtime by 10×+.",
        "Analyzed hundreds of customer-level datasets with over 9 billion observations to generate causal insights under unobserved confounding.",
        "Derived asymptotic behavior of a new estimator, enabling efficient computation of p-values and confidence intervals.",
      ],
    },
  ],

  // -----------------------------------------------------------
  //  TIMELINE  — research + technical experience, most recent
  //  first. kind: "industry" (filled dot) or "research" (hollow).
  // -----------------------------------------------------------
  timeline: [
    {
      kind: "industry",
      role: "Machine Learning Research Scientist Intern",
      org: "Apple",
      where: "New York City, NY",
      dates: "May 2025 – Aug 2025",
      desc: "Built longitudinal biomarkers of aging from 149 million+ participant-days of wearables data, improving disease diagnoses by 20%+.",
    },
    {
      kind: "industry",
      role: "Applied Scientist Intern",
      org: "Amazon",
      where: "Seattle, WA",
      dates: "May 2024 – Aug 2024",
      desc: "Generated causal insights under unobserved confounding from experiments with 9 billion+ observations; derived asymptotics for a new estimator.",
    },
    {
      kind: "research",
      role: "PhD Researcher",
      org: "Almost Matching Exactly Lab, Duke University",
      where: "Durham, NC",
      dates: "Aug 2022 – Present",
      desc: "Interpretable causal inference for wearable and sensor data; stable, uncertainty-aware variable importance. Advised by Cynthia Rudin & Alexander Volfovsky.",
    },
    {
      kind: "industry",
      role: "Data Science Intern",
      org: "Disney+ & ESPN+, Disney",
      where: "New York, NY",
      dates: "May 2021 – Aug 2021",
      desc: "Improved churn, subscription-propensity, and upsell models by up to 10%; built a Python package for evaluating models across subpopulations.",
    },
    {
      kind: "research",
      role: "Research Assistant",
      org: "Temple Data Science Institute",
      where: "Philadelphia, PA",
      dates: "Aug 2020 – Aug 2022",
      desc: "Devised network-modeling algorithms; automated topic and network analyses of 600,000+ tweets; co-developed a data science textbook.",
    },
    {
      kind: "industry",
      role: "People Data Science Intern",
      org: "Dyson",
      where: "Chicago, IL",
      dates: "Jun 2020 – Aug 2020",
      desc: "Forecast COVID-19 cases to guide store reopenings; automated HR analytics and auditing, saving $250,000+ annually.",
    },
    {
      kind: "research",
      role: "Research Intern",
      org: "Federal Reserve Bank of Philadelphia",
      where: "Philadelphia, PA",
      dates: "May 2019 – May 2020",
      desc: "Surveyed 8,000+ businesses on inflation expectations to advise policy; analyses cited by CNN, Reuters, and WSJ.",
    },
    {
      kind: "research",
      role: "Intern",
      org: "Bureau of Labor Statistics",
      where: "Philadelphia, PA",
      dates: "Jan 2019 – May 2019",
      desc: "Studied correlates of the immigrant income gap across US states to inform immigration and labor policy.",
    },
    {
      kind: "research",
      role: "Research Assistant",
      org: "Temple Neuroeconomics Lab",
      where: "Philadelphia, PA",
      dates: "Aug 2018 – Aug 2022",
      desc: "Studied decision making and financial-scam susceptibility via field surveys (N = 3,000) and lab experiments; trained 6 research assistants.",
    },
  ],

  // -----------------------------------------------------------
  //  TALKS
  // -----------------------------------------------------------
  talks: [
    { year: 2025, host: "Duke University", title: "Guest Lecture — Causal Inference in Data Analysis with Applications to Fairness and Explanations", where: "Durham, NC" },
    { year: 2025, host: "INRIA", title: "Interpretable Causal Inference for Analyzing Wearable, Sensor, and Distributional Data", where: "Paris, FR" },
    { year: 2025, host: "Statistical Learning and Data Science", title: "Interpretable Causal Inference for Analyzing Wearable, Sensor, and Distributional Data", where: "Newport Beach, CA" },
    { year: 2024, host: "Joint Statistical Meetings", title: "Interpretable Causal Inference for Analyzing Wearable, Sensor, and Distributional Data", where: "Portland, OR" },
    { year: 2024, host: "Blue Cross Blue Shield of North Carolina", title: "Interpretable Causal Inference via Almost Matching Exactly", where: "Virtual" },
    { year: 2024, host: "INFORMS", title: "Interpretable Causal Inference for Analyzing Wearable, Sensor, and Distributional Data", where: "Phoenix, AZ" },
    { year: 2025, host: "Experimental Design in the Age of Generative AI (poster)", title: "A New Experimental Design for Causal Inference with Text", where: "Berkeley, CA" },
    { year: 2024, host: "Temple–Wells Fargo Data Science Conference (poster)", title: "Interpretable Causal Inference for Analyzing Wearable, Sensor, and Distributional Data", where: "Philadelphia, PA" },
  ],

  // -----------------------------------------------------------
  //  SERVICE
  // -----------------------------------------------------------
  service: [
    { year: 2025, role: "Session Chair", detail: "Interpretable Machine Learning — INFORMS" },
    { year: 2025, role: "Session Chair", detail: "Variable Importance for Scientific Discovery — INFORMS" },
    { year: 2024, role: "Session Chair", detail: "Machine Learning Aided Causal Inference — INFORMS" },
    { year: 2025, role: "Reviewer", detail: "Nature; European Journal of Operational Research; NeurIPS" },
    { year: 2024, role: "Reviewer", detail: "Machine Learning for Health; ICML" },
    { year: 2023, role: "Reviewer", detail: "INFORMS Journal on Computing; International Symposium on Information Theory" },
  ],

  // -----------------------------------------------------------
  //  TEACHING  — courses, TA roles, and notes you've written.
  //  Add a `url` to any item to make its title a link.
  // -----------------------------------------------------------
  teaching: {
    intro: `I write notes to help students understand the foundations of data science.
    These are working notes from my undergraduate and graduate courses, research, and teaching. 
    They're not polished — just my best effort to explain things clearly to myself. But if they help you too, that's great!`,
    notes: [
      // Add your existing notes here. Each item: { title, blurb, url, date }
      {
        title: "Programming in R",
        blurb: "Working notes to get started in R.",
        url: "./files/stat8109_notes/02-r_programming.pdf",                 // ← replace with the link to your notes
        date: "August 2021",
      },
      {
        title: "Math for Data Science",
        blurb: "There's a lot to cover, but here are the very, very basics.",
        url: "./files/stat8109_notes/03-math.pdf",                 // ← replace with the link to your notes
        date: "September 2021",
      },
      {
        title: "Probabilistic Modeling",
        blurb: "Probabilistic models help you understand where your data might have come from.",
        url: "./files/stat8109_notes/05-probabilistic_models.pdf",                 // ← replace with the link to your notes
        date: "October 2021",
      },
      {
        title: "Causal Inference and Overlap Violations",
        blurb: "Notes from my Guest Lecture at Duke.",
        url: "./files/overlap_and_extrapolation_notes.pdf",                 // ← replace with the link to your notes
        date: "April 2025",
      },
    ],
    courses: [
      {
        role: "Guest Lecturer",
        course: "Causal Inference in Data Analysis",
        institution: "Duke University",
        year: 2025,
      },
      {
        role: "Teaching Assistant",
        course: "Data Science",
        institution: "Duke University",
        year: 2023,
      },
      {
        role: "Teaching Assistant",
        course: "Applied Statistics and Data Science",
        institution: "Temple University",
        year: 2020,
      },
      {
        role: "Teaching Assistant",
        course: "Elements of Statistics and Data Science",
        institution: "Temple University",
        year: 2020,
      },
    ],
  },

  // -----------------------------------------------------------
  //  EDUCATION
  // -----------------------------------------------------------
  education: [
    { school: "Duke University", degree: "PhD in Computer Science", dates: "Aug 2022 – Present", detail: "Advisors: Cynthia Rudin & Alexander Volfovsky" },
    { school: "Temple University", degree: "BS in Mathematics & Computer Science", dates: "Aug 2018 – May 2022", detail: "Minor in Economics · GPA 3.96/4.00" },
  ],
};
