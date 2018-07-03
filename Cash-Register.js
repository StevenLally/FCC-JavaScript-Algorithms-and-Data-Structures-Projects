function checkCashRegister(price, cash, cid) {
  let final = {};   // object to return status and change
  let change = [];    // array to store change returned to customer
  let totalDue = cash - price;  // total change amount due
  let trackingDue = totalDue;   // second due variable to keep track of how much is left
  trackingDue = trackingDue.toFixed(2)  // fix to 2 decimal places to eliminate precision errors

  // object to store values of each currency type
  let currencyObj = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }

  // find out total amount in register
  let inRegister = 0;
  for (let i = 0; i < cid.length; i++){
    inRegister += cid[i][1];
  }

  // conditionals for how much is in register vs. how much is due to customer
  if (totalDue > inRegister){
    final.status = "INSUFFICIENT_FUNDS";
    final.change = [];
  }
  else if(totalDue == inRegister){
    final.status = "CLOSED";
    final.change = cid;
  }
  else if (totalDue < inRegister){
    let totalChange = 0;  // keep track of total change to compare to amount due later
    
    // go through register from highest value change to lowest
    for (let j = 8; j >= 0; j--){
      let changeType = cid[j][0];   // 'PENNY', 'NICKEL', etc. 
      let typeAmt = currencyObj[changeType];  // how much change type is worth
      let changeTypeTotal = 0;  // total change for this type (penny, nickel, etc.)

      // get as much of highest amount of change possible
      while (trackingDue >= typeAmt && cid[j][1] > 0){
        changeTypeTotal += typeAmt;
        totalChange += typeAmt;
        trackingDue -= typeAmt;
        trackingDue = trackingDue.toFixed(2);  // fix to 2 decimal places to eliminate precision errors
        cid[j][1] -= typeAmt;
      }

      // add this change to start of our change array if there was any of this type
      if (changeTypeTotal > 0) {
        change.push([changeType, changeTypeTotal]);
      }
    }

    totalChange = totalChange.toFixed(2);   // clear precision error

    if (totalChange == totalDue){
      final.status = "OPEN";
      final.change = change;
    }
    else{
      final.status = "INSUFFICIENT_FUNDS";
      final.change = [];
    }
  }

  return final;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
