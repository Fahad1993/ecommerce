import type { StructureBuilder } from 'sanity/desk'

export default (S: StructureBuilder) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Movie')
                .child(
                    S.documentTypeList('movie')
                        .title('Movie')
                        .menuItems(S.documentTypeList('movie').getMenuItems())
                        .child(S.document().views([S.view.form()]))
                ),
        ])