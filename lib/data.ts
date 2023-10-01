import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import todo from "@/public/todo.png";
import TravelApp from "@/public/TravelApp.jpeg";
import MovieApp from "@/public/MovieApp.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Stamford, CT",
    description:
      "After graduating from the bootcamp, I was ready to start my career.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2023",
  },
  {
    title: "Volunteer Software Engineer",
    location: "Port Chester, NY",
    description:
      "I became a volunteer software engineer for my local church.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "JPMorgan Software Engineer Virtual Job Simulation",
    location: "Stamford, CT",
    description:
      "I was simulating real life experiences of a software engineer.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Travel App UI",
    description:
      "A mobile app where the user is able to see the list of places to visit, like a page, and beautiful UI made with tailwindCSS.",
    tags: ["React Native", "Tailwind"],
    imageUrl: TravelApp,
  },
  {
    title: "Movies App",
    description:
      "A mobile app where the user is able to see the list of movies provided by TMDB API, like a page, and search for a movie.",
    tags: ["React Native", "TypeScript", "Tailwind", "Axios"],
    imageUrl: MovieApp,
  },
  {
    title: "Todo App",
    description:
      "A mobile app where the user is able to see the list of todo items, add a todo item, like a page, and search for a todo item.",
    tags: ["Flutter", "Dart"],
    imageUrl: todo,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Vite",
  "Git",
  "Tailwind",
  "MongoDB",
  "Astro",
  "PostgreSQL",
  "Flutter",
  "Dart",
  "Express",
  "Python",
  "Django",
  "AppWrite",
  "React Native",
  "C++",
] as const;