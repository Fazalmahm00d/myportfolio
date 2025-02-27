import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Syed Fazal Mahmood",
  initials: "SFM",
  url: "https://dillion.io",
  location: "Hyderabad, Telangana",
  locationLink: "https://www.google.com/maps/place/hyderabad",
  description:
    "Software Engineer. I love building things and helping people. Very active on LinkedIn.",
  summary:
    "I am a passionate software developer with a strong foundation in full-stack development, AI, and automation. I thrive on solving real-world problems through innovative applications, as demonstrated in multiple hackathons where my projects earned recognition.I am always eager to explore new technologies and build impactful solutions. Currently, I am focusing on AI-enhanced full-stack applications, cloud integration, and system optimization.",
  avatarUrl: "/profileimage.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "JavaScript",
    "SQL",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "fazalmah000@gmail.com",
    tel: "+91 8790108073",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Fazalmahm00d",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sfazalmahmood/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SkillDzire Technologies",
      href: "https://skilldzire.com/",
      badges: [],
      location: "Remote",
      title: "Data Science Intern",
      logoUrl: "https://skilldzire.com/wp-content/uploads/2024/07/skilldzire-logo.png",
      start: "May 2023",
      end: "June 2023",
      description:
        "Developed an Employee Payslip Calculator using Python's Tkinter library for the GUI. Analyzed Google Trends data using pytrends to visualize search interest in Machine Learning and IPL with Pandas and Matplotlib for data handling and plotting.Implemented and evaluated classification models using SVM, KNN, and Logistic Regression in Python, measuring their accuracy on test datasets.",
    },
    
  ],
  education: [
    {
      school: "Muffakham Jah College of Engineering and Technology",
      href: "https://mjcollege.ac.in/",
      degree: "B.E(Information Technology)",
      logoUrl: "/mjcetlogo.jpg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Basecamp clone-Project Management Tool",
      href: "",
      dates: "Dec 2024 - Feb 2025",
      active: true,
      description:
        "Developed a Basecamp-inspired project management platform that enables teams to collaborate, manage tasks, and communicate in real time. This full-stack web application allows users to create projects, assign tasks, set deadlines, and engage in discussions through a rich-text editor and chat system.",
      technologies: [
        "Next.js",
        "React.js",
        "Redux Tookit",
        "Socket.io",
        "TailwindCSS",
        "Shadcn UI",
        "Radix UI",
        "Passport.js",
        "Nodemailer",
      ],
      links: [
        {
          type: "Website",
          href: "/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fazalmahm00d/basecampclone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.youtube.com/embed/DSEclDnxSDM?autoplay=1&loop=1&mute=1&controls=0&rel=0&playlist=DSEclDnxSDM&start=183",
    },
    {
      title: "Furniro - An E-Commerce Application ",
      href: "https://nextprojecom.vercel.app/",
      dates: "Nov 2024 - Feb 2025",
      active: true,
      description:
        "Developed a feature-rich furniture shopping platform that provides a seamless online shopping experience with a modern, responsive, and user-friendly interface. The application includes product listings, a shopping cart and authentication.",
      technologies: [
        "Next.js",
        "React",
        "Redux Toolkit",
        "Tanstack Query",
        "React Router DOM",
        "TailwindCSS",
        "Firebase"
      ],
      links: [
        {
          type: "Furniro",
          href: "https://nextprojecom.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Frontend Code",
          href: "https://github.com/Fazalmahm00d/nextprojecom",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend Code",
          href: "https://github.com/Fazalmahm00d/projectecombackend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.youtube.com/embed/06jgkGN9M2Q?autoplay=1&loop=1&mute=1&controls=0&rel=0&playlist=06jgkGN9M2Q",
    },
    {
      title: "Ketodalia",
      href: "https://ketodalia.vercel.app/",
      dates: "Nov 2024 - Feb 2025",
      active: true,
      description:
        "Developed a full-stack restaurant web application designed to showcase keto-friendly meals, allowing users to browse the menu, customize their selections, and place orders online. The project features a responsive UI, a dynamic ordering system, and real-time updates to enhance the user experience.",
      technologies: [
        "React",
        "TailwindCSS",
        "Redux Toolkit",
        "Tanstack Query",
        "React Router",
      ],
      links: [
        {
          type: "Website",
          href: "https://ketodalia.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fazalmahm00d/keto-proj",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:"https://www.youtube.com/embed/e-2jTREPvok?autoplay=1&loop=1&mute=1&controls=0&rel=0&playlist=e-2jTREPvok&start=183",
    },
    {
      title: "Gokyo Pro",
      href: "https://gokyo-zeta.vercel.app/",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Developed a visually engaging website that showcases dynamic CSS animations to enhance user experience and interactivity. The project utilizes modern CSS animation techniques, including keyframes, transitions, and transforms, to create smooth and aesthetically pleasing effects.",
      technologies: [
        "HTML",
        "CSS",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://gokyo-zeta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fazalmahm00d/designwithtailwind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://www.youtube.com/embed/7-TnkHDN6WU?autoplay=1&loop=1&mute=1&controls=0&rel=0&playlist=7-TnkHDN6WU",
    },
  ],
  hackathons: [
    
    {
      title: "Envisage 2024",
      dates: "April 30th, 2024",
      location: "MJCET",
      description:
        "Developed an  IoT network  IDPS with AI-based detection to scan malicious users and block them",
      image:
        "/mjcetlogo.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Envisage 2023",
      dates: "January 21st, 2023",
      location: "MJCET",
      description:
        "Developed a food price comparison web application which made users compare prices of the food on delivery platforms at one place",
      image:
        "/mjcetlogo.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack Revolution 2023",
      dates: "January 8th, 2023",
      location: "MJCET",
      description:
        "Developed a flask server which could scrape and retrieve price data from Swiggy and Zomato ",
      image:
        "/hackrev.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
  ],
} as const;
