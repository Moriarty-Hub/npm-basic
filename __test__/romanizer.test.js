import {transform} from "../src/romanizer";

describe('romanizer', () => {
    it('should return X when input 10', () => {
        const result = transform(10);
        expect(result).toEqual('X');
    })
})
