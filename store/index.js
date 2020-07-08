import client from '~/plugins/contentful'

export const state = () => ({
  primaryInformation: null,
  skillGroupsRaw: null,
  brochureSitesRaw: null
})

export const mutations = {

  updatePrimaryInformation: (state, primaryInformation) => {
    state.primaryInformation = primaryInformation
  },

  updateSkillGroups: (state, skillGroups) => {
    state.skillGroupsRaw = skillGroups
  },

  updateBrochureSites: (state, brochureSites) => {
    state.brochureSitesRaw = brochureSites
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
  },

  async getBrochureSites ({ commit }) {
    try {
      if (!client) { return }

      const { items } = await client.getEntries({
        content_type: 'brochureSites'
      })

      commit('updateBrochureSites', items)
    } catch (err) {
      throw new Error(err)
    }
  }

}

export const getters = {

  skillGroups: state => {
    return state.skillGroupsRaw.map(skillGroup => {
      return {
        ...skillGroup.fields,
        id: skillGroup.sys.id
      }
    })
  },

  brochureSites: state => {
    return state.brochureSitesRaw.map(brochureSite => {
      const {
        siteName: name,
        siteUrl: url,
        siteDescription: description
      } = brochureSite.fields

      const thumbnail = brochureSite.fields.siteThumbnail.fields.file
      const { id } = brochureSite.sys

      return {
        name,
        url,
        description,
        thumbnail,
        id
      }
    })
  }

}
