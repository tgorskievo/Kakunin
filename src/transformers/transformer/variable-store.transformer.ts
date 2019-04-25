import store from '../../web/variable-store.helper';
import { VariableStore } from '../../web/variable-store.helper';
import { Transformer } from '../transformer.interface';

class VariableStoreTransformer implements Transformer {
  constructor(private variableStore: VariableStore) {}

  public isSatisfiedBy(prefix: string) {
    return prefix === 'v:';
  }

  public transform(value: string) {
    return this.variableStore.getVariableValue(value);
  }
}
export const createVariableStoreTransformer = (variableStore = store) => new VariableStoreTransformer(variableStore);
