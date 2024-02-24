const numWords = {
	1: "One",
	2: "Two",
	3: "Three",
	4: "Four",
	5: "Five",
	6: "Six",
	7: "Seven",
	8: "Eight",
	9: "Nine",
	10: "Ten",
	11: "Eleven",
	12: "Twelve",
	13: "Thirteen",
	14: "Fourteen",
	15: "Fifteen",
	16: "Sixteen",
	17: "Seventeen",
	18: "Eighteen",
	19: "Nineteen",
	20: "Twenty",
	30: "Thirty",
	40: "Forty",
	50: "Fifty",
	60: "Sixty",
	70: "Seventy",
	80: "Eighty",
	90: "Ninety",
};

//grabbing DOM elements
const input = document.querySelector(".input");
const numWord = document.querySelector(".num-word");

//event listeners assignments
input.addEventListener("keyup", processIntToWords);

function processIntToWords(event) {
	event.target.value = event.target.value.replace(/[^\d]/g,"")
  const num = event.target.value
	numWord.innerHTML = convertNumToWords(num);
}
function getNumbersOnly(val) {
	return val
}

function convertNumToWords(num) {
	const strNum = String(num);

	let l = 0,
		j = 0,
		r = strNum.length - 1;
	const ans = [];
	const placeValue = [1, 10, 100];
	const numTerms = ["Thousand", "Million", "Billion"];

	if (num === 0) return "Zero";

	while (r >= 0) {
		l = l % 3;
		const numToMap = Number(strNum[r]) * placeValue[l];

		if (placeValue[l] === 1 && r < strNum.length - 1) {
			if (strNum[r] != 0 || strNum[r - 1] != 0 || strNum[r - 2] != 0) {
				ans.unshift(numTerms[j]);
			}
			j++;
		}

		if (strNum[r] == 0) {
			l++;
			r--;
			continue;
		}

		const mappedTen = numWords[strNum[r - 1] + strNum[r]];

		if (placeValue[l] === 1 && mappedTen) {
			ans.unshift(mappedTen);
			l += 2;
			r -= 2;
			continue;
		}

		if (placeValue[l] === 100) {
			ans.unshift(numWords[strNum[r]], "Hundred");
		} else {
			ans.unshift(numWords[numToMap]);
		}

		l++;
		r--;
	}
	return ans.join(" ");
}
