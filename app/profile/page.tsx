export default function Home() {
  return (
    <div className="p-2">
      <header className={`text-center flex flex-col items-center`}>
        <h1 className="text-5xl p-6 pt-10">Alan Fang</h1>
        <p className="text-lg">
          Frontend/Full stack developer. Learning AI/LLM and WEB3 technology.
        </p>
        <p className="pt-5">
          <a href="/" className="pr-5">
            Chat
          </a>
          <a href="mailto:disflyer123@gmail.com" className="pr-5">
            Email
          </a>
          <a
            href="https://github.com/disflyer"
            target="__blank"
            className="pr-5"
          >
            Github
          </a>
          <a href="https://twitter.com/disflyer" target="__blank">
            X
          </a>
        </p>
      </header>

      <main className="flex flex-col items-center text-lg pb-10">
        <div className="w-full lg:w-8/12 mt-20 dark:border-white border-black border-2 pr-5">
          <h2 className="text-4xl p-6 pb-4">Experience</h2>
          <div className="pl-6">
            <a href="https://desktop.youchuanai.com" target="__blank">
              Midjourney (China Team) Co.,Ltd.(2024.08)
            </a>
            <div>Senior Software Engineer</div>
          </div>
          <ul className="list-disc pl-14 pb-3">
            <li>
              Build Midjourney Chinese prodcut, a text-to-image desktop
              application for designer.
            </li>
            <li>migration core service from TCould to AliCloud.</li>
            <li>Do some other infra and CI/CD work for team.</li>
            {/* <li>Got promotion and annual awards.</li> */}
          </ul>
          <div className="pl-6">
            <a href="https://www.tesla.cn" target="__blank">
              Tesla (Shanghai) Co.,Ltd.(2021.11-2024.5)
            </a>
            <div>Senior Software Engineer</div>
          </div>
          <ul className="list-disc pl-14 pb-3">
            <li>
              Build Customer Data Platform.(A platform to search&use Tesla
              customer&apos;s data efficiently)
            </li>
            <li>Build Tesla AI Chatbot base on AI/LLM.</li>
            <li>
              Full-stack development of Tesla Computer Vision project(A project
              serving Tesla Super Factory).
            </li>
            <li>Do some infra and CI/CD work for team.</li>
            {/* <li>Got promotion and annual awards.</li> */}
          </ul>
          <div className="pl-6">
            <a href="https://okjike.com" target="__blank">
              Shanghai Ruoyou Internet Technology Co., Ltd.(2019.6-2021.11).
            </a>
            <div>Frontend Engineer</div>
          </div>
          <ul className="list-disc pl-14 pb-3">
            <li>
              Frontend develop of{" "}
              <a href="https://podcaster.xiaoyuzhoufm.com/" target="__black">
                Xiaoyuzhou FM
              </a>
              . A Mangement Platform for podcaster.
            </li>
            <li>
              Develop for various Middle Platforms, mini-application, and so on.
            </li>
            <li>Develop some management projects using React.</li>
          </ul>
          <div className="pl-6">
            <a href="">
              Shanghai Qing Qing Technology Co., Ltd.(2017.10-2019.4)
            </a>
            <div>Frontend Engineer</div>
          </div>
          <ul className="list-disc pl-14 pb-3">
            <li>
              Participated in the research and development of an online 1-to-1
              education hybrid on PC and iPad.
            </li>
            <li>
              Core code writing, and do some communication work in the team.
            </li>
          </ul>

          <h2 className="text-4xl p-6 pb-5">Company Projects</h2>
          <div>
            <div className="pl-6">
              <div className="font-semibold">Tesla Customer Data Platform</div>
            </div>
            <div className="pl-14 pb-3 [&>p]:py-1">
              <p>
                The Tesla Customer Data Platform project was aimed at
                centralizing and harnessing customer data to enhance customer
                relationship management and business operations.
              </p>
              <p>Responsibilities:</p>
              <ul className="list-disc pl-14 pb-3">
                <li>
                  Implementing User Label Management Services development.
                </li>
                <li>
                  Develop some frontend components for analysis requirements
                </li>
                <li>
                  Implementing role-based access control (RBAC) and data
                  encryption to ensure data security requirements.
                </li>
                <li>
                  Creating APIs and interfaces for seamless integration with
                  internal systems and third-party applications by OData.
                </li>
                <li>
                  Collaborating with cross-functional teams, including data
                  scientists, engineers, and business stakeholders, to define
                  requirements and deliver solutions that meet business
                  objectives.
                </li>
              </ul>
              <p>Technologies:</p>
              <ul className="list-disc pl-14 pb-3">
                <li>Frontend: React, React-query, Typescript</li>
                <li>Backend: Java, Spring Boot, Nacos</li>
                <li>Datasource: Clickhouse, PostgreSQL</li>
                <li>Log&Analysis: Grafana, Prometheus， Splunk</li>
                <li>DevOps: Docker, Kubernetes, Helm, Jenkins</li>
                <li>Version Control: Git, GitHub</li>
              </ul>
              <div>
                This project improved data visibility, enabling data-driven
                decision-making and personalized customer experiences. It played
                a pivotal role in optimizing marketing campaigns, improving
                customer support, and driving business growth.
              </div>
            </div>
          </div>
          <div>
            <div className="pl-6">
              <div className="font-semibold">Tesla AI chatbot</div>
            </div>
            <div className="pl-14 pb-3 [&>p]:py-1">
              <p>
                Chatbot project providing AI chat services for Tesla customers,
                answering sales-related questions before users decide to buy a
                Tesla car, and handling after-sales issues for customers.
              </p>
              <p>Responsibilities:</p>
              <ul className="list-disc pl-14 pb-3">
                <li>
                  Implementing algorithm model service using Nvidia Triton
                  Server
                </li>
                <li>Implementing streamlined model training pipelines.</li>
                <li>Implementing vector database management development</li>
                <li>performance, stability, and scalability</li>
                <li>Ensure optimal performance, stability, and scalability.</li>
                <li>
                  Collaborating closely with backend teams proficient in Go,
                  Java, and Python languages to develop and integrate multiple
                  microservic.
                </li>
              </ul>
              <p>Technologies:</p>
              <ul className="list-disc pl-14 pb-3">
                <li>Frontend: Next.js, Antd, Tailwind, Trpc, Prisma</li>
                <li>Backend: Python(FastAPI), Java(Spring Boot), Apisix</li>
                <li>Datasource: Milvus, PostgreSQL, Kafka, S3</li>
                <li>Log&Analysis: Grafana, Prometheus, Splunk</li>
                <li>DevOps: Docker, Kubernetes, Helm, Jenkins</li>
                <li>Version Control: Git, GitHub</li>
              </ul>
              <div>
                This project improves customer experience and reduce customer
                service workload.
              </div>
            </div>
          </div>
          <div>
            <div className="pl-6">
              <a
                href="https://podcaster.xiaoyuzhoufm.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-semibold">
                  Xiaoyuzhou Podcaster Platform
                </div>
              </a>
            </div>
            <div className="pl-14 pb-3 [&>p]:py-1">
              <p>
                Xiaoyuzhou Podcaster Platform offers comprehensive podcast
                management services to podcasters, facilitating seamless
                handling of various tasks. This includes podcast audio file
                uploading, asynchronous RSS feed management, podcast preview
                capabilities, and insightful podcast data analysis.
              </p>
              <p>Responsibilities:</p>
              <ul className="list-disc pl-14 pb-3">
                <li>
                  Implementing a user-friendly frontend interface using Next.js
                  to enhance user experience and accessibility.
                </li>
                <li>
                  Integrating Google Analytics for in-depth analysis of website
                  metrics, enabling valuable insights into user behavior and
                  platform performance.
                </li>
              </ul>
              <p>Technologies:</p>
              <ul className="list-disc pl-14 pb-3">
                <li>Frontend: Next.js, React.js, Typescript, Emotion</li>
                <li>Backend: Node.js, MongoDB</li>
                <li>Analytics: Google Analytics</li>
                <li>Deployment: Docker, Kubernetes, CDN</li>
                <li>Version Control: Git, GitHub</li>
              </ul>
              <div>
                The Xiaoyuzhou Podcaster Platform has Improved podcast
                management experience by providing podcasters with an intuitive
                and efficient platform to manage their content and analyze their
                audience engagement effectively.
              </div>
            </div>
          </div>
          <h2 className="text-4xl p-6 pb-5">Side Projects</h2>
          <div>
            <div className="pl-6">
              <a
                href="https://chunks-english.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-semibold">Learning English by Chunks</div>
              </a>
            </div>
            <div className="pl-14 pb-3 [&>p]:py-1">
              <p>
                This project is a English learning website, I build it because I
                find all English learning application is focus on vocabulary.
                But we could not know how to use those vocabulary in daily
                communication. I thought if we can learn English by chunks, we
                would deal better in spoken English.
              </p>
              <div>
                This project use a very short time to build, and still in
                progress. I would add some AI ability on it, to help Pro user
                build their chunks by just one vocabulary.
              </div>
            </div>
          </div>
          <div>
            <div className="pl-6">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <div className="font-semibold">Chat with CV</div>
              </a>
            </div>
            <div className="pl-14 pb-3 [&>p]:py-1">
              <p>
                This project providing AI chat services base on my cv, answering
                questions about me. Use Openai to embedding and chat. Use
                Pinecone to store vector data.
              </p>
              <div>
                This project just develop to show more information about me.
              </div>
            </div>
          </div>
          <h2 className="text-4xl p-6 pb-5">Skills</h2>
          <ul className="list-disc pl-14 pb-3">
            <li>
              Good skills in React, Nextjs, Nodejs, Python, K8S, Git, etc.
            </li>
            <li>Learning AI/LLM tech(langchain, triton, huggingface, etc.)</li>
            <li>Learning Web3 tech(Blockchain, ETH, Solidity, etc.)</li>
          </ul>
          <h2 className="text-4xl p-6 pb-5">Education</h2>
          <ul className="list-disc pl-14 pb-3">
            <li>
              <a
                href="https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E6%B5%B7%E6%B4%8B%E5%A4%A7%E5%AD%A6/1273892"
                target="__blank"
              >
                Shanghai Ocean University
              </a>{" "}
              (2013-2017) Bachelor.
            </li>
          </ul>
          <h2 className="text-4xl p-6 pb-5">Awards</h2>
          <ul className="list-disc pl-14 pb-3">
            <li>First prize of hackathon(Tesla company).</li>
            <li>Annual Developer Star of Tesla.</li>
          </ul>
        </div>
      </main>
      <footer className="text-slate-400 p-5 text-center w-full">
        © Alan&apos;s website
      </footer>
    </div>
  );
}
