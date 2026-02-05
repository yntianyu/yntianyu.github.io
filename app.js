const PROFILE = {
  name: 'elizabeth yan',
  tagline: 'design & machine learning enthusiast',
  bio:
    'hello, and welcome! i am a senior at wellesley college majoring in computer science and mathematics. i am located in both the boston, ma, as well as seattle, wa area. as an avid explorer of philosophy, i have recently found myself immersed in issues with artificial intelligence surrounding privacy and security.',
  details: [
    { label: 'class of', value: 'may, 2026' },
    { label: 'executive positions', value: 'cs club, westart' },
    { label: 'studying', value: 'computer science & mathematics, philosophy minor' },
    { label: 'fun fact', value: 'i was chosen to represent the usa rhythmic gymnastics group team at the olympic qualifiers!' },
  ],
  skills: [
    { title: 'coding languages', items: ['TypeScript', 'JavaScript', 'Java', 'Python'] },
    { title: 'frameworks', items: ['Shiny', 'Express.js'] },
    { title: 'design', items: ['Notion', 'Canva', 'Figma'] },
    { title: 'data collection', items: ['Jupyter', 'Plotly', 'Pandas'] },
    { title: 'front end', items: ['CSS', 'HTML', 'Flutter', 'React'] },
    { title: 'devops', items: ['Git', 'Shell script/Bash'] },
  ],
  wip: 'building evals & guardrails',
  experience: [
    {
      org: 'Dynamo AI',
      role: 'Machine Learning Engineer Intern',
      dates: 'Dec 2025 - Present',
      location: 'San Francisco, CA',
      description: 'I deployed 8 adversarial attacks and defensive features to DynamoEval and DynamoGuard, expanding both offensive evaluation capabilities and production defense mechanisms to address emerging threat vectors in enterprise LLM deployments. I also engineered an automated, unified framework for adversarial evaluations across 10 third-party defenses, eliminating manual re-testing and enabling continuous benchmark validation across internal releases with standardized metrics. Additionally, I augmented the Adversarial Tactic Library with reported ASR and effectiveness metrics extracted from prior papers, creating a normalized reference layer that links published results to Dynamo\'s internal attack implementations and evaluation outputs.',
    },
    {
      org: 'AI-Plans',
      role: 'Post-Training Engineer',
      dates: 'Aug 2025 - Dec 2025',
      location: 'Boston, MA',
      description: 'I produced 3 post-trained LLMs with systematically varied methods, enabling 100% reproducible evaluations across strategies and providing a dataset used by 50+ alignment researchers to compare safety tradeoffs. I developed crosscoders to analyze representational differences between training methods, validating results across 15+ model versions and contributing toward evaluation metrics now being piloted by two external alignment research groups. I also drafted a research paper proposing a plug-and-play evaluation library for post-training diffs, providing reproducible benchmarking tools downloaded by 500+ researchers worldwide and adopted in alignment studies.',
    },
    {
      org: 'Amazon',
      role: 'Software Development Engineer Intern',
      dates: 'May 2025 - Aug 2025',
      location: 'Sunnyvale, CA',
      description: 'I saved $30M annually and cut debugging time by 70% by building a Step Functions pipeline of 15 AWS services that automatically detect and summarize anomalies, accelerating incident response across multiple high-throughput production systems. I also unified metrics from 6 platforms using Bedrock (AI agents) and Redshift (data warehouse), enabling 200+ engineers to link CPU regressions to downstream load spikes and uncover bottlenecks missed by system monitoring.',
    },
    {
      org: 'Wellesley Computer Science Club',
      role: 'Web Developer',
      dates: 'April 2024 - April 2025',
      location: 'Wellesley, MA',
      description: 'I maintained the GitHub repository for over 200 members, using JavaScript, PHP, HTML, and CSS to manage and update the codebase.',
    },
    {
      org: 'MIT FutureTech',
      role: 'Front-end Developer & Data Analyst',
      dates: 'May 2024 - September 2024',
      location: 'Cambridge, MA',
      description: 'I developed an open-source website for researchers to interact with LLMs, using Shiny, Plotly, and Pandas to create interactive data visualizations and intuitive interfaces.',
    },
    {
      org: 'App Inventor',
      role: 'Software Development Researcher',
      dates: 'March 2024 - September 2024',
      location: 'Cambridge, MA',
      description: 'I worked on a matrix learning block combining GWT and Scheme, and mentored 15 undergraduates in DALL-E and ChatGPT integration for educational applications.',
    },
  ],
  projects: [
    {
      name: 'Connectify',
      subtitle: 'MLH best networking hack',
      description: 'Web platform for networking built in 48 hours with React, Tailwind CSS, and Firebase auth.',
    },
    {
      name: 'Ruby the robot dog',
      subtitle: 'Affiliated with App Inventor',
      description: 'Reinforcement learning system using Python and OpenAI API with a Kotlin interface.',
    },
    {
      name: 'Block builder for RAG',
      subtitle: 'Work in progress',
      description: 'Drag-and-drop application for building RAG workflows, inspired by Scratch.',
    },
  ],
  links: [
    { text: 'blog', url: 'https://allentropy.wordpress.com/' },
    { text: 'github', url: 'https://github.com/yntianyu' },
    { text: 'linkedin', url: 'https://www.linkedin.com/in/ey101/' },
    { text: 'email', url: 'mailto:elizabeth.rose.yan@gmail.com' },
  ],
  blogPosts: [
    {
      title: 'me, boiled down',
      date: 'Feb 2, 2026',
      url: 'https://yntianyu.github.io/allentropy/post.html?id=37',
      excerpt: 'i downplay every single one of my achievements. i don\'t mean to, but somehow, it always comes back to these three words: "onto the next."',
    },
    {
      title: 'fearing, but also looking forward',
      date: 'Feb 2, 2026',
      url: 'https://yntianyu.github.io/allentropy/post.html?id=36',
      excerpt: 'how do i verbalize this? i\'ve been thinking about this for a while, unsure of how to put pen to paper.',
    },
    {
      title: 'the hardest thing to understand in this world is our own feelings.',
      date: 'Dec 7, 2025',
      url: 'https://yntianyu.github.io/allentropy/post.html?id=35',
      excerpt: '"we are a mosaic of everyone we\'ve ever loved." i\'ve been thinking about this quote a lot more often recently.',
    },
    {
      title: 'dump.',
      date: 'Dec 6, 2025',
      url: 'https://yntianyu.github.io/allentropy/post.html?id=34',
      excerpt: 'small things that are on my mind.',
    },
  ],
}

