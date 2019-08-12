// number 2
var x=5; 

// number 3
function half (x) {
    return (x / 2);
}

// number 4

// number 5
function seven () {
    x = 7;
    return (x);
}

// number 6
function calculation (a, b, c) {
    return ((a + b) / c);
}

// number 7, is this file itself.

// number 8
function isEven(value) {
    return (value%2==0);
}

// Lab Exercise 5: Basic Syntax 1

// number 1
function parity(num) {
    if (num%2 == 0) {
      return("even");
    } else {
      return("odd");
    }
  }
  
  // number 2
  function max(num1, num2, num3) {
    if ((num1 > num2) && (num1 > num3)) {
      return(num1);
    } else if (num2 > num3) {
      return(num2);
    } else {
      return(num3);
    }
  }
  
// number 3
  function flipCoin() {
    if (Math.random() < 0.5) {
      return("Heads");
    } else {
      return("Tails");
    }
  }

  function numHeads(numFlips) {
    var numHeads = 0;
    for(var i=0; i<numFlips; i++) {
      if (flipCoin() == "Heads") {
        numHeads++;
      }
    }
    return(numHeads);
  }
  
  function headsRatio(numFlips) {
    return(numHeads(numFlips)/numFlips);
  }
  
  function padChars(n, filler) {
    var result = "";
    for(var i=0; i<n; i++) {
      result = result + filler;
    }
    return(result);
  }
  
  function numRollsToGetSix() {
    var rolls = 1;
    while(Math.random() < 5/6) {
      rolls++;
    }
    return(rolls);
  }
  
  function randomMessage() {
    if (Math.random() < 0.5) {
      return("Have a GOOD day!");
    } else {
      return("Have a BAD day!");
    }
  }
  
  function outputMessage() {
    document.write("<h1 style='font-size: 600%'>" + randomMessage() + "</h1>");
  }
  
  // additional exercise on board
  // declare a function that excepts 3 parameters/arguments which represent a persons bday and return their age
  // in years, days, months, hours minutes, seconds

  function showAge(dobYear, dobMonth, dobDay) {
	var bthDate, curDate, days;
	var ageYears, ageMonths, ageDays;
	bthDate = new Date(dobYear, dobMonth-1, dobDay);
	curDate = new Date();
	if (bthDate>curDate) return;
	days = Math.floor((curDate-bthDate)/(1000*60*60*24));
	ageYears = Math.floor(days/365);
	ageMonths = Math.floor((days%365)/31);
	ageDays = days - (ageYears*365) - (ageMonths*31);
	if (ageYears>0) {
		document.write(ageYears+" year");
		if (ageYears>1) document.write("s"); 
		if ((ageMonths>0)||(ageDays>0)) document.write(", ");
	}
	if (ageMonths>0) {
		document.write(ageMonths+" month");
		if (ageMonths>1) document.write("s");
		if (ageDays>0) document.write(", ");
	}
	if (ageDays>0) {
		document.write(ageDays+" day");
		if (ageDays>1) document.write("s");
	}
}

//calculate the area of a triangle

// print fibonacci into the console.log up to position "n"
// hint: append an array