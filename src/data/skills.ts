import {
  SiVuedotjs, SiNuxtdotjs, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiBootstrap,
  SiNodedotjs, SiMysql, SiMongodb, SiGit, SiGithub, SiVercel, SiPostman, SiJupyter,
  SiHtml5, SiDbeaver, SiFigma, SiTypescript, SiTailwindcss, SiNestjs, SiDocker,
  SiBookstack
} from 'react-icons/si';
import { PiFileCodeFill } from 'react-icons/pi';
import { VscVscode } from 'react-icons/vsc';
import { MdDevices } from 'react-icons/md';

export interface IconItem {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties; title?: string }>;
  label: string;
  color?: string;
  title?: string;
}

export const frontendIcons: IconItem[] = [
  { Icon: SiHtml5, label: 'HTML' },
  { Icon: SiCss3, label: 'CSS3' },
  { Icon: SiJavascript, label: 'JavaScript' },
  { Icon: SiVuedotjs, label: 'Vue.js' },
  { Icon: SiNuxtdotjs, label: 'Nuxt.js' },
  { Icon: SiReact, label: 'React' },
  { Icon: SiNextdotjs, label: 'Next.js' },
  { Icon: SiBootstrap, label: 'Bootstrap' },
  { Icon: SiTypescript, label: 'TypeScript' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS' },
];

export const backendIcons: IconItem[] = [
  { Icon: SiNodedotjs, label: 'Node.js' },
  { Icon: PiFileCodeFill, label: 'Express.js' },
  { Icon: SiMysql, label: 'MySQL' },
  { Icon: SiMongodb, label: 'MongoDB' },
  { Icon: SiDbeaver, label: 'DBeaver' },
];

export const devopsIcons: IconItem[] = [
  { Icon: SiGit, label: 'Git' },
  { Icon: SiGithub, label: 'GitHub' },
  { Icon: SiVercel, label: 'Vercel' },
];

export const toolsIcons: IconItem[] = [
  { Icon: VscVscode, label: 'VS Code' },
  { Icon: SiPostman, label: 'Postman' },
  { Icon: SiJupyter, label: 'Jupyter Notebook' },
];

export const uxuiIcons: IconItem[] = [
  { Icon: SiFigma, label: 'Figma' },
  { Icon: MdDevices, label: 'Responsive' },
];

export const learningIcons: IconItem[] = [
  { Icon: SiNestjs, label: 'Nest.js' },
  { Icon: SiMongodb, label: 'Mongo Atlas' },
  { Icon: SiDocker, label: 'Docker' },
];
