export interface FileSystemItem {
  name: string
  type: "file" | "directory"
  contentPath?: string
  extension?: string
  description?: string
  children?: FileSystemItem[]
}

export const fileSystem: FileSystemItem[] = [
  {
    name: "about.md",
    type: "file",
    extension: "md",
    contentPath: "/content/about.md",
  },
  {
    name: "experience",
    type: "directory",
    description: "Professional work history and achievements",
    children: [
      {
        name: "work-history.md",
        type: "file",
        extension: "md",
        contentPath: "/content/experience/work-history.md",
      },
    ],
  },
  {
    name: "projects",
    type: "directory",
    description: "Personal projects and learning experiments",
    children: [
      {
        name: "terminal-portfolio",
        type: "directory",
        description: "This interactive terminal-style portfolio website",
        children: [
          {
            name: "readme.md",
            type: "file",
            extension: "md",
            contentPath: "/content/projects/terminal-portfolio/readme.md",
          },
        ],
      },
      {
        name: "paye-calculator",
        type: "directory",
        description: "Python Flask app for salary calculations",
        children: [
          {
            name: "readme.md",
            type: "file",
            extension: "md",
            contentPath: "/content/projects/paye-calculator/readme.md",
          },
        ],
      },
      {
        name: "homelab-automation",
        type: "directory",
        description: "Docker, Terraform, and Jenkins experiments",
        children: [
          {
            name: "readme.md",
            type: "file",
            extension: "md",
            contentPath: "/content/projects/homelab-automation/readme.md",
          },
        ],
      },
    ],
  },
  {
    name: "blog",
    type: "directory",
    description: "My journey from IT Support to DevOps",
    children: [
      {
        name: "welcome.md",
        type: "file",
        extension: "md",
        contentPath: "/content/blog/welcome.md",
      },
      {
        name: "crowdstrike-outage-lessons.md",
        type: "file",
        extension: "md",
        contentPath: "/content/blog/crowdstrike-outage-lessons.md",
      },
    ],
  },
  {
    name: "education",
    type: "directory",
    description: "Academic background and certifications",
    children: [
      {
        name: "background.md",
        type: "file",
        extension: "md",
        contentPath: "/content/education/background.md",
      },
    ],
  },
  {
    name: "skills",
    type: "directory",
    description: "Technical skills and expertise levels",
    children: [
      {
        name: "tech-stack.json",
        type: "file",
        extension: "json",
        contentPath: "/content/skills/tech-stack.json",
      },
    ],
  },
]

