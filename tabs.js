
var score = []; //the scores as per the option
var option_chosen_array = []; // the option id via the getAttribute tag
var dict = {
    1: 10,
    2: 5,
    3: 8,
    4: 0,

    5: 0,
    6: 4,
    7: 10,
    8: 6,

    9: 2,
    10: 0,
    11: 10,
    12: 6,

    13: 0,
    14: 10,
    15: 4,
    16: 8,

    17: 4,
    18: 6,
    19: 0,
    20: 10,

    21: 3,
    22: 0,
    23: 1,
    24: 10,

    25: 4,
    26: 0,
    27: 10,
    28: 7,

}
var focus_log = [];
var final_score = 0;

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab)

function showTab(n){
    var x = document.getElementsByClassName("test");
    var y = document.getElementsByClassName("btn-next-2")
    var z = document.getElementsByClassName("imgss")
        for (i = 0; i < z.length; i++) {
            z[i].style.display = "none";
        }
        var length = option_chosen_array.length;
        if (length == 0){
            z[0].style.display = "block";
        } 
        
        else if (length == 1){
            z[1].style.display = "block";
        }         
        else if (length == 2 || length == 3 || (length == 4 && option_chosen_array[3] == "16")) {
            if (option_chosen_array[1] == "5"){
                z[2].style.display = "block";
            } else if (option_chosen_array[1] == "6"){
                z[3].style.display = "block";
            } else if (option_chosen_array[1] == "7"){
                z[4].style.display = "block";
            } else if (option_chosen_array[1] == "8"){
                z[5].style.display = "block";
            }
        }

        else if ((length == 4 && option_chosen_array[3] != "16") || length == 5 || length == 6) {
            if (option_chosen_array[1] == "5"){
                if (option_chosen_array[3] == "13"){
                    z[6].style.display = "block";
                } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                    z[7].style.display = "block";
                }
            } else if (option_chosen_array[1] == "6"){
                if (option_chosen_array[3] == "13"){
                    z[8].style.display = "block";
                } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                    z[9].style.display = "block";
                }
            } else if (option_chosen_array[1] == "7"){
                if (option_chosen_array[3] == "13"){
                    z[10].style.display = "block";
                } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                    z[11].style.display = "block";
                }
            } else if (option_chosen_array[1] == "8"){
                if (option_chosen_array[3] == "13"){
                    z[12].style.display = "block";
                } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                    z[13].style.display = "block";
                }
            }
        }

        else if (length == 7) {
            if (option_chosen_array[1] == "5"){
                if (option_chosen_array[3] == "13"){
                    if (option_chosen_array[1] == "25"){
                        z[14].style.display = "block";
                    } else if (option_chosen_array[1] == "26"){
                        z[15].style.display = "block";
                    } else if (option_chosen_array[1] == "27"){
                        z[16].style.display = "block";
                    } else if (option_chosen_array[1] == "28"){
                        z[17].style.display = "block";
                    }
                } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                    if (option_chosen_array[1] == "25"){
                        z[18].style.display = "block";
                    } else if (option_chosen_array[1] == "26"){
                        z[19].style.display = "block";
                    } else if (option_chosen_array[1] == "27"){
                        z[20].style.display = "block";
                    } else if (option_chosen_array[1] == "28"){
                        z[21].style.display = "block";
                    }
                }
            } else if (option_chosen_array[1] == "6"){
                if (option_chosen_array[3] == "13"){
                    if (option_chosen_array[1] == "25"){
                        z[22].style.display = "block";
                    } else if (option_chosen_array[1] == "26"){
                        z[23].style.display = "block";
                    } else if (option_chosen_array[1] == "27"){
                        z[24].style.display = "block";
                    } else if (option_chosen_array[1] == "28"){
                        z[25].style.display = "block";
                    }
                } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                    if (option_chosen_array[1] == "25"){
                        z[26].style.display = "block";
                    } else if (option_chosen_array[1] == "26"){
                        z[27].style.display = "block";
                    } else if (option_chosen_array[1] == "27"){
                        z[28].style.display = "block";
                    } else if (option_chosen_array[1] == "28"){
                        z[29].style.display = "block";
                    }
                }
            } else if (option_chosen_array[1] == "7"){
                if (option_chosen_array[3] == "13"){
                    if (option_chosen_array[1] == "25"){
                        z[30].style.display = "block";
                    } else if (option_chosen_array[1] == "26"){
                        z[31].style.display = "block";
                    } else if (option_chosen_array[1] == "27"){
                        z[32].style.display = "block";
                    } else if (option_chosen_array[1] == "28"){
                        z[33].style.display = "block";
                    }
                } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                    if (option_chosen_array[1] == "25"){
                        z[34].style.display = "block";
                    } else if (option_chosen_array[1] == "26"){
                        z[35].style.display = "block";
                    } else if (option_chosen_array[1] == "27"){
                        z[36].style.display = "block";
                    } else if (option_chosen_array[1] == "28"){
                        z[37].style.display = "block";
                    }
                }
            } else if (option_chosen_array[1] == "8"){
                if (option_chosen_array[3] == "13"){
                    if (option_chosen_array[1] == "25"){
                        z[38].style.display = "block";
                    } else if (option_chosen_array[1] == "26"){
                        z[39].style.display = "block";
                    } else if (option_chosen_array[1] == "27"){
                        z[40].style.display = "block";
                    } else if (option_chosen_array[1] == "28"){
                        z[41].style.display = "block";
                    }
                } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                    if (option_chosen_array[1] == "25"){
                        z[42].style.display = "block";
                    } else if (option_chosen_array[1] == "26"){
                        z[43].style.display = "block";
                    } else if (option_chosen_array[1] == "27"){
                        z[44].style.display = "block";
                    } else if (option_chosen_array[1] == "28"){
                        z[45].style.display = "block";
                    }
                }
            }
        }
       


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

