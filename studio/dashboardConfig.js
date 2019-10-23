export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5db064048dc2860191ca5718',
                  title: 'Sanity Studio',
                  name: 'saelen-samlingen-rev2-studio',
                  apiId: 'a96bf10e-8166-4ced-819c-6ec85ea0d7c8'
                },
                {
                  buildHookId: '5db06404df915501985c5ac1',
                  title: 'Portfolio Website',
                  name: 'saelen-samlingen-rev2',
                  apiId: 'feee1fd4-20c0-4c18-afb5-d6728429c724'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tarjelavik/saelen-samlingen-rev2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://saelen-samlingen-rev2.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
