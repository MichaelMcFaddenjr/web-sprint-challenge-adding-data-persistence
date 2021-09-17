const db = require('../../data/dbConfig');

const getResources = () => {
  const resourceRows = db('resources as r')
  return resourceRows
}

const addResource = (resource) => {
  return db('resources')
    .insert(resource)
    .then(([resource_id]) => {
      return db('resources').where('resource_id', resource_id).first()
    })
}

module.exports = { getResources, addResource }