// functionタイプだと自身のファイル内の参照を保持しているので
// 外からの注入のような扱いにしないとmock化できない
import * as self from './02.sample';

export function funcA(): number {
    return self.funcB()
}
export function funcB(): number {
    return self.funcC()
}
export function funcC(): number {
    return 100;
}