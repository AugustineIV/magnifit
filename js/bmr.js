function calculateBMR(){
	var age=document.getElementById('age').value;
	var height=document.getElementById('height').value;
	var weight=document.getElementById('weight').value;
	bmr=(10*weight)+(6.25*height)-(5*age)-161;
	//var result=document.getElementById('result');
	alert("Your BMR is:" + bmr);
	//result.textContent='Your BMI is:' + bmi;
}