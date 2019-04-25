import { generators, Generators } from '../../generators';
import { Transformer } from '../transformer.interface';

class GeneratorTransformer implements Transformer {
  constructor(public generator: Generators) {}

  public isSatisfiedBy(prefix: string) {
    return prefix === 'g:';
  }

  public transform(value: string) {
    const splittedValues = value.split(':');
    const generatorName = splittedValues[0];

    return this.generator.generate(generatorName, splittedValues.slice(1));
  }
}
export const createGeneratorTransformer = (geners = generators) => new GeneratorTransformer(geners);
