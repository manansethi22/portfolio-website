import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "web",
    title: "Book Store",
    description:
      "I engineered a secure authentication system and an admin panel for effortless book management in my MERN-based bookstore app. The user-friendly interface facilitates browsing and purchasing, with a future project planned for payment integration.",
    technologies: ["React.js", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://github.com/manansethi22/bookstore-mernapp.git",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "web",
    title: "FarmWorks",
    description:
      "Developed a one-stop site for farmers to connect with laborers and contractors. Farmers and Contractors can post their job details like completion days, job descriptions, and other information in MongoDB database",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://github.com/manansethi22/farmworks.git",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "app",
    title: "PetVm",
    description:
      "Developed a cross-platform pet pharmacy app implemented efficient state management and seamless API integration.Created a user-friendly interface for browsing, purchasing, and managing pet medications, emphasizing proficiency in impactful front-end development.",
    technologies: ["React Native", "Redux", "Axios"],
    siteUrl: "https://github.com/manansethi22/pharmacy-app.git",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "web",
    title: "Portfolio Website",
    description:
      "I designed and developed a sleek portfolio website using React, showcasing my skills and projects with an interactive and user-friendly interface. The site reflects my commitment to modern web development and a seamless user experience.",
    technologies: ["React", "Tailwind css"],
    siteUrl: "https://github.com/manansethi22/portfolio-website.git",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "app",
    title: "Job Search App",
    description:
      "Developed a Job Search application with elegant UI/UX. It lets  you to dynamically fetch data from J Search Rapid API.",
    technologies: ["React Native", "Axios", "JSearch Rapid Api"],
    siteUrl: "https://github.com/manansethi22/Job-Search-App.git",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "app",
    title: "Sneaker Shopping App",
    description:
      " Developed an Ecommerce website where users can purchase shoes. Users can sort shoes according to price and purchase them",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
    siteUrl: "https://github.com/manansethi22/SneakersApp.git",
  },
];

export default portfolios;
