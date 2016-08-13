// INITIALIZING EMAIL ARRAYS USED BY CONTROLLERS

app.factory('emailArraysFactory',function(){
	return{
		receivedArr : [{'author': 'John@example.com','subject': 'I have to tell you...', 'date': '21.09.2015', 'content': ''},
						 {'author': 'Peter87@example.com','subject': 'Hey Check out that cool...', 'date': '21.04.2015', 'content': ''},
						 {'author': 'Marry_Ann@example.com','subject': 'Hello World', 'date': '03.11.2014', 'content': ''},
						 {'author': 'Dominic@example.com','subject': 'Angular is the coolest JS framework so far', 'date': '21.08.2014', 'content': ''},
						 {'author': 'Eva@example.com','subject': 'How are you?', 'date': '21.04.2014', 'content': ''},
						 {'author': 'Kevin@example.com','subject': 'Dude how about...', 'date': '01.02.2014', 'content': ''}],

	spamArr : [{'author': 'Bob@example.com','subject': 'Double your income', 'date': '11.05.2015', 'content': ''}],

	removedArr : [],

	sendedArr : []

	
	}
})