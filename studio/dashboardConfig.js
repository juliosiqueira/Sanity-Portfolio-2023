export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '637bfb8d83b95a08875af8ba',
                  title: 'Sanity Studio',
                  name: 'sanity-portfolio-2023-studio',
                  apiId: '74ccc6f3-9f2a-47aa-b238-f882493b24fa'
                },
                {
                  buildHookId: '637bfb8dc8793307a2defd18',
                  title: 'Blog Website',
                  name: 'sanity-portfolio-2023',
                  apiId: '550759f4-035e-486c-a838-0135879c6138'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/juliosiqueira/Sanity-Portfolio-2023',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-portfolio-2023.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
