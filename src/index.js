module.exports = function toReadable (number) {
    number = String(number);
    arr = [];
    if (number.length === 3) {
       switch (Number(number[0])) {
           case 1:
           arr[0] = "one hundred";
           break;
           case 2:
           arr[0] = "two hundred";
           break;
           case 3:
           arr[0] = "three hundred";
           break;
           case 4:
           arr[0] = "four hundred";
           break;
           case 5:
           arr[0] = "five hundred";
           break;
           case 6:
           arr[0] = "six hundred";
           break;
           case 7:
           arr[0] = "seven hundred";
           break;
           case 8:
           arr[0] = "eight hundred";
           break;
           case 9:
           arr[0] = "nine hundred";
           break;
       }
       if (Number(number[1]) > 1) {
       switch (Number(number[1])) {
           case 2:
           arr[1] = "twenty";
           break;
           case 3:
           arr[1] = "thirty";
           break;
           case 4:
           arr[1] = "forty";
           break;
           case 5:
           arr[1] = "fifty";
           break;
           case 6:
           arr[1] = "sixty";
           break;
           case 7:
           arr[1] = "seventy";
           break;
           case 8:
           arr[1] = "eighty";
           break;
           case 9:
           arr[1] = "ninety";
           break;
       }
          switch (Number(number[2])) {
           case 1:
           arr[2] = "one";
           break;
           case 2:
           arr[2] = "two";
           break;
           case 3:
           arr[2] = "three";
           break;
           case 4:
           arr[2] = "four";
           break;
           case 5:
           arr[2] = "five";
           break;
           case 6:
           arr[2] = "six";
           break;
           case 7:
           arr[2] = "seven";
           break;
           case 8:
           arr[2] = "eight";
           break;
           case 9:
           arr[2] = "nine";
           break;
       }
    } else {
        let str = Number(number[0]+"00");
        let n = Number(number) - str;
         switch (n) {
           case 1:
           arr[1] = "one";
           break;
           case 2:
           arr[1] = "two";
           break;
           case 3:
           arr[1] = "three";
           break;
           case 4:
           arr[1] = "four";
           break;
           case 5:
           arr[1] = "five";
           break;
           case 6:
           arr[1] = "six";
           break;
           case 7:
           arr[1] = "seven";
           break;
           case 8:
           arr[1] = "eight";
           break;
           case 9:
           arr[1] = "nine";
           break;
           case 10:
           arr[1] = "ten"
           break;
           case 11:
           arr[1] = "eleven";
           break;
           case 12:
           arr[1] = "twelve";
           break;
           case 13:
           arr[1] = "thirteen";
           break;
           case 14:
           arr[1] = "fourteen";
           break;
           case 15:
           arr[1] = "fifteen";
           break;
           case 16:
           arr[1] = "sixteen";
           break;
           case 17:
           arr[1] = "seventeen";
           break;
           case 18:
           arr[1] = "eighteen";
           break;
           case 19:
           arr[1] = "nineteen";
           break;
       }
    }
    
    } else if (number.length === 2) {
         if (Number(number[0]) > 1) {
       switch (Number(number[0])) {
           case 2:
           arr[0] = "twenty";
           break;
           case 3:
           arr[0] = "thirty";
           break;
           case 4:
           arr[0] = "forty";
           break;
           case 5:
           arr[0] = "fifty";
           break;
           case 6:
           arr[0] = "sixty";
           break;
           case 7:
           arr[0] = "seventy";
           break;
           case 8:
           arr[0] = "eighty";
           break;
           case 9:
           arr[0] = "ninety";
           break;
       }
          switch (Number(number[1])) {
           case 1:
           arr[1] = "one";
           break;
           case 2:
           arr[1] = "two";
           break;
           case 3:
           arr[1] = "three";
           break;
           case 4:
           arr[1] = "four";
           break;
           case 5:
           arr[1] = "five";
           break;
           case 6:
           arr[1] = "six";
           break;
           case 7:
           arr[1] = "seven";
           break;
           case 8:
           arr[1] = "eight";
           break;
           case 9:
           arr[1] = "nine";
           break;
       }
    } else {
         switch(Number(number)) {
           case 1:
           arr[0] = "one";
           break;
           case 2:
           arr[0] = "two";
           break;
           case 3:
           arr[0] = "three";
           break;
           case 4:
           arr[0] = "four";
           break;
           case 5:
           arr[0] = "five";
           break;
           case 6:
           arr[0] = "six";
           break;
           case 7:
           arr[0] = "seven";
           break;
           case 8:
           arr[0] = "eight";
           break;
           case 9:
           arr[0] = "nine";
           break;
           case 10:
           arr[0] = "ten"
           break;
           case 11:
           arr[0] = "eleven";
           break;
           case 12:
           arr[0] = "twelve";
           break;
           case 13:
           arr[0] = "thirteen";
           break;
           case 14:
           arr[0] = "fourteen";
           break;
           case 15:
           arr[0] = "fifteen";
           break;
           case 16:
           arr[0] = "sixteen";
           break;
           case 17:
           arr[0] = "seventeen";
           break;
           case 18:
           arr[0] = "eighteen";
           break;
           case 19:
           arr[0] = "nineteen";
           break;
       }
    }
    } else if (number.length === 1) {
        switch(Number(number)) {
           case 0:
           arr[0] = "zero";
           break;
           case 1:
           arr[0] = "one";
           break;
           case 2:
           arr[0] = "two";
           break;
           case 3:
           arr[0] = "three";
           break;
           case 4:
           arr[0] = "four";
           break;
           case 5:
           arr[0] = "five";
           break;
           case 6:
           arr[0] = "six";
           break;
           case 7:
           arr[0] = "seven";
           break;
           case 8:
           arr[0] = "eight";
           break;
           case 9:
           arr[0] = "nine";
           break;
        }
    }
    return arr.join(" ");
}