// Icons
const FolderIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M14.5 7.5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V7.5H14.5ZM14.5 6V4H8.83333C8.29241 4 7.76607 3.82456 7.33333 3.5L6 2.5H1.5V6H14.5ZM0 1H1.5H6.16667C6.38304 1 6.59357 1.07018 6.76667 1.2L8.23333 2.3C8.40643 2.42982 8.61696 2.5 8.83333 2.5H14.5H16V4V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V2.5V1Z" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const BlogIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 5h9M6 9h9M6 13h6" strokeLinecap="round" />
    <path d="M5 3h10a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V3Z" strokeLinejoin="round" />
  </svg>
)

const TerminalIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M14 3H2V13H14V3ZM2 2C1.44772 2 1 2.44772 1 3V13C1 13.5523 1.44772 14 2 14H14C14.5523 14 15 13.5523 15 13V3C15 2.44772 14.5523 2 14 2H2ZM5.5 7.29289L4.14645 5.93934L3.43934 6.64645L5.14645 8.35355L5.5 8.70711L5.85355 8.35355L7.56066 6.64645L6.85355 5.93934L5.5 7.29289ZM8 10V9H12V10H8Z" />
  </svg>
)

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

// Modal Component
function Modal({ title, onClose, children }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span>{title}</span>
          <button className="modal-close" onClick={onClose}>x</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

// About Content
function AboutContent() {
  return (
    <>
      <h1>about/</h1>
      <h2>{PROFILE.name}</h2>
      <p>{PROFILE.bio}</p>
      
      <h2>about me</h2>
      <p><strong>{PROFILE.tagline}</strong></p>
      {PROFILE.details.map((d) => (
        <p key={d.label}><strong>{d.label}:</strong> {d.value}</p>
      ))}
      
      <h2>skills</h2>
      <div className="skills-grid">
        {PROFILE.skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <h3>{skill.title.toLowerCase()}</h3>
            <ul>
              {skill.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <p><strong>wip:</strong> {PROFILE.wip}</p>
      
      <h2>contact</h2>
      <div className="contact-links">
        {PROFILE.links.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.text}</a>
        ))}
      </div>
    </>
  )
}

// Experience Content (all)
function ExperienceContent() {
  return (
    <>
      <h1>experience/</h1>
      {PROFILE.experience.map((item) => (
        <div className="experience-item" key={item.org}>
          <h3>{item.org}</h3>
          <div className="meta">{item.role} - {item.dates}</div>
          {item.location && <div className="meta" style={{ opacity: 0.7 }}>{item.location}</div>}
          <p>{item.description}</p>
        </div>
      ))}
    </>
  )
}

// Single Experience Content
function SingleExperienceContent({ index }) {
  const item = PROFILE.experience[index]
  if (!item) return null
  return (
    <>
      <h1>{item.org}</h1>
      <div className="meta" style={{ marginBottom: '8px' }}>{item.role} - {item.dates}</div>
      {item.location && <div className="meta" style={{ marginBottom: '16px', opacity: 0.7 }}>{item.location}</div>}
      <p>{item.description}</p>
    </>
  )
}

// Spotify Content
function SpotifyContent() {
  return (
    <>
      <h1>on ↻</h1>
      <p style={{ marginBottom: '20px', color: 'var(--muted)' }}>what i'm currently listening to</p>
      <iframe 
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/70JA7yDCiJaDq6lvw8w0fH?utm_source=generator" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowFullScreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      />
    </>
  )
}

