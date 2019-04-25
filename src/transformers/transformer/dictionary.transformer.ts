import { dictionaries as dicts, Dictionaries } from '../../dictionaries';
import { Transformer } from '../transformer.interface';

class DictionaryTransformer implements Transformer {
  constructor(private dictionaries: Dictionaries) {}

  public isSatisfiedBy(prefix: string) {
    return prefix === 'd:';
  }

  public transform(value: string) {
    const splittedValue = value.split(':');
    return this.dictionaries.getMappedValue(splittedValue[0], splittedValue[1]);
  }
}
export const createDictionaryTransformer = (dictionaries = dicts) => new DictionaryTransformer(dictionaries);
