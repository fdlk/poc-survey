const headers = {
  'Content-Type': 'application/json',
  'x-molgenis-token': 'test' //todo: nono
}

const getId = (url) => url.substring(url.lastIndexOf('/') + 1, url.length)

export default {
  async fetchOneToMany() {
    const response = await fetch('/api/metadata/it_emx_onetomany_author/attributes', { headers })
    return (await response.json()).items.map(it => it.data).filter(it => "ONETOMANY" === it.type.toUpperCase())
  },
  async start({ commit, state }) {
    const response = await fetch('/api/data/it_emx_onetomany_author',
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          status: 'OPEN',
          owner: state.username
        })
      })
    commit('setLocation', response.headers.get('Location'))
  },
  saveTheChildren({ state }, {attribute, parent}) {
    const parentId = getId(state.location)
    const children = parent[attribute.name] || []
    return Promise.all(children.map(child => fetch('/api/data/'+getId(attribute.refEntityType.self), {
      method: 'POST',
      headers,
      body: JSON.stringify({
        [attribute.mappedBy.data.name]: parentId,
        ...child
      })
    })))
  },
  async save({ state, dispatch }, data) {
    const [attributes] = await Promise.all(
      [dispatch('fetchOneToMany'),
      fetch(state.location, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          ...data,
          status: 'SUBMITTED',
          owner: state.username,
        })
      })])
    return Promise.all(attributes.map(attribute => dispatch('saveTheChildren', {attribute, parent: data})))
  }
}