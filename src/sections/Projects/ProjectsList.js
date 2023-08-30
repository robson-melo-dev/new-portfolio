import spaceTours from "assets/images/space-tours.png";
import trigan from "assets/images/trigan-website.png";
import calculadora from "assets/images/calculadora.png";
import dashboard from "assets/images/admin-dashboard.png"
const ProjectsList = [
  {
    id: 1,
    name: "Ecomvision",
    description: `A full-stack sales admin panel, presenting a complete picture of the sales information for managerial puposes.`,
    image: dashboard,
    codeUrl: "https://github.com/robson-melo-dev/admin-fullstack",
    liveUrl: "https://admin-dashboard-a7bj.onrender.com/",
  },
  {
    id: 2,
    name: "Trigan Website",
    description:
      "I've worked on the frontend of the website, developing React features and components, using NextJS and TypeScript for server-side rendering and API consumption, as well as Tailwind CSS for website styling. I also worked together with the design team to implement new ideas that could generate more engagement and a better user experience, contributing to the development teams, both front-end and back-end, as well as directly with the company's leadership.",
    image: trigan,
    liveUrl: "https://trigan.org/",
  },
  {
    id: 3,
    name: "Calculadora do Imposto de Importação",
    description:
      "This google chrome extension in Brazilian Portuguese was created with the aim of integrating the UI of the Shopee and AliExpress import sites to facilitate the calculation of the import tax that so many Brazilians had difficulty with.",
    image: calculadora,
    liveUrl:
      "https://chrome.google.com/webstore/detail/calculadora-do-imposto-de/ihhoidhcclfigdmajoklgeaocclihhoh?hl=pt-br",
  },
  {
    id: 4,
    name: "Space Tours",
    description: `A React based web app proposed by one of my clients to test my ability to strictly follow a design and work with Apollo/GrapQl for API consumption.
      This web app retrieves data from Space-X rocket launches and provides the user with both records and prints a "ticket" for the selected trip.`,
    image: spaceTours,
    codeUrl: "https://github.com/robson-melo-dev/react-coding-exercise",
    liveUrl: "https://robson-melo-dev.github.io/react-coding-exercise/",
  },
];

export default ProjectsList;
