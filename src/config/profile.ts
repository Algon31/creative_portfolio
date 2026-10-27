/**
 * Profile & External Links Configuration
 * 
 * Update these placeholder fields when you provide the actual links and content.
 */

export interface ProfileConfig {
  name: string;
  title: string;
  shortBio: string[];
  links: {
    github: string;
    linkedin: string;
    instagram: string;
    email: string;
    resume: string;
    projectRepo: string;
    projectDemo: string;
  };
}

export const profileConfig: ProfileConfig = {
  name: 'Ravi Bhuvan',
  title: 'Video Editor',
  // Short introduction (2-3 lines placeholder text as requested; to be customized)
  shortBio: [
    'Video editor and creative technologist exploring the rhythm of cinema and the geometry of digital interfaces.',
    'Specializing in high-pacing narrative cuts, procedural motion systems, and tactile web experiences.',
  ],
  links: {
    github: 'https://github.com/placeholder-ravi',       // [PLACEHOLDER: Pending user GitHub URL]
    linkedin: 'https://linkedin.com/in/placeholder-ravi', // [PLACEHOLDER: Pending user LinkedIn URL]
    instagram: 'https://instagram.com/placeholder-ravi', // [PLACEHOLDER: Pending user Instagram URL]
    email: 'ravibhuvan.studio@gmail.com',                 // [PLACEHOLDER: Pending user Email]
    resume: 'https://placeholder-resume-url.com',         // [PLACEHOLDER: Pending user Résumé URL]
    projectRepo: 'https://github.com/placeholder-ravi',   // [PLACEHOLDER: Pending user Repo links]
    projectDemo: 'https://placeholder-demo-url.com',      // [PLACEHOLDER: Pending user Demo links]
  },
};
