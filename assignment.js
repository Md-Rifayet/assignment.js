

function kilometerToMeter(convertMeter){
    if(convertMeter < 0){   //condition for error message
        return "Your input is not valid";
    }
    else{   //condition for main part
        var meter = convertMeter * 1000;
        return meter;
    }
}
//kilometerToMeter end


//budgetCalculator start from here
function budgetCalculator(clock,phone,laptop){
    var clockPrice = 150;
    var phonePrice = 200;
    var laptopPrice = 500;
    
    if(clock<0){     //conditions for error message
        return "Your Clock Number is Negative. Please Input a Valid Number!";
    }
    if(phone<0){
        return "Your Phone Number is Negative. Please Input a Valid Number!";
    }
    if(laptop<0){
        return "Your Laptop Number is Negative. Please Input a Valid Number!";
    }
    else{     //main conditions
        if(clock >= 0){
            var clockCost = clock * clockPrice;        
        }
        if(phone >= 0){
            var phoneCost = phone * phonePrice;        
        }
        if(laptop >= 0){
            var laptopCost = laptop * laptopPrice;
        }
    }
    return clockCost+phoneCost+laptopCost;
}
//budgetCalculator end


//hotelCost start from here
function hotelCost(day){
    var totalCost = 1;
    if(day < 0){    //condition for error message
        return "Your Day's Number is Negative. Please input a positive value!";
    }
    else if(day == 0){
        return "Your have no Cost for Payment as Your Day is 0.";
    }
    else{          //main conditions
        if(day <= 10){
            totalCost = day * 100;
        }
        else if(day > 10 && day <= 20){
            var first10Day = 10 * 100;
            var remaining = day - 10;
            var second10Day = remaining * 80;
            totalCost = first10Day + second10Day;
        }
        else{
            var first10Day = 10 * 100;
            var second10Day = 10 * 80;
            var remaining = day - 20;
            var thirdAllDay = remaining * 50;
            totalCost = first10Day + second10Day + thirdAllDay;
        }
        return totalCost;
    }   
}
//hotelCost end


//megaFriend Start from here
function megaFriend(arr){
    var longName = arr[0];
    if(arr == "" ){   //condition for blank name
        return "There is No any Friends Name";
    }
    if( arr == " "*arr.length){    //condition for whitespace
        return "Blank Name";
    }
    else{
        for (var i = 0; i < arr.length; i++){   //main condition for friends name
            var element = arr[i];
            if (element.length > longName.length){
                longName = element;
            }
        }
        return longName;
    }
}
//megaFriend finish
