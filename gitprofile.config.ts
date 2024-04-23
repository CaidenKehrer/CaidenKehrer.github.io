// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'CaidenKehrer', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Work Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Particle Sense',
          description:
            'Developed the backend used by the Particle Sense Sensor management app',
          imageUrl:
            'https://play-lh.googleusercontent.com/tutQpiBgnkhUbBi5DfWUJZNBqzeFWnnrwt8dzOKe_0ouxAJu4GkyI71H4epwHa5Bs8Q=w240-h480-rw',
          link: 'https://apps.apple.com/us/app/particlesense-sensor-manager/id1549554629',
        },
        {
          title: 'Pollen Wise',
          description:
            'Developed the backend used by the Pollen Wise Consumer app',
          imageUrl:
            'https://play-lh.googleusercontent.com/2OeS9-BaBX9Dp4hjJ3k2pQeg8wFg2umHDTqLFOdcI3CCYpyTbO6HOZP6gOkLYxaMIL0X=w240-h480-rw',
          link: 'https://apps.apple.com/us/app/pollen-wise/id1474856970',
        },
        
        {
          title: 'Pollen Sense Public APIs',
          description:
            'Designed and implemented the moddeling system used by microsoft and other large companies',
          imageUrl:
            'https://assets-global.website-files.com/5f89c9bc7ce1cb5647f27ccc/5f9afc2c43b65f1335a34507_Maps%20composite%20for%20API.jpg',
          link: 'https://www.pollensense.com/',
        },
        
        {
          title: 'Pollen Wise',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Caiden Kehrer',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'caiden-kehrer',
    twitter: 'KehrerCaiden',
    researchGate: '',
    facebook: 'caiden.kehrer',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'caiden-kehrer',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.caidenkehrer.com',
    phone: '',
    email: 'caidenkehrer@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    'Dotnet',
    'Angular',
    'SQL/TSQL',
    'Node.js',
    'C++',
    'Azure',
    'PostgreSQL',
    'Git',
    'Docker',
    '',
    'SCSS/CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Pollen Sense',
      position: 'Full Stack Developer/Database Manager/ API Developer',
      from: 'April 2020',
      to: 'Present',
      companyLink: 'https://pollensense.com',
    },
    // {
    //   company: 'Digithought',
    //   position: 'Software developer',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Utah Valley University',
      degree: 'Bachelors',
      from: '2020',
      to: '2023',
    },
    {
      institution: 'Utah Valley University',
      degree: 'Associates Of Science',
      from: '2016',
      to: '2018',
    },
  ],
  publications: [
   
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'corporate',
      'lofi',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
