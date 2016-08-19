app.factory('emailOperations', function(emailArraysFactory, provideTime) {

	_remove = function(index, array) {

		var cutedObject = emailArraysFactory[array][index];
		emailArraysFactory[array].splice(index, 1);
		emailArraysFactory.removedArr.push(cutedObject);

	}
	_sendToSpam = function(index, array) {

		var cutedObject = emailArraysFactory[array][index];
		emailArraysFactory[array].splice(index, 1);
		emailArraysFactory.spamArr.push(cutedObject);

	}

	_sendMail = function(author, subject, content) {
		emailArraysFactory.sendedArr.push({
			'author': author,
			'subject': subject,
			'date': provideTime.getCurrentDate(),
			'content': content
		});

		alert('mail sended successfully');
	}

	return {
		remove: _remove,

		sendToSpam: _sendToSpam,

		sendMail: _sendMail

	}
})