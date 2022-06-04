let msg = "TWORZENIE STRON INTERNETOWYCH";

msg_arr = msg.split(' ');

var div = document.getElementById("task1");

for(var i = 0; i < msg_arr.length; i++){
    
    var element = document.createElement("span");
    var node = document.createTextNode(msg_arr[i]);

    element.appendChild(node);

    switch(i){
        case 0 :
            element.classList.add("upper-text");
            break;
        case 1:
            element.classList.add("upper-text");
            break;
        default:
            var br = document.createElement("br");
            div.appendChild(br);

            element.classList.add("down-text");
            break;
    }

    div.appendChild(element);
}