import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Jeel Tikiwala",
  logo: "/emoji_1.webp",
  email: "tikiwalajeel@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/JeelTikiwala",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:tikiwalajeel@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Jeel Tikiwala",
    description:
      "Full time student based out of Toronto, Canada who loves building cool things using code.",
    image: identity.logo,
  },
  role: "Student & Software Developer",
  description:
    "I'm Jeel Tikiwala, a full time student based out of Toronto, Canada who loves building cool things using code.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Jeel Tikiwala",
    description:
      "Full time student from Canada who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Jeel Tikiwala, a full time student based out of Toronto, Canada who loves building cool things using code.
<br/><br/>
Loves traveling, exploring new places, savoring delicious food, watching movies, and embracing exciting adventures! <br/><br/>
Learning in public.`, // Markdown is supported
    image_l: {
      url: "/img.png",
      alt: "Left Picture",
    },
    image_r: {
      url: "/emoji_1.webp",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of my work experience.`, // Markdown is supported
    items: [
      {
        title: "Unnified Communications Analyst Intern",
        company: {
          name: "OMERS",
          image: "/OMERS.png",
          url: "https://github.com/JeelTikiwala",
        },
        date: "Jan 2025 - Apr 2025",
      },
      {
        title: "Data Engineer Intern",
        company: {
          name: "OMERS",
          image: "/OMERS.png",
          url: "https://github.com/JeelTikiwala",
        },
        date: "Sept 2024 - Dec 2024",
      },
      {
        title: "User Device Managament Analyst Intern",
        company: {
          name: "OMERS",
          image: "/OMERS.png",
          url: "https://github.com/JeelTikiwala",
        },
        date: "May 2024 - Aug 2024",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Jeel Tikiwala",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Jeel Tikiwala",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
