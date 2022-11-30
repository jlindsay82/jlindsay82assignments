/*
This is a javascript application that captures how many subjects a user studies. It then asks the user to enter the results for each subject. It stores these results in an array and prints them back to the user along with their overall average and grade for each module.
J Lindsay
29/11/2022
*/
var numberOfSubjects;
let result=[];
let grade=[];
var sum=0;
var averageResult;
function results(){
	numberOfSubjects=prompt("Hello! Please enter how many subjects you study:");
	console.log(numberOfSubjects);
	for(i=0;i<numberOfSubjects;i++){
		result[i]=parseFloat(prompt("Please insert your result for subject number "+(i+1)));
		if(result[i]>=70){
     			grade[i]="A";
  		}
  		else if(result[i]<70&&result[i]>=60){
     			grade[i]="B";
  		}
  		else if(result[i]<60&&result[i]>=50){
     			grade[i]="C";
		}
  		else if(result[i]<50&&result[i]>=45){
     			grade[i]="D";
		}
		else if(result[i]<45&&result[i]>=40){
		     	grade[i]="E";
		}
		else if(result[i]<40){
		     	grade[i]="F";
		}
		sum+=result[i];
		//console.log(sum);
	}//exit for loop
	//console.log(sum);
	averageResult=sum/result.length;
	//console.log(averageResult);
	document.getElementById("line1").innerHTML="Results:";
	document.getElementById("line2").innerHTML="Your average result is "+averageResult.toFixed(2)+"%";
	document.getElementById("line3").innerHTML="Your grades for each subject are as follows: "+grade.toString();
}
