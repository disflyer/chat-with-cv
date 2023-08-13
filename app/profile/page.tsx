export default function Home() {
  return (
    <div className="p-2">
      <header className={`text-center flex flex-col items-center`}>
        <h1 className="text-5xl p-6 pt-10">Alan Fang</h1>
        <p className="text-lg">
          Full stack engineer. CNCF tech follower. AI/LLM tech follower.
        </p>
        <p className="pt-5">
          <a href="/" className="pr-5">
            Chat
          </a>
          <a
            href="https://twitter.com/disflyer"
            target="__blank"
            className="pr-5"
          >
            Twitter
          </a>
          <a
            href="https://github.com/disflyer"
            target="__blank"
            className="pr-5"
          >
            Github
          </a>
          <a href="mailto:disflyer123@gmail.com">Email</a>
        </p>
      </header>

      <main className="flex flex-col items-center text-lg pb-10">
        <div className="w-full lg:w-8/12 mt-20 border-black border-2">
          <h2 className="text-4xl p-6 pb-4">Experience</h2>
          <div className="pl-6">
            <a href="https://www.tesla.cn" target="__blank">
              Tesla (Shanghai) Co.,Ltd.
            </a>
            <div>Senior Software Engineer</div>
          </div>
          <ul className="list-disc pl-14 pb-3">
            <li>One of the Tesla AI Chatbot Project developer.(2023)</li>
            <li>Build project 0 to 1 base on AI/LLM.(2023)</li>
            <li>
              Build Customer Data Platform 0 to 1, focus on frontend using
              React.(2022)
            </li>
            <li>Full-stack development of Tesla Computer Vision project.</li>
            <li>Do architecture and code refactoring for team.</li>
            <li>Got promotion and annual awards.</li>
          </ul>
          <div className="pl-6">
            <a href="https://okjike.com" target="__blank">
              Shanghai Ruoyou Internet Technology Co., Ltd.
            </a>
            <div>Frontend Engineer</div>
          </div>
          <ul className="list-disc pl-14 pb-3">
            <li>
              Frontend develop of{' '}
              <a href="https://podcaster.xiaoyuzhoufm.com/" target="__black">
                Xiaoyuzhou FM
              </a>
              . A Mangement Platform for podcaster.(2020-2021)
            </li>
            <li>
              Develop for various Middle Platforms, mini-application, and so
              on.(2020)
            </li>
            <li>Develop some management projects using React.(2019)</li>
          </ul>
          <div className="pl-6">
            <a href="">
              Shanghai Qing Qing Technology Co., Ltd.(online education, close
              down)
            </a>
            <div>Frontend Engineer</div>
          </div>
          <ul className="list-disc pl-14 pb-3">
            <li>
              Participated in the research and development of an online 1-to-1
              education hybrid on PC and iPad.(2018-2019)
            </li>
            <li>
              Core code writing, task splitting, and doing some lead work in the
              frontend team.
            </li>
          </ul>

          <h2 className="text-4xl p-6 pb-5">Education</h2>
          <ul className="list-disc pl-14 pb-3">
            <li>
              <a href="https://www.shou.edu.cn" target="__blank">
                Shanghai Ocean University
              </a>{' '}
              Bachelor in Ocean Technology.
            </li>
          </ul>
          <h2 className="text-4xl p-6 pb-5">Skills</h2>
          <ul className="list-disc pl-14 pb-3">
            <li>
              Good skills in React, Nextjs, Nodejs, Python, Docker, K8S, Git,
              etc.
            </li>
            <li>Learning AI/LLM tech(langchain, flowise, huggingface, etc.)</li>
            <li>Small team management and team building experience.</li>
            <li>Greate passion for software technology and keep learning.</li>
          </ul>
          <h2 className="text-4xl p-6 pb-5">Awards</h2>
          <ul className="list-disc pl-14 pb-3">
            <li>First prize of hackathon.</li>
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
