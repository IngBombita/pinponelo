const Database = use("Database")

const MIN_TAG_VALUE = 100;
const MAX_TAG_VALUE = 1000;

class TagCreator {
  async create(username) {
    let tag, exists
    do {
      tag = Math.floor(Math.random() * (MAX_TAG_VALUE - MIN_TAG_VALUE) + MIN_TAG_VALUE);
      exists = await Database.from('players').where({username, tag}).first();
    } while (exists);
    return tag;
  }
}
