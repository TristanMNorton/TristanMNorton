import client from '~/plugins/contentful'

export const state = () => ({
  primaryInformation: null,
  skillGroupsRaw: null
})

export const mutations = {

  updatePrimaryInformation: (state, primaryInformation) => {
    state.primaryInformation = primaryInformation
  },

  updateSkillGroups: (state, skillGroups) => {
    state.skillGroupsRaw = skillGroups
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
  },

  async getSkillGroups ({ commit }) {
    try {
      if (!client) { return }

      const { items } = await client.getEntries({
        content_type: 'skillGroups'
      })

      commit('updateSkillGroups', items)
    } catch (err) {
      throw new Error(err)
    }
  }

}

export const getters = {

  skillGroups: (state) => {
    return state.skillGroupsRaw.map((skillGroup) => {
      return {
        ...skillGroup.fields,
        id: skillGroup.sys.id
      }
    })
  }

}
