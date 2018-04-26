//if we click on the start/reset
	//if we are playing
		//reload page
	//if not
		//set score 0
		//show countdownbox
		//reduce time by 1sec
			//timeleft?
				//yes=>continue
				//no=>gameover
		//change button reset
		//gen new q&a

//if we click ans box
	//if we playing
		//correct?
			//yes=>increase score,show correct box for 1sec,gen new q&a
			//no=>show try again box 1sec

var playing = false;
var score;
var timelimit;
var action;
var correctAnswer;
var gameplay;

show_menu();
function show_menu(){
	"use strict";
	show("menu");
	hide("main_board");
	hide("correct");
	hide("wrong");
	hide("game_over");	
}

function show_mainboard(){
	"use strict";
	show("main_board");
	hide("menu");
	hide("correct");
	hide("wrong");
	hide("game_over");
}

function add_quiz(){
	"use strict";
	show_mainboard();
	gameplay = "+";
	document.getElementById("start_reset").onclick = function(){
		if(playing === true){
			location.reload();
		}else{
			playing = true;
			score = 0;
			writehtml("score_val",score);
			show("time_remaining");
			timelimit = 60;
			writehtml("time_val",timelimit);
			hide("game_over");
			writehtml("start_reset","Reset Game");
			startCountdown();
			generateQA_for_add();		
		}
	};
}

function sub_quiz(){
	"use strict";
	show_mainboard();
	gameplay = "-";
	document.getElementById("start_reset").onclick = function(){
		if(playing === true){
			location.reload();
		}else{
			playing = true;
			score = 0;
			writehtml("score_val",score);
			show("time_remaining");
			timelimit = 60;
			writehtml("time_val",timelimit);
			hide("game_over");
			writehtml("start_reset","Reset Game");
			startCountdown();
			generateQA_for_sub();		
		}
	};
}

function multi_quiz(){
	"use strict";
	show_mainboard();
	gameplay = "x";
	document.getElementById("start_reset").onclick = function(){
		if(playing === true){
			location.reload();
		}else{
			playing = true;
			score = 0;
			writehtml("score_val",score);
			show("time_remaining");
			timelimit = 60;
			writehtml("time_val",timelimit);
			hide("game_over");
			writehtml("start_reset","Reset Game");
			startCountdown();
			generateQA_for_multy();
		}
	};	
}

function divide_quiz(){
	"use strict";
	show_mainboard();
	gameplay = "/";
	document.getElementById("start_reset").onclick = function(){
		if(playing === true){
			location.reload();
		}else{
			playing = true;
			score = 0;
			writehtml("score_val",score);
			show("time_remaining");
			timelimit = 60;
			writehtml("time_val",timelimit);
			hide("game_over");
			writehtml("start_reset","Reset Game");
			startCountdown();
			generateQA_for_divid();
			
		}
	};
}
checkAnswer();
function checkAnswer(){
	"use strict";
	for(var i=1;i<5;i++){
		document.getElementById("opt"+i).onclick=function(){
			if(playing===true){
//				console.log(typeof this.innerHTML+typeof correctAnswer);
				if(this.innerHTML === correctAnswer.toString()){
					score++;
					writehtml("score_val",score);
					hide("wrong");
					show("correct");
					setTimeout(function(){
						hide("correct");
					},1000);
					continueGameQA(gameplay);
				}else{
					hide("correct");
					show("wrong");
					setTimeout(function(){
						hide("wrong");
					},1000);
				}
			}
		};
	}
}
function continueGameQA(gamechoice){
	"use strict";
	switch(gamechoice){
		case "+":
			generateQA_for_add();
			break;
		case "-":
			generateQA_for_sub();
			break;
		case "x":
			generateQA_for_multy();
			break;
		case "/":
			generateQA_for_divid();
			break;
		default:
			break;
					 }
}
function startCountdown(){
	"use strict";
	action = setInterval(function(){
		timelimit-=1;
		writehtml("time_val",timelimit);
		if(timelimit === 0){
			show("game_over");
			writehtml("game_over","<p>Game over!</p><p>Your score is " + score + ".</p>");
			hide("time_remaining");
			hide("correct");
			hide("wrong");
			playing = false;
			writehtml("start_reset","Start Game");
			
		}
	},1000);
}