//focus logger lol since radio buttons wont work
function selectOption(){
    var temp = document.getElementsByClassName("icon-box");
    for(i=0; i<temp.length ;i++){
        if(temp[i] === document.activeElement){{
            focus_log.push(temp[i].getAttribute("id"));
        }}
    }
    // console.log(focus_log)    
}


var name_stored = "";
var email = "";

function hide(n) {
    name_stored = document.getElementById("fname").value;
    email = document.getElementById("fmail").value;
    currentTab = currentTab + n;
    showTab(currentTab)
}


function addCount(n){
    console.log(score)
    if (currentTab == document.getElementsByClassName("test").length-2){
        name_stored = document.getElementById("fname").value;
        email = document.getElementById("fmail").value;

        for(i=0;i< (score.length); i++){
            final_score = final_score + score[i];
        }

        final_score = Math.round((final_score*10)/7);
        final_final_score = final_score.toString() + "%";
        
        currentTab = currentTab + n;
        showTab(currentTab)
    } else {
        if (focus_log.length > 0) {
            //finding the last focused item and appending it
            option_chosen_array.push(focus_log[focus_log.length-1]);
            score.push(dict[focus_log[focus_log.length-1]]);
            // console.log(score)
    
            currentTab = currentTab + n;
            if (score.length != (currentTab)){
                alert("Either you're cheating or there is a program error :(. In case of the latter you are kindly requested to contact the Cygna Space Society core team to report the issue.");
                currentTab = 0;
                focus_log = [];
                option_chosen_array = [];
                score = [];
                final_score = 0;
            }
    
            if (currentTab == document.getElementsByClassName("test").length-1) {
                //finding the total score i.e the sum of array components
                
        
                function scoreDisplay(){
                    // console.log("this half works:  ", final_score)
                        return(final_final_score);
                    }
            
                document.getElementById("final-thing").innerHTML = scoreDisplay();
                document.getElementById("secret").value = final_final_score;
                document.getElementById("name-hidden").value = name_stored;
                document.getElementById("email-hidden").value = email;
            } else {
                focus_log = [];
            }
    
            showTab(currentTab)
    
        } else {
            alert("There is no option selected.")
        }
    }
    
}



function clear() {
    score = []; //the scores as per the option
    option_chosen_array = []; // the option id via the getAttribute tag
    focus_log = [];
    final_score = 0;
    final_final_score = 0;
    currentTab = 0;
}