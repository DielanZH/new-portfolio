export interface TranslationSchema {
  landing: {
    greeting: string;
    name: string;
    specialization: string;
    description: string;
    resumeLink: string;
  };
  navbar: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  about: {
    title: string;
    description: string;
    whyTitle: string;
    whyDescription: string;
  };
  stack: {
    title: string;
    technologies: string;
    frontend: string;
    frontendItems: {
      name?: string;
      svg: string;
    }[];
    backend: string;
    backendItems: {
      name?: string;
      svg: string;
    }[];
    databases: string;
    databasesItems: {
      name?: string;
      svg: string;
    }[];
    tools: string;
    toolsItems: {
      name?: string;
      svg: string;
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    projects: {
      name: string;
      description: string;
      technologies: string[];
      image: string;
      github: string;
      deploy: string;
    }[];
  };
  contact: {
    title: string;
    emailPlaceholder: string;
    autor: string;
  };
}
