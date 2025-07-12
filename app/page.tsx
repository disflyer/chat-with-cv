"use client";

import "./globals.css";
import Image from "next/image";
import { useState } from "react";

const skills = [
  "React",
  "Nextjs",
  "Vue",
  "Nodejs",
  "Python",
  "Docker",
  "K8S",
  "Git",
  "AI/LLM",
  "mlOps",
  "Langchain",
  "LLM",
  "BERT",
  "Triton",
];
const experiences = [
  {
    company: "Tokyo IVA Co., Ltd.",
    time: "2025-Present",
    title: "CTO(Partner)",
    details: [
      "Responsible for building and leading the China R&D team.",
      "Built a highly efficient AI engineering team, achieving 100% Cursor usage rate.",
      "Standardized AI documentation generation and implemented IAC GitOps workflows.",
      "Leveraged AI to boost team productivity, and utilized the cost advantage of engineers in second- and third-tier Chinese cities to solve talent shortages.",
      "Achieved a 10X improvement in development efficiency for the company.",
    ],
  },
  {
    company: "Crimson Education",
    time: "2024-2025",
    title: "AI Team Leader(5 people)",
    details: [
      "Led the development of AI Agent products.",
      "Successfully launched AI Agent V1.0 before departure.",
    ],
  },
  {
    company: "Midjourney (China Team) Co.,Ltd.",
    time: "2024.08-Present",
    title: "Senior Software Engineer(Part-time)",
    details: [
      "Build Midjourney Chinese product, a text-to-image desktop application for designers.",
      "Migration core service from TCould to AliCloud.",
      "Infrastructure and CI/CD work for the team.",
    ],
  },
  {
    company: "Tesla (Shanghai) Co.,Ltd.",
    time: "2021.11-2024.5",
    title: "Senior Software Engineer",
    details: [
      "Build Customer Data Platform (A platform to search & use Tesla customer's data efficiently).",
      "Build Tesla AI Chatbot based on AI/LLM.",
      "Full-stack development of Tesla Computer Vision project (A project serving Tesla Super Factory).",
      "Infrastructure and CI/CD work for the team.",
    ],
  },
  {
    company: "Shanghai Ruoyou Internet Technology Co., Ltd. (Jike)",
    time: "2019.6-2021.11",
    title: "Frontend Engineer",
    details: [
      "Frontend development of Xiaoyuzhou FM, a management platform for podcasters.",
      "Development for various Middle Platforms, mini-applications, and so on.",
      "Developed management projects using React.",
    ],
  },
  {
    company: "Shanghai Qing Qing Technology Co., Ltd.",
    time: "2017.10-2019.4",
    title: "Frontend Engineer",
    details: [
      "Participated in the R&D of an online 1-to-1 education hybrid on PC and iPad.",
      "Core code writing and team communication.",
    ],
  },
];
const projects = [
  {
    name: "Crimson AI Agent",
    desc: "An AI Agent project designed for all Crimson consultants and users. It integrates data from multiple platforms (Slack, email, message, website, Zoom meeting, etc.) to address key challenges in the education consulting industry, such as efficient information synchronization, automated consulting report generation, and personalized student study-abroad planning.",
    responsibilities: [
      "Designed and developed an AI Agent system to serve both consultants and end users.",
      "Integrated data from Slack, email, messaging apps, website, Zoom meetings, and more.",
      "Automated the generation of consulting reports and study-abroad plans for students.",
      "Improved information flow and collaboration efficiency across the organization.",
    ],
    tech: [
      "AI Agent",
      "NLP",
      "Slack API",
      "Email Integration",
      "Web Crawling",
      "Zoom API",
      "React",
      "Node.js",
      "Cloud Services",
    ],
  },
  {
    name: "Tesla Customer Data Platform",
    desc: "The Tesla Customer Data Platform project was aimed at centralizing and harnessing customer data to enhance customer relationship management and business operations.",
    responsibilities: [
      "Implementing User Label Management Services development.",
      "Developing frontend components for analysis requirements.",
      "Implementing role-based access control (RBAC) and data encryption to ensure data security requirements.",
      "Creating APIs and interfaces for seamless integration with internal systems and third-party applications by OData.",
      "Collaborating with cross-functional teams, including data scientists, engineers, and business stakeholders, to define requirements and deliver solutions that meet business objectives.",
    ],
    tech: [
      "React",
      "React-query",
      "Typescript",
      "Java",
      "Spring Boot",
      "Nacos",
      "Clickhouse",
      "PostgreSQL",
      "Grafana",
      "Prometheus",
      "Splunk",
      "Docker",
      "Kubernetes",
      "Helm",
      "Jenkins",
      "Git",
      "GitHub",
    ],
  },
  {
    name: "Tesla AI Chatbot",
    desc: "Chatbot project providing AI chat services for Tesla customers, answering sales-related questions and handling after-sales issues.",
    responsibilities: [
      "Implementing algorithm model service using Nvidia Triton Server.",
      "Implementing streamlined model training pipelines.",
      "Implementing vector database management development.",
      "Ensuring optimal performance, stability, and scalability.",
      "Collaborating closely with backend teams proficient in Go, Java, and Python languages to develop and integrate multiple microservices.",
    ],
    tech: [
      "Next.js",
      "Antd",
      "Tailwind",
      "Trpc",
      "Prisma",
      "Python (FastAPI)",
      "Java (Spring Boot)",
      "Apisix",
      "Milvus",
      "PostgreSQL",
      "Kafka",
      "S3",
      "Grafana",
      "Prometheus",
      "Splunk",
      "Docker",
      "Kubernetes",
      "Helm",
      "Jenkins",
      "Git",
      "GitHub",
    ],
  },
  {
    name: "Xiaoyuzhou Podcaster Platform",
    desc: "Xiaoyuzhou Podcaster Platform offers comprehensive podcast management services to podcasters, facilitating seamless handling of various tasks. This includes podcast audio file uploading, asynchronous RSS feed management, podcast preview capabilities, and insightful podcast data analysis.",
    responsibilities: [
      "Implementing a user-friendly frontend interface using Next.js to enhance user experience and accessibility.",
      "Integrating Google Analytics for in-depth analysis of website metrics, enabling valuable insights into user behavior and platform performance.",
    ],
    tech: [
      "Next.js",
      "React.js",
      "Typescript",
      "Emotion",
      "Node.js",
      "MongoDB",
      "Google Analytics",
      "Docker",
      "Kubernetes",
      "CDN",
      "Git",
      "GitHub",
    ],
  },
];
const education = [
  {
    school: "Shanghai Ocean University",
    degree: "Bachelor of Ocean Technology",
    time: "2013-2017",
  },
];
const honors = [
  "First prize of hackathon in Tesla at 2022.",
  "Promotion and annual awards in Tesla.",
];
const interests = [
  "Traveling",
  "Gourmet food",
  "Making friends",
  "Remote work",
  "Learning Japanese",
  "Fitness",
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="w-full lg:w-8/12 my-10 bg-white/70 dark:bg-black/40 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 backdrop-blur-md">
      <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-400 pl-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  const [modalImg, setModalImg] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center">
      <header className="flex flex-col items-center py-10">
        <div className="rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 w-32 h-32 flex items-center justify-center shadow-lg mb-4">
          <span className="text-5xl text-white font-bold select-none">A</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          Alan Fang
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-2">
          Senior/Frontend/Full-stack Developer. Focused on AI/LLM and WEB3
          technology.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-xs font-semibold shadow-sm"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mb-4">
          <a
            href="mailto:disflyer123@gmail.com"
            className="hover:underline text-blue-500"
          >
            Email
          </a>
          <a
            href="https://github.com/disflyer"
            target="_blank"
            className="hover:underline text-blue-500"
          >
            Github
          </a>
          <a
            href="https://twitter.com/disflyer"
            target="_blank"
            className="hover:underline text-blue-500"
          >
            X
          </a>
        </div>
      </header>
      <main className="flex flex-col items-center w-full">
        <Section title="Experience">
          {experiences.map((exp, idx) => (
            <div key={exp.company} className="mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-lg">{exp.company}</span>
                <span className="text-sm text-slate-500">{exp.time}</span>
              </div>
              <div className="text-slate-600 dark:text-slate-300 mb-1">
                {exp.title}
              </div>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-200">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              {/* 在 CTO 相关经历下方插入 IVA 团队照片 */}
              {exp.company.includes("IVA") && (
                <div className="mt-4 flex justify-center">
                  <Image
                    src="/iva.png"
                    alt="IVA Team"
                    width={400}
                    height={180}
                    className="rounded shadow cursor-pointer hover:scale-105 transition"
                    onClick={() => setModalImg("/iva.png")}
                  />
                </div>
              )}
              {/* 在 Crimson Education 相关经历下方插入 crimson.png 和简介 */}
              {exp.company === "Crimson Education" && (
                <div className="mt-4 flex flex-col items-center">
                  <Image
                    src="/crimson.png"
                    alt="Crimson Recognition"
                    width={350}
                    height={350}
                    className="rounded shadow cursor-pointer hover:scale-105 transition mb-2"
                    onClick={() => setModalImg("/crimson.png")}
                  />
                  <div className="text-sm text-slate-600 dark:text-slate-300 text-center max-w-xs">
                    Recognized by direct supervisor during work, and received
                    help to connect with new job opportunities after
                    resignation.
                  </div>
                </div>
              )}
            </div>
          ))}
        </Section>
        <Section title="Projects">
          {projects.map((p) => (
            <div
              key={p.name}
              className="mb-8 p-4 bg-white/80 dark:bg-slate-800 rounded-lg shadow border border-slate-200 dark:border-slate-700"
            >
              <div className="font-semibold text-lg mb-1">{p.name}</div>
              <div className="text-slate-700 dark:text-slate-200 mb-2">
                {p.desc}
              </div>
              <div className="mb-1 font-medium text-slate-600 dark:text-slate-300">
                Responsibilities:
              </div>
              <ul className="list-disc pl-6 mb-2 text-slate-700 dark:text-slate-200">
                {p.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
              <div className="mb-1 font-medium text-slate-600 dark:text-slate-300">
                Technologies:
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 rounded text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Section>
        <Section title="Education">
          {education.map((e) => (
            <div key={e.school} className="mb-2">
              <span className="font-semibold">{e.school}</span> | {e.degree}{" "}
              <span className="text-slate-500 text-sm">{e.time}</span>
            </div>
          ))}
        </Section>
        <Section title="Honors & Awards">
          <ul className="list-disc pl-6">
            {honors.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
          {/* Tesla 证书照片始终渲染 */}
          <div className="mt-6 flex justify-center">
            <Image
              src="/tesla.jpeg"
              alt="Tesla Award"
              width={350}
              height={220}
              className="rounded shadow cursor-pointer hover:scale-105 transition"
              onClick={() => setModalImg("/tesla.jpeg")}
              priority
            />
          </div>
        </Section>
        <Section title="Interests">
          <div className="flex flex-wrap gap-2">
            {interests.map((i) => (
              <span
                key={i}
                className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-full text-xs font-semibold shadow-sm"
              >
                {i}
              </span>
            ))}
          </div>
        </Section>
      </main>
      {/* 图片放大弹窗 */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setModalImg(null)}
        >
          <img
            src={modalImg}
            alt="enlarge"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl border-4 border-white"
          />
        </div>
      )}
      <footer className="text-slate-400 text-center w-full py-6 mt-10 text-xs">
        © 2024 Alan Fang. Powered by Next.js & TailwindCSS
      </footer>
    </div>
  );
}
