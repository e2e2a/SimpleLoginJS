const SITE_TITLE = 'Shope';
const User = require('../models/user')

module.exports.index = (request, response) => {
    response.render('register', {
        site_title: SITE_TITLE,
        title: 'Register'
    });
}
module.exports.submit = (request, response) => {
    const user = new User({
        username: request.body.username,
        email: request.body.email,
        birthdate: request.body.birthdate,
        password: request.body.password,
        
        
    });
    user.save().then(() => {
        console.log('success')
        return response.redirect('/login');
    }, () => {
        console.log('failed')
        return response.render('registration-failed');
    });
}