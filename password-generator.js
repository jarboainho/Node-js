var generator = require('generate-password');

var password = generator.generate({
	length: 12,
	numbers: true,
    uppercase: true
});

// 'uEyMTw32v9'
console.log(password);