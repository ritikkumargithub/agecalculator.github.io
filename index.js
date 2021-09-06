const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function calculateAge(){
    let todayDate = new Date();
    let inputDate = new Date(document.getElementById("input_date").value);
    let totalMonth, totalDays, totalYears;
    
    let birthdate = inputDate.getDate();
    let birthMonth = inputDate.getMonth() +1;
    let birthYear = inputDate.getFullYear();

    //current date
    let currentYear = todayDate.getFullYear();
    let currentMonth = todayDate.getMonth() +1;
    let currentDate = todayDate.getDate();
    chackLeapYear(currentYear);

    //apply validation on date
    if(birthYear > currentYear || (birthMonth > currentMonth && birthYear == currentYear) || (birthdate > currentDate && birthMonth == currentMonth && birthYear == currentYear)){
        alert("Not Yet Born");
        return displayDOB("-","-","-");
    }
    totalYears = currentYear - birthYear;
    if(currentMonth >= birthMonth){
        totalMonth = currentMonth - birthMonth;
    }else{
        totalYears--;
        totalMonth = 12 + currentMonth - birthMonth;
    }

    if(currentDate >= birthdate){
        totalDays = currentDate - birthdate;
    }else{
        totalMonth--;
        let days = months[currentMonth -2];
        totalDays = days + currentDate - birthdate;

        if(totalMonth < 0){
            totalMonth = 11;
            totalYears--;
        }
    }
    displayDOB(totalDays,totalMonth,totalYears);
}

function chackLeapYear(year){
    if(year%4==0 || (year%100==0 && year%400==0)){
         months[1] = 29;
    }else{
        months[1] = 28;
    }
}

function displayDOB(bDate,bMonth,bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}