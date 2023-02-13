
// sanity.config.js

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas/schemaTypes.js'
import deskStructure from './structure/deskStructure'




export default defineConfig({
  name: 'default',
  title: 'My Cool Project',
  projectId: 'bf2p2mkr',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: (prev, context) => {
      console.log(context);// logs { projectId, dataset }
      return [...schemaTypes, ...prev]
    },
  },
})

