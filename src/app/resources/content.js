import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Wellington",
  lastName: "Queiroz",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack Developer",
  avatar: "/images/avatar-well.jpg",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Portuguese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/wthew",
  },
  // {
  //     name: 'LinkedIn',
  //     icon: 'linkedin',
  //     link: 'https://www.linkedin.com/company/once-ui/',
  // },
  // {
  //     name: 'X',
  //     icon: 'x',
  //     link: '',
  // },
  {
    name: "Email",
    icon: "email",
    link: "mailto:the.w.3107@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Fullstack dev</>,
  subline: (
    <>
      I'm a developer skilled in <InlineCode>frontend</InlineCode>,{" "}
      <InlineCode>mobile</InlineCode>, and <InlineCode>backend</InlineCode>{" "}
      development, a fullstack with experience in <InlineCode>apps</InlineCode>,{" "}
      <InlineCode>landing-pages</InlineCode>,{" "}
      <InlineCode>server-side</InlineCode>, <InlineCode>client-side</InlineCode>{" "}
      and some stuffs in personal projects, including a{" "}
      <InlineCode>assistant</InlineCode> soon to be available for everyone..
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m Wellington Queiroz, a fullstack developer passionate about crafting
        seamless digital solutions that bridge the gap between functionality and
        user experience. My expertise spans web and mobile development,
        interactive platforms, and the integration of cutting-edge technologies
        to deliver impactful, scalable results that meet both business and user
        needs.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "rentzApp",
        timeframe: "2021 - Present",
        role: "Fullstack developer",
        achievements: [
          <>App mobile: react native, javascript, graphql, redux</>,
          <>Frontend: react, nextjs, typescript, bootstrap, graphql, scss</>,
          <>Backend: nodejs, mongodb, express, graphql, websocket, redis</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Estácio",
        description: <>Studying "computer science" at Estácio College</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Typescript",
        description: (
          <>
            Proficiency in TypeScript allows me to write more reliable and
            maintainable code by leveraging static typing, enhanced tooling, and
            seamless integration with modern JavaScript frameworks. This enables
            me to catch errors early in development, improve code quality, and
            streamline collaboration in larger projects, ensuring a smoother and
            more efficient development process.
          </>
        ),
      },
      {
        title: "Linux",
        description: (
          <>
            A passionate Linux enthusiast with a deep interest in exploring its
            vast ecosystem. I thrive on learning new tools and techniques within
            the Linux environment, driven by curiosity and a love for
            open-source technology. My ability to quickly adapt and experiment
            allows me to continuously enhance my skills and contribute to
            efficient, reliable systems
          </>
        ),
      },
      {
        title: "Python",
        description: (
          <>
            Skilled in Python, I have experience developing personal projects
            available on my GitHub. I use Python for web development,
            automation, scripting, and exploring new libraries to build
            efficient and creative solutions. Recently, I've started diving into
            Machine Learning and AI, expanding my knowledge in these exciting
            fields.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          //   {
          //     src: "/images/projects/videos/pyretro.gif",
          //     alt: "Project image",
          //     width: 16,
          //     height: 9,
          //   },
        ],
      },
      {
        title: "Graphql",
        description: (
          <>
            Proficient in GraphQL, I specialize in designing flexible,
            high-performance APIs that optimize data retrieval and simplify
            integration. Focused on scalability and reliability, I create
            efficient data queries that improve application performance and
            enhance user experiences.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //     src: '/images/projects/gql.png',
          //     alt: 'Project image',
          //     width: 16,
          //     height: 9
          // },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };