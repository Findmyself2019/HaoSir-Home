import { defineConfig } from 'vitepress'
import { getSideBarList } from './utils'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/HaoSir-Home/',
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/ext.svg',
    siteTitle: 'Project SitTitle',
    search: {
      provider: 'local'
    },
    nav: [
      {
        text: '基础',
        items: [
          {
            text: 'HTML',
            link: '/html/index'
          },
          {
            text: 'CSS',
            link: '/css/index'
          },
        ]
      },
      {
        text: 'API',
        link: '/api/index'
      },
      {
        text: '核心篇',
        link: '/core/index'
      },
      {
        text: '实战教学篇',
        items: [
          {
            text: '原生 JS 开发',
            link: '/teach/index'
          },
          {
            text: 'Vue', 
            link: '/teach/index'
          },
          {
            text: 'React', 
            link: '/teach/index'
          },
          {
            text: 'CRXJS Vue', 
            link: '/teach/index'
          },
          {
            text: 'CRXJS React', 
            link: '/teach/index'
          }
        ]
      },
      {
        text: '实用插件推荐',
        link: '/summarize/index'
      },
      {
        text: '网站导航',
        link: '/team/index'
      }
    ],
    sidebar: {
      // 'basic': getSideBarList('/basic'),
      'html': getSideBarList('/html'),
      // 'core': getSideBarList('/core'),
      // 'teach': getSideBarList('/teach'),
      // 'summarize': getSideBarList('/summarize'),
      // 'team': getSideBarList('/team'),
    },
  }
})
