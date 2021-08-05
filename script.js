window.onload = function(){
    console.log("portfolio loaded");
}
function message_sent(){
    
    // alert("Message Sent Successfully.");
    var input1 = document.getElementById('name');
    var input2 = document.getElementById('emailaddress');
    var input3 = document.getElementById('text');

    let doc = document.getElementById('messagetouser');
    if(input1.value!=='' && input2.value!=='' && input3.value!==''){
        doc.innerHTML = "Message Sent Successfully !";
    }
    else{
        doc.innerHTML = '*Fill all the fields.';
    }
    if(input1.value!=='' && input2.value!=='' && input3.value!==''){
        input1.value = '';
        input2.value = '';
        input3.value = '';
    }
    
    

}