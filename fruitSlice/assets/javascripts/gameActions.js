// jquerry Document
var playStatus = false;
var score;
var trials;
var fruits = ['apple','banana','beans','blueberries','carrot','cherries','hazelnut','orange','peach','pear','raspberry','strawberry'];
var step;
var action;
var time;

$(function(){
	"use strict";
	$("#start_stop").click(function(){
		if(playStatus === true){
			location.reload();
		}else{
			$("#gameover").hide();
			playStatus = true;
			score = 0;
			$("#start_stop").html("RESET GAME");
			$("#scoreVal").html(score);
			$("#life").show();
			trials = 4;
			time = 15;
			addlife();
			startAction();
			
		}
	});
});
grabTheFruit();
//Functions

function addlife(){
	"use strict";
	$("#life").empty();
	for(var i=0;i<trials;i++){
				$("#life").append('<img id="life_img" src="assets/images/life.png" alt="">');
			}
}

function startAction(){
	"use strict";
	randomFruitsGen();
	step = 1+Math.round(5*Math.random());
			action = setInterval(function(){
				$("#fruits").css('top', $("#fruits").position().top+step);
				if($("#fruits").position().top > $("#fruits").height()){
					if(trials >= 1){
						randomFruitsGen();
						--trials;
						addlife();
					}else{
						playStatus = false;
						$("#start_stop").html("START GAME");
						$("#finalScoreVal").html(score);
						$("#gameover").show();
						$("#life").hide();
						stopFruit();
						
					}
				}
			},time);
}

function chooseFruits(){
	"use strict";
	$("#fruits").attr('src' , 'assets/images/'+ fruits[Math.floor(Math.random()*12)] +'.png');
}

function randomFruitsGen(){
	"use strict";
	$("#fruits").show();
	chooseFruits();
	$("#fruits").css({'left':Math.round(Math.random*400),'top':-50});
}
function stopFruit(){
	"use strict";
	clearInterval(action);
	$("#fruits").hide();
}

function grabTheFruit(){
	"use strict";
	$("#fruits").mouseover(function(){
		score++;
		$("#scoreVal").html(score);
		$("#grabSound")[0].play();
		clearInterval(action);
		$("#fruits").hide("explode",500);
		setTimeout(startAction,500);
		
	});
}
