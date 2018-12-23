// @flow

import type { Input } from '../types';

export default class GroupInput {
    inputs: Array<Input> = [];

    name: string = '';

    constructor(name: string, inputs: Array<Input>) {
        this.name = name;
        this.inputs = inputs;
    }

    add(input: Input): void {
        this.inputs.push(input);
    }
}