// Terminal Content
function TerminalContent() {
  const [input, setInput] = React.useState('')
  const [output, setOutput] = React.useState([
    "$ Welcome to Elizabeth's Terminal",
    "$ Type 'help' for available commands",
  ])

  const handleCommand = (cmd) => {
    const command = cmd.trim().toLowerCase()
    let response = ''

    switch (command) {
      case 'help':
        response = 'Available commands: help, about, skills, contact, clear, echo [text]'
        break
      case 'about':
        response = PROFILE.bio
        break
      case 'skills':
        response = PROFILE.skills.map(s => s.title + ': ' + s.items.join(', ')).join('\n')
        break
      case 'contact':
        response = PROFILE.links.map(l => l.text + ': ' + l.url).join('\n')
        break
      case 'clear':
        setOutput([])
        setInput('')
        return
      default:
        if (command.startsWith('echo ')) {
          response = command.slice(5)
        } else if (command) {
          response = `Command not found: ${command}. Type 'help' for available commands.`
        }
    }

    setOutput([...output, `$ ${cmd}`, response].filter(Boolean))
    setInput('')
  }

  return (
    <div className="terminal">
      <div className="terminal-output">
        {output.map((line, i) => (
          <div key={i} className="terminal-line">{line}</div>
        ))}
      </div>
      <div className="terminal-input-row">
        <span className="terminal-prompt">$</span>
        <input
          className="terminal-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCommand(input)}
          autoFocus
          placeholder="type a command..."
        />
      </div>
    </div>
  )
}

// Main App
function App() {
  const [modal, setModal] = React.useState(null)
  const [selectedExp, setSelectedExp] = React.useState(null)
  const [time, setTime] = React.useState('')
  const [blogPosts, setBlogPosts] = React.useState(PROFILE.blogPosts) // fallback to static

  // Note: To enable real-time blog fetching, add an RSS feed to your Netlify blog
  // and uncomment/update this useEffect to parse the feed

  React.useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const folders = [
    { id: 'about', label: 'about', icon: FolderIcon },
    { id: 'experience', label: 'experience', icon: FolderIcon },
    { id: 'spotify', label: 'on ↻', icon: SpotifyIcon },
    { id: 'terminal', label: 'terminal', icon: TerminalIcon },
  ]

  const externalLinks = [
    { id: 'github', label: 'github', url: 'https://github.com/yntianyu', icon: GitHubIcon },
    { id: 'linkedin', label: 'linkedin', url: 'https://www.linkedin.com/in/ey101/', icon: LinkedInIcon },
  ]

  const renderModalContent = () => {
    switch (modal) {
      case 'about': return <AboutContent />
      case 'experience': return <ExperienceContent />
      case 'single-experience': return <SingleExperienceContent index={selectedExp} />
      case 'spotify': return <SpotifyContent />
      case 'terminal': return <TerminalContent />
      default: return null
    }
  }

  return (
    <>
      <div className="menubar">
        <div className="menubar-left">~</div>
        <div className="menubar-right">
          <span>{time}</span>
        </div>
      </div>

      <div className="desktop">
        <div className="icon-grid">
          {folders.map((folder) => (
            <div className="icon" key={folder.id} onClick={() => setModal(folder.id)}>
              <folder.icon />
              <span className="icon-label">{folder.label}</span>
            </div>
          ))}
          {externalLinks.map((link) => (
            <a className="icon" key={link.id} href={link.url} target="_blank" rel="noreferrer">
              <link.icon />
              <span className="icon-label">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="sidebar">
          <div className="widget">
            <div className="widget-header">Blog</div>
            <ul className="widget-list">
              {blogPosts.map((post) => (
                <li className="widget-item" key={post.url}>
                  <a href={post.url} target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none', display: 'block'}}>
                    <div className="widget-item-title">{post.title}</div>
                    <div className="widget-item-meta">{post.date}</div>
                    <div className="widget-item-desc">{post.excerpt}</div>
                  </a>
                </li>
              ))}
            </ul>
            <a className="widget-footer" href="https://yntianyu.github.io/allentropy/" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none', display: 'block'}}>
              Read more posts &rarr;
            </a>
          </div>

          <div className="widget">
            <div className="widget-header">Experience</div>
            <ul className="widget-list">
              {PROFILE.experience.map((item, index) => (
                <li className="widget-item" key={item.org} onClick={() => { setSelectedExp(index); setModal('single-experience'); }}>
                  <div className="widget-item-title">{item.org}</div>
                  <div className="widget-item-meta">{item.role} - {item.dates}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {modal && (
        <Modal 
          title={modal === 'single-experience' && selectedExp !== null ? PROFILE.experience[selectedExp]?.org : modal} 
          onClose={() => { setModal(null); setSelectedExp(null); }}
        >
          {renderModalContent()}
        </Modal>
      )}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
