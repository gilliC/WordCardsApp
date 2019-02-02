const wordModel = 'server.word';

export default class Word {
  constructor(dbItem) {
    if (dbItem.model !== wordModel)
      throw 'The item should be of server.word model';
    this.id = dbItem.pk;
    this.englishTranslation = dbItem.fields.english_translation;
    this.germanWord = dbItem.fields.german_word;
    this.gender = dbItem.fields.gender;
  }
}
