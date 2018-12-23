import GroupInput from '../src/lib/group-input';

describe('GroupInput', () => {
    it('Should create group input', () => {
        const groupInput = new GroupInput('input', []);

        expect(groupInput.name).toBe('input');
        expect(groupInput.inputs).toEqual([]);
    });

    it('Should add new input', () => {
        const input = document.createElement('input');
        const groupInput = new GroupInput('input', []);

        expect(groupInput.inputs).toEqual([]);

        groupInput.add(input);

        expect(groupInput.inputs).toEqual([input]);
    });
});
