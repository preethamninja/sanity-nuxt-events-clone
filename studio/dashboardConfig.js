export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-clone-studio',
                  apiId: 'da7f24be-b91c-4f1b-9631-8a3610e6e640'
                },
                {
                  buildHookId: '5f3c54ca672baa01350ab13e',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-clone',
                  apiId: 'b411b969-2b39-4a5e-85f7-b3ca2ad11c16'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/preethamninja/sanity-nuxt-events-clone',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-clone.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
