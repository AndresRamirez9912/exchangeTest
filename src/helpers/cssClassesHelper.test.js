import { getBEMClasses, addModifier } from './cssClassesHelper';

describe('cssClassesHelper', () => {
  describe('getBEMClasses', () => {
    it('should return correct className', () => {
      const testClasses = getBEMClasses('test');
      const className = testClasses('input');

      expect(className).toBe('test__input');
    });
  });
  describe('addModifier', () => {
    it('should add modifier correctly if modifiersis array', () => {
      const modifiers = ['ap', 'input'];
      const result = addModifier(modifiers, 'test');

      expect(result).toEqual(['test', 'ap', 'input']);
    });

    it('should add modifier correctly if modifiers is string', () => {
      const modifiers = 'input';
      const result = addModifier(modifiers, 'test');

      expect(result).toEqual(['test', 'input']);
    });

    it('should add modifier correctly if modifiers is object', () => {
      const modifiers = {
        input: true
      };

      const result = addModifier(modifiers, 'test');

      expect(result).toEqual({
        input: true,
        test: true
      });
    });
  });
});
