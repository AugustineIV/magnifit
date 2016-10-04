function calculateBMI(){
	var height=document.getElementById('height').value;
	var weight=document.getElementById('weight').value;
	bmi=weight/Math.pow(height,2);
	var result=document.getElementById('result');
	alert("Your BMI is:" + bmi);
}