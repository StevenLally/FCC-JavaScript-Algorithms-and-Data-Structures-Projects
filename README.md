# FCC-JavaScript-Algorithms-and-Data-Structures-Projects
FCC JavaScript Algorithms and Data Structures Projects

1. Roman-Numeral-Converter (First try 6-29/2018, want to come back and try this again later): Convert the given number into a roman numeral.  Converts numbers up to and including 3999.  Ex. convertToRoman(2) should return "II". ---- convertToRoman(99) should return "XCIX" ---- convertToRoman(3999) should return "MMMCMXCIX"

2. Cash-Register: 
  "Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
  cid is a 2D array listing available currency.
  The checkCashRegister() function should always return an object with a status key and a change key.
  Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
  Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
  Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
