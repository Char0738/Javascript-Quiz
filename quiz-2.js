`Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12`
function quarterCheck(monthNum) {
    if (monthNum <= 3){
        return 1;
    } else if (monthNum <= 6) {
      return 2;
    } else if (monthNum <= 9) {
      return 3;
    } else if (monthNum <= 12) {
      return 4;
    } else {
       throw new Error("Invalid month number");
    }
  }

  console.log(quarterCheck(9));