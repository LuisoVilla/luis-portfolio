import type { IconType } from 'react-icons'
import {
  SiCss3,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

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
  "I’m a senior frontend engineer with over 7 years of experience working primarily with React and TypeScript, and solid experience collaborating in fullstack environments with Node.js. I focus on building clean, maintainable, and scalable systems, with strong attention to architecture, performance, and developer experience. I enjoy owning features end-to-end, making thoughtful technical decisions, and collaborating closely with cross-functional teams. I’m excited about opportunities where I can contribute both technically and strategically while continuing to learn and grow."

export const contact = {
  linkedInUrl: 'https://www.linkedin.com/in/luis-villa-55792b61/',
  phoneDisplay: '+54 9381 218-3026',
  phoneTel: '+5493812183026',
}

export type Technology = {
  name: string
  Icon: IconType
  color?: string
}

export const technologies: Technology[] = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'Vercel', Icon: SiVercel },
]
