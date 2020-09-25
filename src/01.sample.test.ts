// funcをmock化してしまうので元のfunctionを退避しておく
const target = require('./01.sample');
const originalFuncA = target.funcA;
const originalFuncB = target.funcB;
const originalFuncC = target.funcC;

describe('01.sample test', () => {

    beforeEach(() => {
        jest.resetAllMocks();
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
});