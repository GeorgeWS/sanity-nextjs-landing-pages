export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dcae75f64c7c909b1adb9a4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uhutj49r',
                  apiId: '3e530bef-0953-46d3-bd95-59896f232df7'
                },
                {
                  buildHookId: '5dcae75f4dfa02c46694eb63',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-85x5vebk',
                  apiId: '55cdfab1-25ee-4643-a312-d43de14606f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GeorgeWS/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-85x5vebk.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
