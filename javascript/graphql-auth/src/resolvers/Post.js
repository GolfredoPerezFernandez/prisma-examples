const { objectType } = require('nexus')

const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.published()
    t.model.title()
    t.model.content()
    t.model.author()
  },
})

module.exports = {
  Post
}