/* comment same as css */
// everything on the line after these two forward slashes is a comment




	var firstName = prompt('What is your first name?')
	var lastName = prompt('What is your last name?')

	var fullName = firstName + ' ' + lastName; 
	console.log('User is called ' +fullName);

	if (firstName === 'General' && lastName!= 'Assembly') {
		console.log('Greetings General');
	} 
		



	//when the page loads 
	$(function()  {

		

		//hide all the sections
		$('h2').next().hide();

		//when the user clicks a h3 element 
		$('h2').on('click',function(){

		//toggle the next element
		$(this).next().slideToggle(2000);


		});

	});




	var userAge = prompt('How old are you?');

	if (userAge >= 18) {
		console.log('User is an adult');
	}
	else if (UserAge >= 13) {
		console.log('User is a teenager');

	} 
	else {
		alert('Go away child');
	}


