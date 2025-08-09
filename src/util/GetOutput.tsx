import { Command } from "../components/CommandArea";
import {
  FaGithub,
  FaLink,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
export function GetOutput(
  command: string,
  setCommandList: React.Dispatch<React.SetStateAction<Command[]>>
): JSX.Element | "" {
  switch (command.toLowerCase().trim()) {
    case "clear":
      setCommandList([]);
      return "";
    case "blogs":
      window.open("https://fallacious-air-9fe.notion.site/Welcome-to-my-blog-165b1767627780a6883dd731f94dd979?pvs=74", "_blank");
      return "";
    case "resume":
      const url = "/GP_Res_SDE_Role_MIX__Off.pdf";
      const link = document.createElement("a");
      link.href = url;
      link.download = "Soumen's_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return "";
    // case "about":
    //   return (
    //     <div className="flex flex-col lg:flex-row gap-8 items-start">
    //       <div className="lg:w-2/3">
    //         <h1 className="lg:text-2xl md:text-2xl text-xl font-bold text-[#f6c177] mb-2">
    //           About Soumen Kumar
    //         </h1>
    //         <div>
    //           <p className="mt-2">
    //             Oh, hey - meet me, a final-year undergrad at IIT Jodhpur who's juggling{" "}
    //             <span className="text-[#f6c177]">Computer Science</span> and{" "}
    //             <span className="text-[#f6c177]">Electrical Engineering</span> like it's no big deal 
    //             (spoiler: it totally is). While everyone else is picking sides between hardware and software, 
    //             I'm out here saying "Why not both?" and actually making it work.
    //           </p>
              
    //           <p className="mt-2">
    //             When I'm not diving deep into some data structures and algorithms study that would make most people's heads spin, 
    //             I'm probably building some app or tweaking frontend designs - you know, casual weekend stuff. 
    //             And just to keep things interesting, I've got this whole{" "}
    //             <span className="text-[#f6c177]">competitive coding</span> thing going on, 
    //             because apparently regular programming wasn't challenging enough.
    //           </p>
              
    //           <p className="mt-2">
    //             But don't let all this tech talk fool you. Off the keyboard, I'm busy destroying 
    //             opponents in badminton or strategizing in esports, proving that you can indeed be 
    //             a tech wizard and have a life (shocking, I know). The best part? I'm actually using 
    //             these gaming skills to level up my teamwork and strategic thinking - pretty clever, right?
    //           </p>
              
    //           <p className="mt-2">
    //             Fair warning though: if you get me started on{" "}
    //             <span className="text-[#f6c177]">machine learning</span> or{" "}
    //             <span className="text-[#f6c177]">embedded systems</span>, you might want to grab 
    //             a coffee first. I've got this infectious enthusiasm for building stuff that actually 
    //             matters, and I'm always on the lookout for other tech enthusiasts who share my 
    //             "let's make something awesome" mindset.
    //           </p>
              
    //           <p className="text-xs mt-2 italic">
    //             - ChatGPT (because I'm too busy coding to write my own bio, obviously)
    //           </p>
    //         </div>
    //       </div>
          
    //       {/* Profile Picture Container */}
    //     {/* Square Profile Picture Container */}
    //     <div className="lg:w-1/4 flex justify-center lg:justify-end lg:sticky lg:top-4">
    //       <div className="w-[280px] h-[280px] overflow-hidden border-2 border-[#f6c177] shadow-lg">
    //         <img
    //           src="/20240628_153106.jpg"
    //           alt="Soumen Kumar"
    //           className="w-full h-full object-cover object-center"
    //           loading="eager"
    //         />
    //       </div>
    //       </div>
    //     </div>
    //   );

    // ...existing code...
    case "about":
      return (
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-2/3">
            {/* Updated About section */}
            <h1 className="lg:text-2xl md:text-2xl text-xl font-bold text-[#f6c177] mb-2">
              About Soumen Kumar
            </h1>
            <div>
              <p className="mt-2">
                Final-year B.Tech student at IIT Jodhpur, pursuing a dual major in{" "}
                <span className="text-[#f6c177]">Computer Science</span> and{" "}
                <span className="text-[#f6c177]">Electrical Engineering</span>. I enjoy
                working at the intersection of hardware and software — from backend systems
                and cloud infrastructure to machine learning models and embedded devices.
              </p>
              <p className="mt-2">
                Recently, I completed a{" "}
                <span className="text-[#f6c177]">Data Science internship at Naukri.com</span>,
                where I worked on recommendation systems and real-time analytics pipelines.
                My interests currently span{" "}
                <span className="text-[#f6c177]">security & cryptography</span> (secure
                computation, zero-knowledge proofs, post-quantum cryptography),{" "}
                <span className="text-[#f6c177]">Generative AI</span>, mathematics,
                algorithms, and statistics.
              </p>
              <p className="mt-2">
                On the development side, I’m exploring{" "}
                <span className="text-[#f6c177]">SpringBoot</span> for backend engineering
                and leveraging <span className="text-[#f6c177]">cloud platforms</span> for
                scalable applications. For my B.Tech project, I’m researching nanosensors
                and embedded systems integrated with machine learning for healthtech
                applications, focusing on intelligent data collection and analysis for
                better diagnostics.
              </p>
              <p className="mt-2">
                When I’m not immersed in code or research, you’ll find me exploring new
                concepts in mathematics, reading about algorithmic problem-solving, or
                engaged in sports like badminton and esports — sharpening both my
                analytical and strategic thinking skills. I believe in building tech that
                matters and collaborating with people who share the “let’s create something
                impactful” mindset.
              </p>
              <p className="text-xs mt-2 italic">
                — Written with a blend of caffeine, curiosity, and way too many side
                projects
              </p>
            </div>
          </div>

          {/* Profile Picture Container */}
          <div className="lg:w-1/4 flex justify-center lg:justify-end lg:sticky lg:top-4">
            <div className="w-[280px] h-[280px] overflow-hidden border-2 border-[#f6c177] shadow-lg">
              <img
                src="/20240628_153106.jpg"
                alt="Soumen Kumar"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      );
    case "goals":
      return (
        <div className="">
          <ul className="list-disc list-inside">
            <li className="m-2 text-[#31748f]">
              Learning about{" "}
              <span className="text-[#f6c177]">Generative AI</span> and{" "}
              <span className="text-[#f6c177]">Large Language Models (LLMs)</span>
            </li>
            <li className="m-2 text-[#31748f]">
              Making meaningful{" "}
              <span className="text-[#f6c177]">open source</span> contributions
            </li>
            <li className="m-2 text-[#31748f]">
              Explore and Excel in{" "}
              <span className="text-[#f6c177]">system design</span> and{" "}
              <span className="text-[#f6c177]">cloud technologies</span>
            </li>
            <li className="m-2 text-[#31748f]">
              learning{" "}
              <span className="text-[#f6c177]">terminal and desktop applications</span>{" "}
              development with DotNet and C++
            </li>
          </ul>
          <p className=" ">
            Last updated on{" "}
            <span className="text-[#f6c177]">09-08-2025</span>
          </p>
        </div>
      );
case "experiences":
  return (
    <div className="">
      <h1 className="lg:text-2xl md:text-2xl text-xl font-bold text-[#f6c177] mb-4">
        Experiences
      </h1>
      <div>
        <p className="mt-2 text-[#c4a7e7]">
          As an IIT Jodhpur undergraduate, I have had the privilege of gaining hands-on
          experience across diverse technical domains, allowing me to connect academic
          learning with impactful real-world applications.
        </p>
        <div className="mt-4">

          {/* UG Research Scholar - AyurTech Lab */}
          <div className="border-2 border-[#31748f] rounded-lg p-4 mb-4">
            <h2 className="text-[#f6c177] font-bold text-lg mb-2">
              Undergraduate Research Scholar — AyurTech Lab, Electrical Department, IIT Jodhpur
            </h2>
            <p className="text-[#31748f]">(August 2025 – Present)</p>
            <ul className="list-disc list-inside mt-2">
              <li className="mb-2">
                Researching <strong>nanosensors</strong> and 
                <strong> embedded systems</strong> integrated with 
                <strong> machine learning</strong> for healthtech applications, 
                focusing on intelligent sensing and diagnostics.
              </li>
              <li>
                Designing and testing sensor-data acquisition pipelines and predictive 
                ML models aimed at early-stage health condition detection.
              </li>
            </ul>
          </div>

          {/* InfoEdge Internship */}
          <div className="border-2 border-[#31748f] rounded-lg p-4 mb-4">
            <h2 className="text-[#f6c177] font-bold text-lg mb-2">
              Data Science Intern at InfoEdge (naukri.com)
            </h2>
            <p className="text-[#31748f]">(May 2025 – July 2025)</p>
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

          {/* CybraneX */}
          <div className="border-2 border-[#31748f] rounded-lg p-4 mb-4">
            <h2 className="text-[#f6c177] font-bold text-lg mb-2">
              Quantum Developer — CybraneX
            </h2>
            <p className="text-[#31748f]">(December 2024 – May 2025: Intern | August 2025 – Present: Part-time Software Engineer)</p>
            <ul className="list-disc list-inside mt-2">
              <li className="mb-2">
                Designing and simulating <strong>quantum circuits</strong> for hardware optimization 
                using <strong>Qiskit</strong> within the IBM Quantum environment.
              </li>
              <li>
                Developing <strong>Quantum Machine Learning (QML)</strong> workflows with <strong>CUDA-Q</strong>, 
                improving simulation performance and applying quantum optimization to logistics 
                and scheduling problems.
              </li>
            </ul>
          </div>

          {/* bHaptics Researcher */}
          <div className="border-2 border-[#31748f] rounded-lg p-4">
            <h2 className="text-[#f6c177] font-bold text-lg mb-2">
              Researcher — bHaptics Tactile Communication Project
            </h2>
            <p className="text-[#31748f]">(August 2023 – March 2024)</p>
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
  );



      case "projects":
          const projects = [
            {
              projName: "TripSync - Ride-Sharing Platform",
              shortDesc: "A comprehensive ride-sharing platform with multiple user roles and real-time tracking capabilities.",
              gbLink: "https://github.com/the-punisher-29/TripSync",
              liveLink: "",
              techTags: ["Kotlin", "XML", "Firebase", "Android"],
            },
            {
              projName: "People Entry/Exit Detector",
              shortDesc: "Real-time people counting system using computer vision for high-traffic areas with 95% accuracy.",
              gbLink: "https://github.com/the-punisher-29/Entry-Exit-Detector",
              liveLink: "",
              techTags: ["OpenCV", "MobileNetSSD", "CNN", "Python"],
            },
            {
              projName: "Cancer Diagnostic App",
              shortDesc: "A cutting-edge solution for diagnosing cancer and recommending treatments, focusing on Non-Small Cell Lung Cancer (NSCLC) with future plans to expand.(Under Collaboration of IIT Jodhpur and AIIMS Jodhpur)",
              gbLink: "https://github.com/the-punisher-29/Cancer_Diagnostics_App",
              liveLink: "",
              techTags: ["Kotlin", "XML", "Firebase", "AI", "Healthcare"],
            },
            {
              projName: "Movie Recommender System",
              shortDesc: "Personalized movie recommendation engine using machine learning algorithms and collaborative filtering.",
              gbLink: "https://github.com/the-punisher-29/Movie-Recommendor-System",
              liveLink: "",
              techTags: ["Python", "SKLearn", "TensorFlow", "NumPy", "Pandas"],
            },
            {
              projName: "Euro2024 Predictor",
              shortDesc: "DecisionTree-Based ML Model that predicts the results of all the EURO2024 Matches and consequently the winner. Trained using matches after 2009 for relevance.",
              gbLink: "https://github.com/the-punisher-29/EURO2024_Predictor",
              liveLink: "",
              techTags: ["Python", "Machine Learning", "DecisionTree", "Pandas"],
            },
            {
              projName: "ScreenTime Monitoring System",
              shortDesc: "A cross-platform application that tracks and manages the time users spend on their devices, with tailored features for Windows and macOS.",
              gbLink: "https://github.com/the-punisher-29/screen-time-monitoring-system",
              liveLink: "",
              techTags: ["C++", "WINAPI", "Windows", "macOS", "Cross-Platform"],
            },
            {
              projName: "MedSync",
              shortDesc: "MedSync is a pharmacy management platform connecting patients with the IITJ PHC Pharmacy. It enables users to browse, order, and track medicines while providing admins with analytics, inventory management, and user communication tools. With Firebase as the backend, MedSync offers secure, real-time updates and efficient data handling.",
              gbLink: "https://github.com/the-punisher-29/MedSync",
              liveLink: "",
              techTags: ["Firebase", "React", "JavaScript", "Android", "Tailwind CSS"],
            },
            
            {
              projName: "Akshar Sabha Website",
              shortDesc: "Created a website for the MUN Event at literary festival of IIT Jodhpur using React, Node, and Firebase.",
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
              shortDesc: "An Android-based online food ordering app built using Android Studio, a self-learning project.",
              gbLink: "https://github.com/the-punisher-29/EatScape",
              liveLink: "",
              techTags: ["Android Studio", "Google Cloud", "XML", "Firebase"],
            },
          ];
      return (
        <div className="">
          {projects.map((item, index) => {
            return (
              <div
                key={index}
                // className="bg-gradient-to-r from-[#292639] to-[#2b5e72] p-6 rounded-lg mb-6"
                className="bg-gradient-to-r from-[#292639] to-[#2b5e72] p-6 rounded-lg mb-6 border-b-4 border-b-[#f6c177] hover:shadow-lg transition-shadow duration-300"
              >
                {/* Project Name */}
                <h2 className="text-[#f6c177] lg:text-3xl text-xl font-bold mb-2">
                  {item.projName}
                </h2>

                {/* Short Description */}
                <p className="text-[#e0def4] mb-4">{item.shortDesc}</p>

                {/* Technologies Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.techTags.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#2e3440] text-[#c4a7e7] px-3 py-1 rounded-lg shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4">
                  {/* GitHub Link */}
                  {item.gbLink && (
                    <a
                      href={item.gbLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f6c177] hover:text-[#9ccfd8] flex items-center"
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
                      className="text-[#f6c177] hover:text-[#9ccfd8] flex items-center"
                    >
                      <FaLink className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );
case "skills":
  return (
    <div>
      {[
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
            "XML"
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
            "Simulink"
          ],
        },
        {
          heading: "Technologies / Frameworks",
          skills: [
            "Linux (Ubuntu)",
            "Git",
            "SpringBoot",
            "Google Cloud",
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
            "Bayesian Statistics",
            "Quantum Machine Learning",
            "Embedded Systems",
            "Android App Development"
          ],
        },
      ].map((section) => (
        <div
          key={section.heading}
          className={
            "mb-4 " +
            (section.heading === "Specialized Domains"
              ? "bg-[#292639] border border-[#f6c177] p-4 rounded-lg"
              : "")
          }
        >
          <h2 className="text-lg lg:text-xl md:text-xl mb-2 text-[#f6c177]">
            {section.heading}
          </h2>
          <div className="flex flex-wrap gap-3">
            {section.skills.map((skill) => (
              <span
                key={skill}
                className="bg-[#2e3440] text-[#c4a7e7] px-3 py-1 rounded-lg shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

    case "socials":
      return (
        <div>
          <p className="mb-2">
            Interested in connecting with me? Feel free to reach out! I'm active
            on <span className="text-[#f6c177]">Twitter(X)</span> and{" "}
            <span className="text-[#f6c177]">Email</span>.
          </p>
          {[
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
            // added second email address
            {
              social: "Email",
              link: "mailto:soumensinghdev@gmail.com",
              username: "soumensinghdev@gmail.com",
              icon: <FaEnvelope />,
            },
          ].map((item) => {
            return (
              <div className="flex items-center mb-2">
                <span className="text-[#f6c177]  mr-2">{item.icon}</span>
                <span className="text-[#f6c177] w-28">{item.social}</span>
                <a
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-[#c4a7e7] hover:text-[#9c5de9] hover:underline"
                >
                  {item.username}
                </a>
              </div>
            );
          })}
        </div>
      );

case "achievements":
  return (
    <div className="bg-gradient-to-r from-[#292639] to-[#2b5e72] p-6 rounded-lg border-b-4 border-b-[#f6c177] hover:shadow-lg transition-shadow duration-300">
      {/* Common Heading */}
      <h2 className="text-[#f6c177] lg:text-3xl text-xl font-bold mb-6">
        CP Profiles
      </h2>

      {/* Content Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Codeforces Box */}
        <div className="bg-[#292639] p-6 rounded-lg shadow-lg border-2 border-[#f6c177] transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <img
              src="/2944796.webp"
              alt="Codeforces Logo"
              className="h-12 w-12 mr-4"
            />
            <h2 className="text-[#f6c177] text-xl font-bold">Codeforces</h2>
          </div>
          <p className="text-[#e0def4] mb-2">
            <strong>Rating:</strong> Expert (1832)
          </p>
          <a
            href="https://codeforces.com/profile/soumen_kr003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f6c177] hover:text-[#9ccfd8]"
          >
            View Profile
          </a>
        </div>

        {/* CodeChef Box */}
        <div className="bg-[#292639] p-6 rounded-lg shadow-lg border-2 border-[#f6c177] transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <img
              src="/6179134-middle.png"
              alt="CodeChef Logo"
              className="h-12 w-12 mr-4"
            />
            <h2 className="text-[#f6c177] text-xl font-bold">CodeChef</h2>
          </div>
          <p className="text-[#e0def4] mb-2">
            <strong>Rating:</strong> 1814 (4★)
          </p>
          <a
            href="https://www.codechef.com/users/soumen_1929"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f6c177] hover:text-[#9ccfd8]"
          >
            View Profile
          </a>
        </div>

        {/* LeetCode Box */}
        <div className="bg-[#292639] p-6 rounded-lg shadow-lg border-2 border-[#f6c177] transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <img
              src="/leetcode.png"
              alt="LeetCode Logo"
              className="h-12 w-12 mr-4"
            />
            <h2 className="text-[#f6c177] text-xl font-bold">LeetCode</h2>
          </div>
          <p className="text-[#e0def4] mb-2">
            <strong>Problems Solved:</strong> 550+
          </p>
          <a
            href="https://leetcode.com/u/Soumen_Kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f6c177] hover:text-[#9ccfd8]"
          >
            View Profile
          </a>
        </div>
      </div>

      {/* Remaining Achievements */}
      <div className="bg-gradient-to-r from-[#292639] to-[#2b5e72] p-6 rounded-lg border-b-4 border-b-[#f6c177] hover:shadow-lg transition-shadow duration-300 mt-6">
        <h2 className="text-[#f6c177] lg:text-3xl text-xl font-bold mb-4">
          Other Achievements
        </h2>
        <ul className="list-disc pl-5 text-[#e0def4]">
          <li>Department Rank 3 in B.Tech CS+EE</li>
          <li>3rd Prize (Project Demonstration) in Industry Day-2024 @ IITJ</li>
          <li>Part of IITJ Team in ISRO-URC 24</li>
        </ul>
      </div>
    </div>
  );


      case "help":
        return (
          <>
            <div className="">
              <p className="text-[#c4a7e7] col-span-2">All available commands:</p>
              {[
                { comm: "about", desc: "- Learn more about me" },
                {
                  comm: "achievements",
                  desc: "- My achievements and awards",
                },
                {
                  comm: "experiences",
                  desc: "- Learn about my experiences",
                },
                {
                  comm: "projects",
                  desc: "- A glimpse into my work!",
                },
      
                {
                  comm: "skills",
                  desc: "- Checkout my technical skills",
                },
                {
                  comm: "socials",
                  desc: "- You can find me here!",
                },
                {
                  comm: "resume",
                  desc: "- My Professional journey",
                },
                {
                  comm: "goals",
                  desc: "- Explore my interests",
                },
                {
                  comm: "blogs",
                  desc: "- A collection of my thoughts and occasional rants",
                },
                {
                  comm: "clear",
                  desc: "- Clear the Terminal",
                },
                {
                  comm: "sudo rm -rf /*",
                  desc: "- Try it on your risk",
                },
              ].map((item) => {
                return (
                  <div className="flex items-center">
                    <span className="text-[#f6c177] lg:w-36 min-w-24 md:w-36">
                      {item.comm}
                    </span>
                    <span className="text-[#31748f]">{item.desc}</span>
                  </div>
                );
              })}
            </div>
          </>
        );
      
    case "sudo rm -rf /*":
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
    default:
      return (
        <div>
          <p className="text-[#eb6f92]">Command not found</p>
          <p>
            Try <span className="text-[#f6c177]">help</span> to see available
            commands
          </p>
        </div>
      );
  }
}
