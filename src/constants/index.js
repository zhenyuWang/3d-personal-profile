import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  javascript,
  typescript,
  vue,
  pinia,
  uni,
  react,
  nextjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  HengRiYunShang,
  TianRongHuLian,
  HeShengChuangZhan,
  DCloud,
  nextjsDevelopmentFramework,
  nextjsAdmin,
  uniapp,
  bigScreenEcharts,
  backgroundManagementSystem,
} from '../assets'

const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Hybrid App developer',
    icon: mobile,
  },
  {
    title: 'Basic Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Vue JS',
    icon: vue,
  },
  {
    name: 'Pinia',
    icon: pinia,
  },
  {
    name: 'Uni App',
    icon: uni,
  },
  {
    name: 'React JS',
    icon: react,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
]

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'heng ri yun shang',
    icon: HengRiYunShang,
    iconBg: '#fff',
    date: 'August 2016 - September 2017',
    points: [
      'Developing and maintaining web applications using Vue.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Front-End Developer',
    company_name: 'tian rong hu lian',
    icon: TianRongHuLian,
    iconBg: '#383E56',
    date: 'November 2017 - June 2019',
    points: [
      'Developing and maintaining web applications using Vue.js、React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Front-End Developer',
    company_name: 'he sheng chuang zhan',
    icon: HeShengChuangZhan,
    iconBg: '#fff',
    date: 'June 2019 - May 2022',
    points: [
      'Developing and maintaining web applications using Vue.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Front-End Developer',
    company_name: 'DCloud',
    icon: DCloud,
    iconBg: '#f3f3f3',
    date: 'June 2022 - Present',
    points: [
      'Deeply involved in the development and iteration of uni-app and Uni-app-X, involving compilers, runtime, automated testing, etc.',
      'In-depth understanding and rich experience in Vue source code, hybrid development, and small program development.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
{
    name: 'Nextjs Development Template',
    description:
      'A Nextjs development template with unit tests and e2e tests integrated.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'jest',
        color: 'pink-text-gradient',
      },
    ],
    image: nextjsDevelopmentFramework,
    source_code_link: 'https://github.com/zhenyuWang/nextjs-development-framework',
  },
  {
    name: 'Nextjs Admin',
    description:
      'A background management system template based on Next.js@14 NextUI and NextAuth.js.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextUI',
        color: 'green-text-gradient',
      },
      {
        name: 'nextAuth',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: nextjsAdmin,
    source_code_link: 'https://github.com/zhenyuWang/nextjs-admin',
  },
  {
    name: 'Uni App',
    description:
      'A cross-platform framework using Vuejs. A set of code that can be published to iOS, Android, Web and various small programs.',
    tags: [
      {
        name: 'vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'cross-platform',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'jest',
        color: 'pink-text-gradient',
      },
    ],
    image: uniapp,
    source_code_link: 'https://github.com/dcloudio/uni-app',
  },
  {
    name: 'Big Screen Echarts',
    description:
      'A large screen visual development framework based on Vuejs and Echarts.Unit tests are also integrated.',
    tags: [
      {
        name: 'vite',
        color: 'blue-text-gradient',
      },
      {
        name: 'vue',
        color: 'green-text-gradient',
      },
      {
        name: 'echarts',
        color: 'green-text-gradient',
      },
      {
        name: 'jest',
        color: 'pink-text-gradient',
      },
    ],
    image: bigScreenEcharts,
    source_code_link:
      'https://github.com/zhenyuWang/large-screen-visualization-echarts',
  },
  {
    name: 'Management System',
    description:
      'A background management system development template based on Vuejs.Both unit and e2e tests are integrated.',
    tags: [
      {
        name: 'vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'pinia',
        color: 'blue-text-gradient',
      },
      {
        name: 'ElementPlus',
        color: 'green-text-gradient',
      },
      {
        name: 'jest',
        color: 'pink-text-gradient',
      },
      {
        name: 'cypress',
        color: 'pink-text-gradient',
      },
    ],
    image: backgroundManagementSystem,
    source_code_link: 'https://github.com/zhenyuWang/vue3-element-admin2',
  },
]

export { navLinks, services, technologies, experiences, testimonials, projects }
