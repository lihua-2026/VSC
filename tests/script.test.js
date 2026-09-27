// filepath: /Users/lihua/VSC/tests/script.test.js
const { daysUntil } = require('../script');

test('计算两日期相差天数', () => {
    const from = new Date(2026, 7, 30); // 2026-08-30 (months are 0-based)
    const target = new Date(2026, 7, 31); // 2026-08-31
    expect(daysUntil(target, from)).toBe(1);
});
