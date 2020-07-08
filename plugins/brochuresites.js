export default async ({ store }) => {
  await store.dispatch('getBrochureSites')
}
