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
  skills: {
    title: string;
    technologies: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewButton: string;
    codeButton: string;
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
    messagePlaceholder: string;
    sendButton: string;
  };
}
