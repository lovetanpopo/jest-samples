// funcをmock化してしまうので元のfunctionを退避しておく
const target = require('./02.sample');
const originalFuncA = target.funcA;
const originalFuncB = target.funcB;
const originalFuncC = target.funcC;

describe('02.sample test', () => {

    beforeEach(() => {
        // spy化されたmockを戻す
        // https://doc.ebichu.cc/jest/docs/ja/jest-object.html
        jest.restoreAllMocks();
    });

    test('funcA funcBをmock化して指定された値を返す', () => {
        const spyObj = jest.spyOn(target, 'funcB').mockReturnValue(111);
        expect(originalFuncA()).toBe(111);
        expect(spyObj).toBeCalledTimes(1);
    });

    test('funcB funcCをmock化して指定された値を返す', () => {
        const spyObj = jest.spyOn(target, 'funcC').mockReturnValue(222);
        expect(originalFuncB()).toBe(222);
        expect(spyObj).toBeCalledTimes(1);
    });

    test('funcC 100を返す', () => {
        expect(originalFuncC()).toBe(100);
    });

    test('funcA mockを利用しないので100を返す', () => {
        // jest.restoreAllMocks()で戻っていることの確認
        expect(originalFuncA()).toBe(100);
    });
});