import {capitalizeFirstLetter} from '../services/functionsUtilities';
const wordModel = 'server.word';
const genders = ['Die', 'Der', 'Das'];

export default class Word {
  constructor(dbItem) {
    if (dbItem.model !== wordModel)
      throw 'The item should be of server.word model';
    this.id = dbItem.pk;
    this.translation = capitalizeFirstLetter(dbItem.fields.translation);
    this.germanWord = capitalizeFirstLetter(dbItem.fields.german_word);
    let gender = this.validateAndFormatGender(dbItem.fields.gender);
    this.gender = gender;
  }
  validateAndFormatGender(gender) {
    gender = capitalizeFirstLetter(gender);
    if (genders.includes(gender)) return gender;
    throw 'gender is incorrect';
  }
}
