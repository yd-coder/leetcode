export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	acRate: string;
	videoId?: string;
};

export const problems: Problem[] = [
	{
		id: "two-sum",
		title: "两数之和",
		difficulty: "Easy",
		acRate: "52.9%",
		videoId: "8-k1C6ehKuw",
	},
	{
		id: "add-two-numbers",
		title: "两数相加",
		difficulty: "Medium",
		acRate: "42.4%",
		videoId: "",
	},
	{
		id: "longest-substring-without-repeating-characters",
		title: "无重复字符的最长子串",
		difficulty: "Medium",
		acRate: "39.1%",
		videoId: "",
	},
	{
		id: "median-of-two-sorted-arrays",
		title: "寻找两个正序数组的中位数",
		difficulty: "Hard",
		acRate: "41.5%",
		videoId: "xty7fr-k0TU",
	},
	{
		id: "longest-palindromic-substring",
		title: "最长回文字串",
		difficulty: "Medium",
		acRate: "37.6%",
		videoId: "ZfFl4torNg4",
	},
	{
		id: "regular-expression-matching",
		title: "正则表达式匹配",
		difficulty: "Hard",
		acRate: "30.8%",
		videoId: "",
	},
	{
		id: "container-with-most-water",
		title: "盛最多水的容器",
		difficulty: "Medium",
		acRate: "60.3%",
		videoId: "",
	},
	{
		id: "3sum",
		title: "三数之和",
		difficulty: "Medium",
		acRate: "37.0%",
		videoId: "4qYTqOiRMoM",
	},
	{
		id: "letter-combinations-of-a-phone-number",
		title: "电话号码的字母组合",
		difficulty: "Medium",
		acRate: "58.1%",
		videoId: "",
	},
	{
		id: "remove-nth-node-from-end-of-list",
		title: "删除链表的倒数第 N 个结点",
		difficulty: "Medium",
		acRate: "45.6%",
		videoId: "",
	},
];
