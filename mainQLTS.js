/**
 * Demo admissions management
 * 
 * Block1: Inputs
 * Reference Point
 * Point 1, Point 2, Point 3
 * Zone
 * Object
 * 
 * Block2:
 * Declare variables and get value from Form
 * Using function, statement condition if else
 * 
 * 
 * 
 * Block3: Outputs
 * 
 * Point total
 * Result: Pass/Fail
 */

/**
 * Global Variable
 */

const ZONE_A_OBJ_1 = 4.5;
const ZONE_A_OBJ_2 = 3.5;
const ZONE_A_OBJ_3 = 3;

const ZONE_B_OBJ_1 = 3.5;
const ZONE_B_OBJ_2 = 2.5;
const ZONE_B_OBJ_3 = 2;

const ZONE_C_OBJ_1 = 3;
const ZONE_C_OBJ_2 = 2;
const ZONE_C_OBJ_3 = 1.5;


function checkPriority(){
    var zone = document.getElementById("selectZone").value;
    console.log(zone);
    var object = document.getElementById("selectObject").value;
    console.log(object);
    if(zone == 1 && object == 4){
        console.log(ZONE_A_OBJ_1);
        return ZONE_A_OBJ_1;
    }else if(zone == 1 && object == 5){
        console.log(ZONE_A_OBJ_2);
        return ZONE_A_OBJ_2;
    }else if(zone == 1 && object == 6){
        console.log(ZONE_A_OBJ_3);
        return ZONE_A_OBJ_3;
    }else if(zone == 2 && object == 4){
        console.log(ZONE_B_OBJ_1);
        return ZONE_B_OBJ_1;
    }else if(zone == 2 && object == 5){
        console.log(ZONE_B_OBJ_2);
        return ZONE_B_OBJ_2;
    }else if(zone == 2 && object == 6){
        console.log(ZONE_B_OBJ_3);
        return ZONE_B_OBJ_3;
    }else if(zone == 3 && object == 4){
        console.log(ZONE_C_OBJ_1);
        return ZONE_C_OBJ_1;
    }else if(zone == 3 && object == 5){
        console.log(ZONE_C_OBJ_2);
        return ZONE_C_OBJ_2;
    }else if(zone == 3 && object == 6){
        console.log(ZONE_C_OBJ_3);
        return ZONE_C_OBJ_3;
    }  
}

function total3Subject(){
    var point1 = parseFloat(document.getElementById("inputPoint1").value);
    var point2 = parseFloat(document.getElementById("inputPoint2").value);
    var point3 = parseFloat(document.getElementById("inputPoint3").value);
    var totalPoint = 0;
    if (point1 <= 0 || point2 <= 0 || point3 <= 0){

        alert ("You failed because of having one subject by 0 ");
    }else if(point1 > 10 || point2 > 10 || point3 > 10){
        alert ("Invalid") ;
    }else{
        totalPoint = point1 + point2 + point3;
        console.log(totalPoint);   
    }
    return totalPoint;
}
function calculatePoint(){
    var rewardPoint = 0;
    rewardPoint = checkPriority();
    console.log(rewardPoint);
    var totalPointFinal = 0;
    var totalPoint = 0;
    totalPoint = total3Subject();
    totalPointFinal = totalPoint + rewardPoint;
    var RefPoint = parseFloat(document.getElementById("inputRef").value);
    if(totalPointFinal >= RefPoint){
        document.getElementById("txtResult").innerHTML = "You Passed" + " / " + "Total: " + totalPointFinal;
    }else{
        document.getElementById("txtResult").innerHTML = "You Failed" + " / " + "Total: " + totalPointFinal;
    }
}
document.getElementById("btnResult").onclick = calculatePoint;