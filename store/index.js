import client from '~/plugins/contentful'

export const state = () => ({
  primaryInformation: null
})

export const mutations = {
  updatePrimaryInformation: (state, primaryInformation) => {
    state.primaryInformation = primaryInformation
  }
}

export const actions = {
  async getPrimaryInformation ({ commit }) {
    try {
      if (!client) { return }
      const { items } = await client.getEntries({
        content_type: 'primaryInformation'
      })

      const [obj] = items

      commit('updatePrimaryInformation', obj.fields)
    } catch (err) {
      throw new Error(err)
    }
  }
}
