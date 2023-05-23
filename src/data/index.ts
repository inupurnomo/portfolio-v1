import {proj1, proj2, proj3} from "../../public/assets";
import {socialMedia} from "./social";

const Personal = {
  name: "Ilham Ibnu Purnomo",
  desc: "I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.",
  email: "contact@inupurnomo.com",
  phone: "6285155343147",
  School: [
    {
      id: 1,
      school: "Telkom University",
      major: "Informatic’s Engineering",
      graduate: "2023",
    },
    {
      id: 2,
      school: "Telkom Schools Purwokerto",
      major: "Teknik Komputer dan Jaringan",
      graduate: "2016",
    },
    {
      id: 3,
      school: "SMP Negeri 1 Puring",
      major: "Junior High School",
      graduate: "2013",
    },
  ],
};

const Projects = [
  {
    id: 1,
    title: "ReactBD",
    desc: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm. ’",
    link: "https://google.com",
    githubLink: "https://facebook.com",
    category: ["ReactJs", "Typescript", "Next-auth"],
    image: proj1,
  },
  {
    id: 2,
    title: "Diggyvec",
    desc: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    link: "https://diggyvec.vercel.app",
    githubLink: "https://facebook.com",
    category: ["Nodejs", "ExpressJs"],
    image: proj2,
  },
  {
    id: 3,
    title: "Build a Spotify Connected App",
    desc: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify’s OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.",
    link: "https://diggyvec.vercel.app",
    githubLink: "https://facebook.com",
    category: ["NextJs", "Typescript", "Tailwindcss", "Stripe"],
    image: proj3,
  },
];

const GITHUB_API_URL = "https://api.github.com";

const GITHUB_USERNAME = "inupurnomo";

export {Personal, Projects, GITHUB_API_URL, GITHUB_USERNAME, socialMedia};
