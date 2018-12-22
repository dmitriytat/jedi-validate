// @flow

export default class GroupInput {
    inputs: Array<HTMLInputElement> = [];

    name: string = '';

    constructor(name: string, inputs: Array<HTMLInputElement>) {
        this.name = name;
        this.inputs = inputs;
    }

    length = {
        get(): number {
            return this.inputs.length;
        },
    };

    add(input: HTMLInputElement): void {
        this.inputs.push(input);
    }
}
