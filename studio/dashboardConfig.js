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
                  buildHookId: '62040ef1d3985e00a9c8806d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9xy8e14e',
                  apiId: 'cca32310-a853-448a-9ead-c85267b34a96'
                },
                {
                  buildHookId: '62040ef2f12f42008ce9c883',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2by22svi',
                  apiId: '0622cadb-1013-43b6-9331-1c8e388cb52b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webonly-designs/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2by22svi.netlify.app', category: 'apps'}
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
