/**
 * Demo tinhTienCable
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
 * Amount 
 * Display on UI
 */

/**
 * Global Variable
 */
const INVOICE_PERSONAL = 4.5;
const SERVICER_PERSONAL = 20.5;
const HIGHCHANNEL_PERSONAL = 7.5;

const INVOICE_ENTERPRISE = 15.0;
const SERVICER_ENTERPRISE = 75.0;
const CONNECTION_ENTERPRISE = 5.0;
const HIGHCHANNEL_ENTERPRISE = 50.0;

//
function eventSelect(){
    var customer = document.querySelector("#selectCustomer").value;
    console.log(customer);
    if (customer == 2){
        document.querySelector("#inputConnection").style.display = "";
    }else{
        document.querySelector("#inputConnection").style.display = "none";
    }
}    


function invoice(){
    var select = document.querySelector("#selectCustomer").value;
    if(select == 1){
        return INVOICE_PERSONAL;
    
    }else if(select == 2){
        return INVOICE_ENTERPRISE;
    }
}

function channel(){
    var select = document.querySelector("#selectCustomer").value;
    var channel = Number(document.querySelector("#inputChannel").value);
    var channelSub = 0;
    if(select == 1){
        channelSub = HIGHCHANNEL_PERSONAL*channel;
        console.log(channelSub);
    }else if (select == 2){
        channelSub = HIGHCHANNEL_ENTERPRISE*channel;
        console.log(channelSub);
    }
    return channelSub;
}

function CalcServicebyConnection(){
    var select = document.querySelector("#selectCustomer").value;
    var connection = document.querySelector("#inputConnection").value;   
    console.log(connection);
    var serviceFee = 0;
    if(select == 1){
        serviceFee = SERVICER_PERSONAL;
        console.log(serviceFee);
    }else if(select == 2 && connection <= 10 ){
        serviceFee = SERVICER_ENTERPRISE;
        console.log(serviceFee);
    }else if(select ==2 && connection > 10){
        serviceFee = SERVICER_ENTERPRISE + ((connection - 10)*CONNECTION_ENTERPRISE);
        console.log(serviceFee);
    }else{}
        return serviceFee;
}
function Calc(){
    var code = document.querySelector("#inputCode").value;
    invoiceFee = invoice();
    serviceFee = CalcServicebyConnection();
    channelSub = channel();
    totalFee = invoiceFee + serviceFee + channelSub;
    document.getElementById("txtResult").innerHTML = "Customer's code: " + code + "<br>" + "Amout: " + totalFee + "$";
}
document.querySelector("#btnResult").onclick = Calc;
