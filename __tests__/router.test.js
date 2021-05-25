/**
 * @jest-environment jsdom
 */

import { pushToHistory } from "../scripts/router";
describe('my history', () => {
    test('length should be the same', () => {
        pushToHistory("lmao", 5);
        pushToHistory("lmao2", 7);
        expect(window.history.length).toBe(3);
    });

    test('Current states should match', () => {
        expect(hist.state).toBe("lmao2");
    });
});