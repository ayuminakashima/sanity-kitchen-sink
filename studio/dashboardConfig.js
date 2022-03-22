export default {
  widgets: [
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
                  buildHookId: '6239f83812b34c35e33a91b9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-f9g9s2th',
                  apiId: '223a9e29-09be-4a84-b954-36910b6848a9'
                },
                {
                  buildHookId: '6239f8394f325e2bf5a448f6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-98toeysf',
                  apiId: '87463ffa-c4a4-4708-ba11-9fc69140e136'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ayuminakashima/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-98toeysf.netlify.app', category: 'apps'}
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
