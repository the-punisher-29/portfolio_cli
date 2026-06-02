/* This is a command/data module (exports the command registry and helpers),
   not a React component module, so fast-refresh's component-only rule doesn't apply. */
/* eslint-disable react-refresh/only-export-components */
import type { Command } from "../components/CommandArea";
import {
  FaGithub,
  FaLink,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { HISTORY_KEY } from "../util/constants";

export interface CommandContext {
  /** Original (case-preserved) command string, trimmed. */
  raw: string;
  /** Lowercased, trimmed command string (e.g. "theme dracula"). */
  arg: string;
  setCommandList: React.Dispatch<React.SetStateAction<Command[]>>;
}

export interface CommandDef {
  name: string;
  desc: string;
  /** Hidden from help / ls / autocomplete (still runnable). */
  hidden?: boolean;
  run: (ctx: CommandContext) => JSX.Element | "";
}

const THEMES = [
  "rose-pine",
  "rose-pine-dawn",
  "dracula",
  "gruvbox",
  "nord",
  "matrix",
] as const;

function applyTheme(name: string) {
  document.documentElement.dataset.theme = name;
  try {
    localStorage.setItem("portfolio-theme", name);
  } catch {
    /* localStorage may be unavailable (private mode) — ignore */
  }
}

function renderThemeCommand(arg: string): JSX.Element {
  const name = arg.split(/\s+/)[1];
  const current = document.documentElement.dataset.theme || "rose-pine";

  if (!name) {
    return (
      <div>
        <p className="mb-2">
          Current theme:{" "}
          <span className="text-[var(--gold)]">{current}</span>
        </p>
        <p className="mb-1 text-[var(--iris)]">Available themes:</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {THEMES.map((t) => (
            <span
              key={t}
              className={
                "px-3 py-1 rounded-lg border " +
                (t === current
                  ? "border-[var(--gold)] text-[var(--gold)]"
                  : "border-[var(--overlay)] text-[var(--text)]")
              }
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-[var(--pine)]">
          Usage: <span className="text-[var(--gold)]">theme &lt;name&gt;</span>{" "}
          — e.g. <span className="text-[var(--gold)]">theme dracula</span>
        </p>
      </div>
    );
  }

  if ((THEMES as readonly string[]).includes(name)) {
    applyTheme(name);
    return (
      <p>
        Theme switched to <span className="text-[var(--gold)]">{name}</span> ✦
      </p>
    );
  }

  return (
    <div>
      <p className="text-[var(--love)]">Unknown theme: {name}</p>
      <p>
        Try one of:{" "}
        <span className="text-[var(--gold)]">{THEMES.join(", ")}</span>
      </p>
    </div>
  );
}

const projects = [
  {
    projName: "TripSync - Ride-Sharing Platform",
    shortDesc:
      "A comprehensive ride-sharing platform with multiple user roles and real-time tracking capabilities.",
    gbLink: "https://github.com/the-punisher-29/TripSync",
    liveLink: "",
    techTags: ["Kotlin", "XML", "Firebase", "Android"],
  },
  {
    projName: "People Entry/Exit Detector",
    shortDesc:
      "Real-time people counting system using computer vision for high-traffic areas with 95% accuracy.",
    gbLink: "https://github.com/the-punisher-29/Entry-Exit-Detector",
    liveLink: "",
    techTags: ["OpenCV", "MobileNetSSD", "CNN", "Python"],
  },
  {
    projName: "Cancer Diagnostic App",
    shortDesc:
      "A cutting-edge solution for diagnosing cancer and recommending treatments, focusing on Non-Small Cell Lung Cancer (NSCLC) with future plans to expand.(Under Collaboration of IIT Jodhpur and AIIMS Jodhpur)",
    gbLink: "https://github.com/the-punisher-29/Cancer_Diagnostics_App",
    liveLink: "",
    techTags: ["Kotlin", "XML", "Firebase", "AI", "Healthcare"],
  },
  {
    projName: "Movie Recommender System",
    shortDesc:
      "Personalized movie recommendation engine using machine learning algorithms and collaborative filtering.",
    gbLink: "https://github.com/the-punisher-29/Movie-Recommendor-System",
    liveLink: "",
    techTags: ["Python", "SKLearn", "TensorFlow", "NumPy", "Pandas"],
  },
  {
    projName: "Euro2024 Predictor",
    shortDesc:
      "DecisionTree-Based ML Model that predicts the results of all the EURO2024 Matches and consequently the winner. Trained using matches after 2009 for relevance.",
    gbLink: "https://github.com/the-punisher-29/EURO2024_Predictor",
    liveLink: "",
    techTags: ["Python", "Machine Learning", "DecisionTree", "Pandas"],
  },
  {
    projName: "ScreenTime Monitoring System",
    shortDesc:
      "A cross-platform application that tracks and manages the time users spend on their devices, with tailored features for Windows and macOS.",
    gbLink: "https://github.com/the-punisher-29/screen-time-monitoring-system",
    liveLink: "",
    techTags: ["C++", "WINAPI", "Windows", "macOS", "Cross-Platform"],
  },
  {
    projName: "MedSync",
    shortDesc:
      "MedSync is a pharmacy management platform connecting patients with the IITJ PHC Pharmacy. It enables users to browse, order, and track medicines while providing admins with analytics, inventory management, and user communication tools. With Firebase as the backend, MedSync offers secure, real-time updates and efficient data handling.",
    gbLink: "https://github.com/the-punisher-29/MedSync",
    liveLink: "",
    techTags: ["Firebase", "React", "JavaScript", "Android", "Tailwind CSS"],
  },
  {
    projName: "Akshar Sabha Website",
    shortDesc:
      "Created a website for the MUN Event at literary festival of IIT Jodhpur using React, Node, and Firebase.",
    gbLink: "https://github.com/the-punisher-29/Akshar_Sabha-Website-",
    liveLink: "",
    techTags: ["React", "Node.js", "Firebase", "JavaScript"],
  },
  {
    projName: "Super_GTA Adventure",
    shortDesc: "An interactive web game built using JavaScript.",
    gbLink: "https://github.com/the-punisher-29/Super_GTA_Adventure",
    liveLink: "",
    techTags: ["JavaScript", "Game Development", "HTML", "CSS"],
  },
  {
    projName: "EatScape Online Food Ordering Application",
    shortDesc:
      "An Android-based online food ordering app built using Android Studio, a self-learning project.",
    gbLink: "https://github.com/the-punisher-29/EatScape",
    liveLink: "",
    techTags: ["Android Studio", "Google Cloud", "XML", "Firebase"],
  },
];

const skillSections = [
  {
    heading: "Languages",
    skills: [
      "C/C++",
      "Python",
      "R",
      "Shell Scripting",
      "HTML/CSS",
      "JavaScript",
      "SQL",
      "Kotlin",
      "XML",
    ],
  },
  {
    heading: "Developer Tools",
    skills: [
      "VS Code",
      "PyCharm",
      "MATLAB",
      "Firebase",
      "Android Studio",
      "R-Studio",
      "PostgreSQL",
      "Oracle DB",
      "DataLake",
      "ElasticSearch",
      "Kafka",
      "GitHub",
      "Arduino IDE",
      "Unity",
      "Simulink",
      "Xilinx Vivado",
      "Keil µVision",
    ],
  },
  {
    heading: "Technologies / Frameworks",
    skills: [
      "Linux (Ubuntu)",
      "Git",
      "SpringBoot",
      "Google Cloud",
      "Azure",
      "Vercel",
      "React.js",
      "Node.js",
      "Scikit-Learn",
      "OpenCV",
      "Pandas",
      "TensorFlow",
      "PostgreSQL",
      "CUDA-Q",
      "Cryptography Libraries",
    ],
  },
  {
    heading: "Specialized Domains",
    skills: [
      "Security & Cryptography",
      "Generative AI",
      "Quantum Computing",
      "Embedded Systems",
      "Android App Development",
    ],
  },
];

const socials = [
  {
    social: "Github",
    link: "https://github.com/the-punisher-29",
    username: "the-punisher-29",
    icon: <FaGithub />,
  },
  {
    social: "Twitter(X)",
    link: "https://x.com/SoumenK28351241",
    username: "SoumenK28351241",
    icon: <FaTwitter />,
  },
  {
    social: "LinkedIn",
    link: "https://www.linkedin.com/in/soumen2919/",
    username: "soumen2919",
    icon: <FaLinkedin />,
  },
  {
    social: "Email",
    link: "mailto:soumenkumar9503@gmail.com",
    username: "soumenkumar9503@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    social: "Email",
    link: "mailto:soumensinghdev@gmail.com",
    username: "soumensinghdev@gmail.com",
    icon: <FaEnvelope />,
  },
];

const cpProfiles = [
  {
    name: "Codeforces",
    logo: "/2944796.webp",
    stat: "Expert (1864)",
    statLabel: "Rating:",
    link: "https://codeforces.com/profile/soumen_kr003",
  },
  {
    name: "CodeChef",
    logo: "/6179134-middle.png",
    stat: "1814 (4★)",
    statLabel: "Rating:",
    link: "https://www.codechef.com/users/soumen_1929",
  },
  {
    name: "LeetCode",
    logo: "/leetcode.png",
    stat: "550+",
    statLabel: "Problems Solved:",
    link: "https://leetcode.com/u/Soumen_Kr/",
  },
];

const ALL_COMMANDS: CommandDef[] = [
  {
    name: "about",
    desc: "Learn more about me",
    run: () => (
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="lg:w-2/3">
          <h1 className="lg:text-2xl md:text-2xl text-xl font-bold text-[var(--gold)] mb-2">
            About Soumen Kumar
          </h1>
          <div>
            <p className="mt-2">
              I recently graduated from IIT Jodhpur with a B.Tech in Engineering
              Science, specializing in{" "}
              <span className="text-[var(--gold)]">Computer Science</span> and{" "}
              <span className="text-[var(--gold)]">Electrical Engineering</span>.
            </p>
            <p className="mt-2">
              Most of my work sits between software and systems: backend
              engineering, cloud infrastructure, machine learning, embedded
              systems, cryptography, and{" "}
              <span className="text-[var(--gold)]">quantum computing</span>. I like
              problems that need real theory and code that actually ships.
            </p>
            <p className="mt-2">
              The things I keep coming back to are algorithms, system security,
              secure and{" "}
              <span className="text-[var(--gold)]">post-quantum cryptography</span>,{" "}
              <span className="text-[var(--gold)]">generative AI</span>, and
              distributed systems. I've worked on these through coursework,
              internships, and open source, on projects spanning ML, healthcare
              tech, and quantum software.
            </p>
            <p className="mt-2">
              Away from the screen, I do competitive programming, mess around with
              math, and play badminton and esports. I do my best work with people
              who genuinely like hard problems.
            </p>
            <p className="text-xs mt-2 italic">
              — Curious by default, and running more side projects than I probably
              should.
            </p>
          </div>
        </div>

        <div className="lg:w-1/4 flex justify-center lg:justify-end lg:sticky lg:top-4">
          <div className="w-[280px] h-[280px] overflow-hidden border-2 border-[var(--gold)] shadow-lg">
            <picture>
              <source srcSet="/profile.webp" type="image/webp" />
              <img
                src="/20240628_153106.jpg"
                alt="Soumen Kumar"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
                width={280}
                height={280}
              />
            </picture>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "experiences",
    desc: "Where I've worked & researched",
    run: () => (
      <div className="">
        <h1 className="lg:text-2xl md:text-2xl text-xl font-bold text-[var(--gold)] mb-4">
          Experiences
        </h1>
        <div>
          <p className="mt-2 text-[var(--iris)]">
            As an IIT Jodhpur undergraduate, I have had the privilege of gaining hands-on
            experience across diverse technical domains, allowing me to connect academic
            learning with impactful real-world applications.
          </p>
          <div className="mt-4">
            <div className="border-2 border-[var(--pine)] rounded-lg p-4 mb-4">
              <h2 className="text-[var(--gold)] font-bold text-lg mb-2">
                Undergraduate Research Scholar — AyurTech Lab, Electrical Department, IIT Jodhpur
              </h2>
              <p className="text-[var(--pine)]">(August 2025 – January 2026)</p>
              <ul className="list-disc list-inside mt-2">
                <li className="mb-2">
                  Researched <strong>nanosensors</strong> and
                  <strong> embedded systems</strong> integrated with
                  <strong> machine learning</strong> for healthtech applications,
                  with a focus on intelligent sensing and diagnostics.
                </li>
                <li className="mb-2">
                  Designed and tested sensor-data acquisition pipelines and predictive
                  ML models aimed at early-stage health condition detection.
                </li>
                <li>
                  Built an <strong>AIoT</strong> platform that senses and detects
                  <strong> VOC</strong> gas concentrations (ppm) using an array of
                  sensors and a calibrated ML model.
                </li>
              </ul>
            </div>

            <div className="border-2 border-[var(--pine)] rounded-lg p-4 mb-4">
              <h2 className="text-[var(--gold)] font-bold text-lg mb-2">
                Data Science Intern at InfoEdge (naukri.com)
              </h2>
              <p className="text-[var(--pine)]">(May 2025 – July 2025)</p>
              <ul className="list-disc list-inside mt-2">
                <li className="mb-2">
                  Worked with the <strong>Content Recommendation Team</strong> for the <strong>Minis</strong>
                  section (web & mobile), revamping the recommendation pipeline using
                  <strong> Bayesian statistics</strong> and <strong>ranking algorithms</strong>
                  to enhance personalized content delivery.
                </li>
                <li>
                  Built an <strong>interactive analytics dashboard</strong> using
                  <strong> DataLake</strong> and <strong>Kafka</strong> to deliver live
                  comparative insights between the legacy Minis feed and the
                  <strong> Unified feed</strong> (beta-tested by 5% of the user base).
                </li>
              </ul>
            </div>

            <div className="border-2 border-[var(--pine)] rounded-lg p-4 mb-4">
              <h2 className="text-[var(--gold)] font-bold text-lg mb-2">
                SDE Intern — CybraneX
              </h2>
              <p className="text-[var(--pine)]">(November 2024 – April 2025 · Remote)</p>
              <ul className="list-disc list-inside mt-2">
                <li className="mb-2">
                  Developed <strong>CUDA-Q</strong> applications and hybrid quantum
                  workflows for optimization tasks.
                </li>
                <li className="mb-2">
                  Built <strong>AI voice agents</strong> with speech-processing and
                  automation capabilities.
                </li>
                <li>
                  Contributed to quantum hardware integration, testing, and
                  experiment execution.
                </li>
              </ul>
            </div>

            <div className="border-2 border-[var(--pine)] rounded-lg p-4 mb-4">
              <h2 className="text-[var(--gold)] font-bold text-lg mb-2">
                Software Engineer (Part-Time) — CybraneX
              </h2>
              <p className="text-[var(--pine)]">(August 2025 – May 2026 · Remote)</p>
              <ul className="list-disc list-inside mt-2">
                <li className="mb-2">
                  Developed hybrid <strong>quantum-classical</strong> solutions for
                  energy grid optimization.
                </li>
                <li className="mb-2">
                  Worked on <strong>MatrixAI</strong>, a low-level numerical
                  computation engine.
                </li>
                <li className="mb-2">
                  Built full-stack platforms for remote quantum systems
                  (<strong>NMR</strong>) and startup simulation environments.
                </li>
                <li>
                  Developed scalable <strong>APIs</strong> and real-time data
                  services for scientific workloads.
                </li>
              </ul>
            </div>

            <div className="border-2 border-[var(--pine)] rounded-lg p-4">
              <h2 className="text-[var(--gold)] font-bold text-lg mb-2">
                Researcher — bHaptics Tactile Communication Project
              </h2>
              <p className="text-[var(--pine)]">(August 2023 – March 2024)</p>
              <ul className="list-disc list-inside mt-2">
                <li className="mb-2">
                  Engineered vibrotactile communication patterns using the bHaptics Tact Suit (x40)
                  and Meta Quest, enabling real-time tactile communication for over 50 differently-abled individuals.
                </li>
                <li className="mb-2">
                  Built a 2x2 vibrotactile display with LRA actuators capable of representing
                  all 36 alphanumeric characters, improving tactile communication efficiency by 30%.
                </li>
                <li>
                  Simulated and tested the tactile feedback system with MATLAB, Arduino IDE, Unity,
                  and Simulink, reducing response time by 20%.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "projects",
    desc: "A glimpse into my work",
    run: () => (
      <div className="">
        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[var(--surface)] to-[var(--gradient-to)] p-6 rounded-lg mb-6 border-b-4 border-b-[var(--gold)] hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-[var(--gold)] lg:text-3xl text-xl font-bold mb-2">
              {item.projName}
            </h2>
            <p className="text-[var(--text)] mb-4">{item.shortDesc}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {item.techTags.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-[var(--overlay)] text-[var(--iris)] px-3 py-1 rounded-lg shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {item.gbLink && (
                <a
                  href={item.gbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] hover:text-[var(--foam)] flex items-center"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              )}
              {item.liveLink && (
                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] hover:text-[var(--foam)] flex items-center"
                >
                  <FaLink className="mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "skills",
    desc: "Checkout my technical skills",
    run: () => (
      <div>
        {skillSections.map((section) => (
          <div
            key={section.heading}
            className={
              "mb-4 " +
              (section.heading === "Specialized Domains"
                ? "bg-[var(--surface)] border border-[var(--gold)] p-4 rounded-lg"
                : "")
            }
          >
            <h2 className="text-lg lg:text-xl md:text-xl mb-2 text-[var(--gold)]">
              {section.heading}
            </h2>
            <div className="flex flex-wrap gap-3">
              {section.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[var(--overlay)] text-[var(--iris)] px-3 py-1 rounded-lg shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "achievements",
    desc: "Achievements & competitive-programming profiles",
    run: () => (
      <div className="bg-gradient-to-r from-[var(--surface)] to-[var(--gradient-to)] p-6 rounded-lg border-b-4 border-b-[var(--gold)] hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-[var(--gold)] lg:text-3xl text-xl font-bold mb-6">
          CP Profiles
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cpProfiles.map((p) => (
            <div
              key={p.name}
              className="bg-[var(--surface)] p-6 rounded-lg shadow-lg border-2 border-[var(--gold)] transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img src={p.logo} alt={`${p.name} Logo`} className="h-12 w-12 mr-4" />
                <h2 className="text-[var(--gold)] text-xl font-bold">{p.name}</h2>
              </div>
              <p className="text-[var(--text)] mb-2">
                <strong>{p.statLabel}</strong> {p.stat}
              </p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--gold)] hover:text-[var(--foam)]"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[var(--surface)] to-[var(--gradient-to)] p-6 rounded-lg border-b-4 border-b-[var(--gold)] hover:shadow-lg transition-shadow duration-300 mt-6">
          <h2 className="text-[var(--gold)] lg:text-3xl text-xl font-bold mb-4">
            Other Achievements
          </h2>
          <ul className="list-disc pl-5 text-[var(--text)]">
            <li>Department Rank 3 in B.Tech CS+EE</li>
            <li>3rd Prize (Project Demonstration) in Industry Day-2024 @ IITJ</li>
            <li>Part of IITJ Team in ISRO-URC 24</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    name: "socials",
    desc: "You can find me here!",
    run: () => (
      <div>
        <p className="mb-2">
          Interested in connecting with me? Feel free to reach out! I'm active
          on <span className="text-[var(--gold)]">Twitter(X)</span> and{" "}
          <span className="text-[var(--gold)]">Email</span>.
        </p>
        {socials.map((item) => (
          <div key={item.username} className="flex items-center mb-2">
            <span className="text-[var(--gold)]  mr-2">{item.icon}</span>
            <span className="text-[var(--gold)] w-28">{item.social}</span>
            <a
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
              className="text-[var(--iris)] hover:text-[var(--hover)] hover:underline"
            >
              {item.username}
            </a>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "resume",
    desc: "Download my resume",
    run: () => {
      const link = document.createElement("a");
      link.href = "/GP_Res_SDE_Role_MIX__Off.pdf";
      link.download = "Soumen's_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return "";
    },
  },
  {
    name: "goals",
    desc: "What I'm currently exploring",
    run: () => (
      <div className="">
        <ul className="list-disc list-inside">
          <li className="m-2 text-[var(--pine)]">
            Learning about{" "}
            <span className="text-[var(--gold)]">Generative AI</span> and{" "}
            <span className="text-[var(--gold)]">Large Language Models (LLMs)</span>
          </li>
          <li className="m-2 text-[var(--pine)]">
            Making meaningful{" "}
            <span className="text-[var(--gold)]">open source</span> contributions
          </li>
          <li className="m-2 text-[var(--pine)]">
            Explore and Excel in{" "}
            <span className="text-[var(--gold)]">system design</span> and{" "}
            <span className="text-[var(--gold)]">cloud technologies</span>
          </li>
          <li className="m-2 text-[var(--pine)]">
            learning{" "}
            <span className="text-[var(--gold)]">terminal and desktop applications</span>{" "}
            development with DotNet and C++
          </li>
        </ul>
        <p className=" ">
          Last updated on <span className="text-[var(--gold)]">09-08-2025</span>
        </p>
      </div>
    ),
  },
  {
    name: "blogs",
    desc: "A collection of my thoughts and occasional rants",
    run: () => {
      window.open(
        "https://fallacious-air-9fe.notion.site/Welcome-to-my-blog-165b1767627780a6883dd731f94dd979?pvs=74",
        "_blank"
      );
      return "";
    },
  },
  {
    name: "neofetch",
    desc: "System info, terminal-style",
    run: () => {
      const theme = document.documentElement.dataset.theme || "rose-pine";
      const secs = Math.max(0, Math.floor(performance.now() / 1000));
      const uptime = `${Math.floor(secs / 60)}m ${secs % 60}s`;
      const rows: [string, string][] = [
        ["OS", "Linux (Arch / Ubuntu)"],
        ["Host", "IIT Jodhpur — CS + EE"],
        ["Role", "SWE • ML • Quantum • Security"],
        ["Shell", "portfolio.sh"],
        ["Editor", "VS Code / Neovim"],
        ["Languages", "C/C++, Python, Kotlin, TS"],
        ["CP", "CF Expert (1864) • CC 4★ • LC 550+"],
        ["Theme", theme],
        ["Uptime", uptime],
      ];
      const swatches = [
        "var(--btn-close)",
        "var(--love)",
        "var(--rose)",
        "var(--gold)",
        "var(--btn-max)",
        "var(--pine)",
        "var(--foam)",
        "var(--iris)",
      ];
      return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
          {/* prettier-ignore */}
          <pre className="text-[var(--gold)] text-xs leading-tight">
{` ┌────────────┐
 │ guest@~ $_ │
 │            │
 │  > soumen  │
 │            │
 └────────────┘`}
          </pre>
          <div>
            <p className="mb-1">
              <span className="text-[var(--gold)]">guest</span>
              <span className="text-[var(--text)]">@</span>
              <span className="text-[var(--gold)]">portfolio</span>
            </p>
            <p className="text-[var(--iris)] mb-1">---------------</p>
            {rows.map(([k, v]) => (
              <p key={k}>
                <span className="text-[var(--gold)] inline-block w-24">{k}</span>
                <span className="text-[var(--text)]">{v}</span>
              </p>
            ))}
            <div className="flex gap-1 mt-3">
              {swatches.map((c, i) => (
                <span
                  key={i}
                  className="inline-block w-4 h-4 rounded-sm"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    name: "whoami",
    desc: "Print the current user",
    run: () => <p>guest</p>,
  },
  {
    name: "ls",
    desc: "List available commands",
    run: () => (
      <div className="flex flex-wrap gap-x-6 gap-y-1">
        {COMMANDS.map((c) => (
          <span key={c.name} className="text-[var(--foam)]">
            {c.name}
          </span>
        ))}
      </div>
    ),
  },
  {
    name: "date",
    desc: "Show the current date & time",
    run: () => <p>{new Date().toString()}</p>,
  },
  {
    name: "echo",
    desc: "Print a line of text",
    run: ({ raw }) => (
      <p className="whitespace-pre-wrap break-words">{raw.slice(4).trim()}</p>
    ),
  },
  {
    name: "history",
    desc: "Show command history",
    run: () => {
      let items: string[] = [];
      try {
        const stored = localStorage.getItem(HISTORY_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed))
            items = parsed.filter((x) => typeof x === "string");
        }
      } catch {
        /* ignore */
      }
      if (items.length === 0)
        return <p className="text-[var(--pine)]">No history yet.</p>;
      return (
        <div>
          {items.map((h, i) => (
            <p key={i}>
              <span className="text-[var(--pine)] inline-block w-10 text-right pr-3">
                {i + 1}
              </span>
              <span>{h}</span>
            </p>
          ))}
        </div>
      );
    },
  },
  {
    name: "theme",
    desc: "Switch color theme (try 'theme dracula')",
    run: ({ arg }) => renderThemeCommand(arg),
  },
  {
    name: "clear",
    desc: "Clear the terminal",
    run: ({ setCommandList }) => {
      setCommandList([]);
      return "";
    },
  },
  {
    name: "help",
    desc: "List all available commands",
    run: () => (
      <div>
        <p className="text-[var(--iris)] mb-1">All available commands:</p>
        {COMMANDS.map((item) => (
          <div key={item.name} className="flex items-start">
            <span className="text-[var(--gold)] lg:w-36 min-w-28 md:w-36">
              {item.name}
            </span>
            <span className="text-[var(--pine)]">- {item.desc}</span>
          </div>
        ))}
        <div className="flex items-start">
          <span className="text-[var(--gold)] lg:w-36 min-w-28 md:w-36">
            sudo rm -rf /*
          </span>
          <span className="text-[var(--pine)]">- Try it on your own risk</span>
        </div>
      </div>
    ),
  },
  // ----- hidden commands (runnable, but not listed in help/ls/autocomplete) -----
  {
    name: "pwd",
    desc: "Print working directory",
    hidden: true,
    run: () => <p>/home/soumen/portfolio</p>,
  },
  {
    name: "sudo rm -rf /*",
    desc: "Try it on your own risk",
    hidden: true,
    run: () => {
      const newWindow = window.open("about:blank", "_blank");
      if (newWindow) {
        newWindow.document.write(`
            <html>
              <head>
                <title>System Alert</title>
                <style>
                  body {
                    background-color: #222;
                    color: #fff;
                    font-family: Arial, sans-serif;
                  }
                  h1, h2 {
                    text-align: center;
                    font-size: 2.5em;
                  }
                  #progress-bar {
                    width: 0%;
                    height: 20px;
                    background-color: #ff4500;
                    border-radius: 5px;
                    transition: width 0.3s ease-in-out;
                  }
                  .content {
                    text-align: center;
                    margin: 20px;
                  }
                </style>
              </head>
              <body>
                <div class="content">
                  <h1 style="color: #ff6347;">🚨 OH NO! SYSTEM MELTDOWN! 🚨</h1>
                  <h2 style="color: #ffda44;">Your data is being... well, it's gone.!!</h2>
                  <p>Your computer is busy wiping out every single byte of data.</p>
                  <div style="width: 80%; margin: 0 auto; background-color: #444; border-radius: 10px;">
                    <div id="progress-bar"></div>
                  </div>
                  <p id="progress-text" style="font-size: 1.2em; margin-top: 10px;">Progress: 0%</p>
                </div>
                <script>
                  let progress = 0;
                  const progressBar = document.getElementById('progress-bar');
                  const progressText = document.getElementById('progress-text');
                  const interval = setInterval(() => {
                    if (progress < 100) {
                      progress += 5;
                      progressBar.style.width = progress + '%';
                      progressText.textContent = \`Progress: \${progress}%\`;
                    } else {
                      clearInterval(interval);
                      setTimeout(() => {
                        document.body.innerHTML = "<h1 style='color: lime;'>Phew! You were one step away from clean wipe :)</h1>";
                        document.body.innerHTML += "<p style='font-size: 1.5em; text-align:center'>Your files are safe. No worries</p>";
                      }, 1000);
                    }
                  }, 200);
                </script>
              </body>
            </html>
          `);
      } else {
        window.location.href = "about:blank";
      }
      return "";
    },
  },
];

/** Visible commands (used by help, ls, autocomplete, and suggestions). */
export const COMMANDS: CommandDef[] = ALL_COMMANDS.filter((c) => !c.hidden);
export const COMMAND_NAMES = COMMANDS.map((c) => c.name);

/** Resolve a typed command string to its definition. */
export function findCommand(arg: string): CommandDef | undefined {
  if (!arg) return undefined;
  const exact = ALL_COMMANDS.find((c) => c.name === arg);
  if (exact) return exact;
  const first = arg.split(/\s+/)[0];
  return ALL_COMMANDS.find((c) => c.name === first);
}
