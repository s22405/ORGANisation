const DoctorRepository = require('../repository/sequelize/DoctorRepository');
const authUtil = require('../util/authUtils');
const {hashPassword} = require("../util/authUtils");

exports.login = (req, res, next) => {
    const name = req.body.name;
    const password = req.body.password;
    DoctorRepository.findByName(name)
        .then(doctor => {
            if(!doctor) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Invalid name or password"
                })
            } else if(authUtil.comparePasswords(password,doctor.password)) {
                req.session.loggedUser = doctor;
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: "Invalid name or password"
                })
            }
        })
        .catch(err => {
            console.log(err);
        });

}

exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}