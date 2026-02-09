import { defineConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  title: "Bundoran Wiki",
  description: "Service related site",
  base: '/buna-wik/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Meetings', link: '/meetings/' },
      { text: 'Minutes', link: '/minutes/' },
      { text: 'Guides', link: '/guides/' },
    ],
    //autosidebar
    //sidebar: getSidebar({ 
    //        contentRoot: '/docs', 
    //        contentDirs: [
    //            'meetings',
    //            'minutes',
    //            'guides'
    //        ], 
    //        collapsible: true, 
    //        collapsed: true,
    //        useFrontmatter: true
    //    }),
    //default method
    //sidebar: [
    //  {
    //    text: 'Guides',
    //    items: [
    //      { text: 'Meeting Formats', link: '/guides/meeting-formats' },
    //      { text: 'General Service', link: '/guides/general-service' }
    //    ]
    //  }
    //],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/buna/wiki' }
    ]
  }
};
const vitePressSidebarOptions = {
  documentRootPath: '/docs',
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFrontmatter: true,
  useTitleFromFileHeading: true,
  // useTitleFromFrontmatter: true,
};
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
