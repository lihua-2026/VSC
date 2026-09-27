let 今天 = new Date();

// 修复大小写错误并封装成可测试的函数
今天.setHours(0,0,0,0);

let 表演日期 = new Date(2026, 7, 31);

function daysUntil(date, from = new Date()) {
	const start = new Date(from);
	start.setHours(0,0,0,0);
	const target = new Date(date);
	target.setHours(0,0,0,0);
	const diff = (target - start) / (1000 * 60 * 60 * 24);
	return Math.ceil(diff);
}

let 相差天数 = daysUntil(表演日期, 今天);

console.log(相差天数 + ' 天');

module.exports = { daysUntil };
