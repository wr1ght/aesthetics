module.exports = input => { return input.replace(/[a-zA-Z0-9!\?\.'";:\]\[}{\)\(@#\$%\^&\*\-_=\+`~><]/g, (c) => String.fromCharCode(0xFEE0 + c.charCodeAt(0))).replace(/ /g, '　') } 
