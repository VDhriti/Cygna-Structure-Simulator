var score = []; //the scores as per the option
var option_chosen_array = []; // the option id via the getAttribute tag
var dict = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 1,
    6: 2,
    7: 3,
    8: 4,
    9: 1,
    10: 2,
    11: 3,
    12: 4,
}
var focus_log = [];
var final_score = 0

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab)

function showTab(n){
    var x = document.getElementsByClassName("test");
    var y = document.getElementsByClassName("btn-next-2")
    if (x.length != y.length+1) {
        alert("ERROR")
    } else {
        for(i=0; i<x.length; i++){
            if(i!= n){
               x[i].style.display = "none";
            } else {
               x[i].style.display = "block";
            }
        }
        for(i=0; i<y.length; i++){
            if(i!= n){
               y[i].style.display = "none";
            } else {
               y[i].style.display = "block";
            }
        }
    }
}

//focus logger lol since radio buttons wont work
function selectOption(){
    var temp = document.getElementsByClassName("icon-box");
    for(i=0; i<temp.length ;i++){
        if(temp[i] === document.activeElement){{
            focus_log.push(temp[i].getAttribute("id"));
        }}
    }
    console.log(focus_log)    
}

function addCount(n){
    //finding the last focused item and appending it
    option_chosen_array.push(focus_log[focus_log.length-1]);
    score.push(dict[focus_log[focus_log.length-1]]);
    console.log(score)

    currentTab = currentTab + n;
    if (score.length != (currentTab)){
        alert("Either you're cheating or there is a program error :(. In case of the latter you are kindly requested to contact the Cygna Space Society core team to report the issue.");
    }

    if (currentTab == document.getElementsByClassName("test").length-1){
        //finding the total score i.e the sum of array components
        for(i=0;i< (score.length); i++){
        final_score = final_score + score[i];
    }
        function scoreDisplay(){
            console.log("this half works:  ", final_score)
                return(final_score);
            }
        
        document.getElementById("final-thing").innerHTML = scoreDisplay();
    }

    showTab(currentTab)
}


