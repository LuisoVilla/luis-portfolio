import type { IconType } from 'react-icons'
import {
  SiC,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiJenkins,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiAmazonwebservices,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import { DiMsqlServer } from 'react-icons/di'

export type ProjectLink = {
  label: string
  href: string
}

export const projectLinks: ProjectLink[] = [
  {
    label: 'Personal Project example',
    href: 'https://aerolab-gaming-app.vercel.app/',
  },
  {
    label: 'GitHub Repo',
    href: 'https://github.com/LuisoVilla',
  },
  {
    label: 'Medical-Notes Repo',
    href: 'https://github.com/LuisoVilla/Medical-Notes',
  },
]

export const experienceSummary =
  "I’m a senior frontend engineer with over 10 years of experience working primarily with React and TypeScript, and solid experience collaborating in fullstack environments with Node.js. I focus on building clean, maintainable, and scalable systems, with strong attention to architecture, performance, and developer experience. I enjoy owning features end-to-end, making thoughtful technical decisions, and collaborating closely with cross-functional teams. I’m excited about opportunities where I can contribute both technically and strategically while continuing to learn and grow."

export const contact = {
  linkedInUrl: 'https://www.linkedin.com/in/luis-villa-55792b61/',
  phoneDisplay: '+54 381 218-3026',
  phoneTel: '+543812183026',
  countryLabel: 'Argentina',
  countryFlagSrc: '/flags/ar.svg',
  countryFlagAlt: 'Bandera de Argentina',
}

export type Company = {
  name: string
  role?: string
  location?: string
  start: string
  end: string
  descriptions: string[]
  logoUrl?: string
}

export const companies: Company[] = [
  {
    name: 'TrueSpot',
    role: 'Senior Software Engineer',
    location: 'Irving, Texas (Remote)',
    start: '2025-02',
    end: '2025-06',
    descriptions: [
      'Development of web applications with React, JavaScript, TypeScript, Next.js and Node.js; HTML/CSS; Styled Components; Redux; Zustand; Git; Jira; Bitbucket; AWS cloud services.',
      'Collaborated closely with the team, delivering high-quality work on time.',
      'Developed scalable and maintainable code, ensuring long-term stability.',
      'Integrated new technologies into existing systems to improve capabilities and performance.',
      'Built reusable components to reduce development effort across projects.',
      'Applied effective debugging strategies, reducing defects and increasing reliability.',
    ],
    logoUrl: '/logos/truespot.png',
  },
  {
    name: 'Leniolabs',
    role: 'Senior Software Engineer',
    location: 'San Miguel de Tucumán',
    start: '2020-03',
    end: '2024-12',
    descriptions: [
      'Development of web applications with React, JavaScript, TypeScript, Next.js; HTML/CSS; Styled Components; Redux; Zustand; Git; Jira; Bitbucket.',
      'Collaborated with the team, delivering high-quality code on time.',
    ],
    logoUrl: '/logos/improving.png',
  },
  {
    name: 'Integra Media',
    role: 'Software Engineer',
    location: 'San Miguel de Tucumán',
    start: '2019-10',
    end: '2020-12',
    descriptions: [
      'Worked on a Health Insurance related project, developing web applications using .NET Core, JavaScript, SQL Server and Microsoft Azure (plus Git, Jira and Bitbucket).',
    ],
    logoUrl: '/logos/integra-media.png',
  },
  {
    name: 'Cultura IT',
    role: 'Software Engineer',
    location: 'Argentina',
    start: '2019-07',
    end: '2019-10',
    descriptions: [
      'Development of web applications using C#, .NET Core, Microsoft Azure, Git, Bitbucket, Jira and SQL Server.',
    ],
    logoUrl: '/logos/cultura-it.png',
  },
  {
    name: 'Sovos',
    role: 'Software Engineer II',
    location: 'Argentina',
    start: '2016-08',
    end: '2019-06',
    descriptions: [
      'Development of web applications using React, Node.js, .NET Framework, C#, SQL Server, Bitbucket, Git and Jira.',
    ],
    logoUrl: '/logos/sovos.png',
  },
]

export type Technology = {
  name: string
  Icon: IconType
  color?: string
}

export const technologies: Technology[] = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },

  { name: '.NET Core', Icon: SiDotnet },
  { name: 'C#', Icon: SiC },

  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },

  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', Icon: SiGithub },

  { name: 'SQL Server', Icon: DiMsqlServer, color: '#CC2927' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },

  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Azure', Icon: VscAzure, color: '#0078D4' },
  { name: 'AWS', Icon: SiAmazonwebservices, color: '#FF9900' },
  { name: 'Jenkins', Icon: SiJenkins, color: '#D24939' },

  { name: 'Vercel', Icon: SiVercel },
]
