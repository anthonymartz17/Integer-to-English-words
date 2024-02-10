import numWords from './data-word-num.js';

//grabbing DOM elements
const input = document.querySelector(".input");
const numWord = document.querySelector(".num-word");

//event listeners assignments
input.addEventListener("keyup", processIntToWords);



function processIntToWords(event) {
  console.log(numWords,'what s goin on')
	const num = event.target.value;
	numWord.innerHTML = convertNumToWords(num);
}


function convertNumToWords(num) {
  let l = 0, j = 0, r = strNum.length - 1;
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
