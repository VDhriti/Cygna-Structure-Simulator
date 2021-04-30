
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
    8: 7,

    9: 0,
    10: 10,
    11: 4,
    12: 8,

    13: 4,
    14: 10,
    15: 0,
    16: 2,

    17: 4,
    18: 6,
    19: 0,
    20: 10,

    21: 4,
    22: 0,
    23: 10,
    24: 7,

    25: 1,
    26: 2,
    26: 3,
    28: 4
}
var focus_log = [];
var final_score = 0

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab)

function showTab(n){
    var x = document.getElementsByClassName("test");
    var y = document.getElementsByClassName("btn-next-2")
    var z = document.getElementsByClassName("imgss")
    if (x.length != y.length+1) {
        alert("ERROR")
    } else {
        for (i = 0; i < z.length;) {
            z[i].style.display = "none";
        }
        var length = option_chosen_array.length;
        if (length == 0){
            z[0].style.display = "block";
        } 
        
        else if (length == 1){
            z[1].style.display = "block";
        } 
        
        else if (length == 2) {
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

        else if (length == 3 || (length == 4 && option_chosen_array[3] == "16")) {
            if (option_chosen_array[1] == "5"){
                if (option_chosen_array[2] == "9"){
                    z[6].style.display = "block";
                } else if (option_chosen_array[2] == "10"){
                    z[7].style.display = "block";
                } else if (option_chosen_array[2] == "11"){
                    z[8].style.display = "block";
                } else if (option_chosen_array[2] == "12"){
                    z[9].style.display = "block";
                }
            } 
            
            else if (option_chosen_array[1] == "6"){
                if (option_chosen_array[2] == "9"){
                    z[10].style.display = "block";
                } else if (option_chosen_array[2] == "10"){
                    z[11].style.display = "block";
                } else if (option_chosen_array[2] == "11"){
                    z[12].style.display = "block";
                } else if (option_chosen_array[2] == "12"){
                    z[13].style.display = "block";
                }
            } 
            
            else if (option_chosen_array[1] == "7"){
                if (option_chosen_array[2] == "9"){
                    z[14].style.display = "block";
                } else if (option_chosen_array[2] == "10"){
                    z[15].style.display = "block";
                } else if (option_chosen_array[2] == "11"){
                    z[16].style.display = "block";
                } else if (option_chosen_array[2] == "12"){
                    z[17].style.display = "block";
                }
            } 
            
            else if (option_chosen_array[1] == "8"){
                if (option_chosen_array[2] == "9"){
                    z[18].style.display = "block";
                } else if (option_chosen_array[2] == "10"){
                    z[19].style.display = "block";
                } else if (option_chosen_array[2] == "11"){
                    z[20].style.display = "block";
                } else if (option_chosen_array[2] == "12"){
                    z[21].style.display = "block";
                }
            }
        }

        else if ((length == 4 && option_chosen_array[3] != "16") || length == 5) {
            if (option_chosen_array[1] == "5"){
                if (option_chosen_array[2] == "9"){
                    if (option_chosen_array[3] == "13"){
                        z[22].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[23].style.display = "block";
                    }
                } 
                
                else if (option_chosen_array[2] == "10"){
                    if (option_chosen_array[3] == "13"){
                        z[24].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[25].style.display = "block";
                    }
                } 
                
                else if (option_chosen_array[2] == "11"){
                    if (option_chosen_array[3] == "13"){
                        z[26].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[27].style.display = "block";
                    }
                } 
                
                else if (option_chosen_array[2] == "12"){
                    if (option_chosen_array[3] == "13"){
                        z[28].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[29].style.display = "block";
                    }
                }
            } 
            
            else if (option_chosen_array[1] == "6"){
                if (option_chosen_array[2] == "9"){
                    if (option_chosen_array[3] == "13"){
                        z[30].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[31].style.display = "block";
                    }
                } 
                
                else if (option_chosen_array[2] == "10"){
                    if (option_chosen_array[3] == "13"){
                        z[32].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[33].style.display = "block";
                    }
                } 
                
                else if (option_chosen_array[2] == "11"){
                    if (option_chosen_array[3] == "13"){
                        z[34].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[35].style.display = "block";
                    }
                } 
                
                else if (option_chosen_array[2] == "12"){
                    if (option_chosen_array[3] == "13"){
                        z[36].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[37].style.display = "block";
                    }
                }
            } 
            
            else if (option_chosen_array[1] == "7"){
                if (option_chosen_array[2] == "9"){
                    if (option_chosen_array[3] == "13"){
                        z[38].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[39].style.display = "block";
                    }
                } 
                
                else if (option_chosen_array[2] == "10"){
                    if (option_chosen_array[3] == "13"){
                        z[40].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[41].style.display = "block";
                    }
                } 
                
                else if (option_chosen_array[2] == "11"){
                    if (option_chosen_array[3] == "13"){
                        z[42].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[43].style.display = "block";
                    }
                } 
                
                else if (option_chosen_array[2] == "12"){
                    if (option_chosen_array[3] == "13"){
                        z[44].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[45].style.display = "block";
                    }
                }
            } 
            
            else if (option_chosen_array[1] == "8"){
                if (option_chosen_array[2] == "9"){
                    if (option_chosen_array[3] == "13"){
                        z[46].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[47].style.display = "block";
                    }
                } 
                
                else if (option_chosen_array[2] == "10"){
                    if (option_chosen_array[3] == "13"){
                        z[48].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[49].style.display = "block";
                    }
                } 
                
                else if (option_chosen_array[2] == "11"){
                    if (option_chosen_array[3] == "13"){
                        z[50].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[51].style.display = "block";
                    }
                } 
                
                else if (option_chosen_array[2] == "12"){
                    if (option_chosen_array[3] == "13"){
                        z[52].style.display = "block";
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        z[53].style.display = "block";
                    }
                }
            }
        }

        else if (length == 6) {
            if (option_chosen_array[1] == "5"){
                if (option_chosen_array[2] == "9"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[54].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[55].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[56].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[57].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[58].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[59].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[60].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[61].style.display = "block";
                        }
                    }
                } 
                
                else if (option_chosen_array[2] == "10"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[62].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[63].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[64].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[65].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[66].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[67].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[68].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[69].style.display = "block";
                        }
                    }
                } 
                
                else if (option_chosen_array[2] == "11"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[70].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[71].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[72].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[73].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[74].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[75].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[76].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[77].style.display = "block";
                        }
                    }
                } 
                
                else if (option_chosen_array[2] == "12"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[78].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[79].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[80].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[81].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[82].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[83].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[84].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[85].style.display = "block";
                        }
                    }
                }
            } 
            
            else if (option_chosen_array[1] == "6"){
                if (option_chosen_array[2] == "9"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[86].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[87].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[88].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[89].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[90].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[91].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[92].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[93].style.display = "block";
                        }
                    }
                } 
                
                else if (option_chosen_array[2] == "10"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[94].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[95].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[96].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[97].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[98].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[99].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[100].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[101].style.display = "block";
                        }
                    }
                } 
                
                else if (option_chosen_array[2] == "11"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[102].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[103].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[104].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[105].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[106].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[107].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[108].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[109].style.display = "block";
                        }
                    }
                } 
                
                else if (option_chosen_array[2] == "12"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[110].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[111].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[112].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[113].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[114].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[115].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[116].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[117].style.display = "block";
                        }
                    }
                }
            } 
            
            else if (option_chosen_array[1] == "7"){
                if (option_chosen_array[2] == "9"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[118].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[119].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[120].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[121].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[122].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[123].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[124].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[125].style.display = "block";
                        }
                    }
                } 
                
                else if (option_chosen_array[2] == "10"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[126].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[127].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[128].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[129].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[130].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[131].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[132].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[133].style.display = "block";
                        }
                    }
                } 
                
                else if (option_chosen_array[2] == "11"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[134].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[135].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[136].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[137].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[138].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[139].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[140].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[141].style.display = "block";
                        }
                    }
                } 
                
                else if (option_chosen_array[2] == "12"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[142].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[143].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[144].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[145].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[146].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[147].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[148].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[149].style.display = "block";
                        }
                    }
                }
            } 
            
            else if (option_chosen_array[1] == "8"){
                if (option_chosen_array[2] == "9"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[150].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[151].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[152].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[153].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[154].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[155].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[156].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[157].style.display = "block";
                        }
                    }
                } 
                
                else if (option_chosen_array[2] == "10"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[158].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[159].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[160].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[161].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[162].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[163].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[164].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[165].style.display = "block";
                        }
                    }
                } 
                
                else if (option_chosen_array[2] == "11"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[166].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[167].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[168].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[169].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[170].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[171].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[172].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[173].style.display = "block";
                        }
                    }
                } 
                
                else if (option_chosen_array[2] == "12"){
                    if (option_chosen_array[3] == "13"){
                        if (option_chosen_array[5] == "21"){
                            z[174].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[175].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[176].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[177].style.display = "block";
                        }
                    } else if (option_chosen_array[3] == "14" || option_chosen_array[3] == "15"){
                        if (option_chosen_array[5] == "21"){
                            z[178].style.display = "block";
                        } else if (option_chosen_array[2] == "22"){
                            z[179].style.display = "block";
                        } else if (option_chosen_array[2] == "23"){
                            z[180].style.display = "block";
                        } else if (option_chosen_array[2] == "24"){
                            z[181].style.display = "block";
                        }
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

function addCount(n){
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
            for(i=0;i< (score.length); i++){
                final_score = final_score + score[i];
            }

            final_score = Math.round((final_score*10)/6);
            final_final_score = final_score.toString() + "%";
    
            function scoreDisplay(){
                // console.log("this half works:  ", final_score)
                    return(final_final_score);
                }
        
            document.getElementById("final-thing").innerHTML = scoreDisplay();
        } else {
            focus_log = [];
        }

        showTab(currentTab)

    } else {
        alert("There is no option selected.")
    }
}