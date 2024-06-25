import { defineCollection } from 'astro:content'
import { projects } from '../types'

// Defining Collections to provide all data anybody can update easily
// Note: Data in YAML needs type 'data', data in Markdown needs type 'content'
// https://docs.astro.build/en/guides/content-collections/#defining-collections

const projectsCollection = defineCollection({
  type: 'data',
  schema: projects
})

export const collections = {
  projects: projectsCollection,
}
