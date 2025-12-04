import {
  uniqueNamesGenerator,
  NumberDictionary,
  adjectives,
  animals,
} from 'unique-names-generator';

export function generateUniqNick() {
  const nums = NumberDictionary.generate({ min: 1, max: 999 });

  const nick: string = uniqueNamesGenerator({
    dictionaries: [adjectives, nums, animals],
    separator: '',
    length: 3,
    style: 'capital',
  });

  return nick;
}