function stopCountdown(){
	"use strict";
	clearInterval(action);
}

function generateQA_for_add(){
	"use strict";
	var x = 1+ Math.round(20*Math.random());
	var y = 1+ Math.round(20*Math.random());
	correctAnswer = x+y;
	writehtml("question_display",x+"+"+y);
	var correctPosition = 1+ Math.round(3*Math.random());
	writehtml("opt"+correctPosition,correctAnswer);
	//fill one box with the correct answer
	//fill other boxes with wrong answers
	var answers = [correctAnswer];
	for(var i=1; i<5; i++){
		if(i !== correctPosition) {
			var wrongAnswer;
				do{
					wrongAnswer = (1+Math.round(20*Math.random()))+(1+Math.round(20*Math.random())); //a wrong answer
				}while(answers.indexOf(wrongAnswer)>-1);
			writehtml("opt"+i,wrongAnswer);
			answers.push(wrongAnswer);
		}
	}
}

function generateQA_for_sub(){
	"use strict";
	var x = 1+ Math.round(20*Math.random());
	var y = 1+ Math.round(20*Math.random());
	correctAnswer = x-y;
	writehtml("question_display",x+"-"+y);
	var correctPosition = 1+ Math.round(3*Math.random());
	writehtml("opt"+correctPosition,correctAnswer);
	//fill one box with the correct answer
	//fill other boxes with wrong answers
	var answers = [correctAnswer];
	for(var i=1; i<5; i++){
		if(i !== correctPosition) {
			var wrongAnswer;
				do{
					wrongAnswer = (1+Math.round(20*Math.random()))-(1+Math.round(20*Math.random())); //a wrong answer
				}while(answers.indexOf(wrongAnswer)>-1);
			writehtml("opt"+i,wrongAnswer);
			answers.push(wrongAnswer);
		}
	}
}

function generateQA_for_multy(){
	"use strict";
	var x = 1+ Math.round(20*Math.random());
	var y = 1+ Math.round(20*Math.random());
	correctAnswer = x*y;
	writehtml("question_display",x+"x"+y);
	var correctPosition = 1+ Math.round(3*Math.random());
	writehtml("opt"+correctPosition,correctAnswer);
	//fill one box with the correct answer
	//fill other boxes with wrong answers
	var answers = [correctAnswer];
	for(var i=1; i<5; i++){
		if(i !== correctPosition) {
			var wrongAnswer;
				do{
					wrongAnswer = (1+Math.round(20*Math.random()))*(1+Math.round(20*Math.random())); //a wrong answer
				}while(answers.indexOf(wrongAnswer)>-1);
			writehtml("opt"+i,wrongAnswer);
			answers.push(wrongAnswer);
		}
	}
}
function generateQA_for_divid(){
	"use strict";
	var x = 1+ Math.round(20*Math.random());
	var y = 1+ Math.round(20*Math.random());
	correctAnswer = (x/y).toFixed(3);
	writehtml("question_display",x+"/"+y);
	var correctPosition = 1+ Math.round(3*Math.random());
	writehtml("opt"+correctPosition,correctAnswer);
	//fill one box with the correct answer
	//fill other boxes with wrong answers
	var answers = [correctAnswer];
	for(var i=1; i<5; i++){
		if(i !== correctPosition) {
			var wrongAnswer;
				do{
					wrongAnswer = ((1+Math.round(20*Math.random()))/(1+Math.round(20*Math.random()))).toFixed(3); //a wrong answer
				}while(answers.indexOf(wrongAnswer)>-1);
			writehtml("opt"+i,wrongAnswer);
			answers.push(wrongAnswer);
		}
	}
}


function show(id){
	"use strict";
	document.getElementById(id).style.display = "block";
}
function hide(id){
	"use strict";
	document.getElementById(id).style.display = "none";
}
function writehtml(id,content){
	"use strict";
	document.getElementById(id).innerHTML=content;
}

