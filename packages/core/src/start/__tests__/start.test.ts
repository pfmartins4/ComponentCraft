import { helloWorld } from "../start";

describe('Example Test',()=>{
    it('correctly runs a test', () => {
        expect(helloWorld()).toBeTruthy();
    })
})