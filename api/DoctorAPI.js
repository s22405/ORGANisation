const DoctorRepository = require('../repository/mysql2/DoctorRepository');

exports.getDoctors = (req, res, next) => {
    DoctorRepository.getDoctors()
        .then(doctors => {
            res.status(200).json(doctors);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getDoctorById = (req, res, next) => {
    const idDoctor = req.params.idDoctor;
    DoctorRepository.getDoctorById(idDoctor)
        .then(doctor => {
            if(!doctor) {
                res.status(404).json({
                    message: 'Doctor with id: '+idDoctor+' not found'
                })
            } else {
                res.status(200).json(doctor)
            }
        });
};

exports.createDoctor = (req, res, next) => {
    DoctorRepository.createDoctor(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateDoctor = (req, res, next) => {
    const idDoctor =  req.params.idDoctor;
    DoctorRepository.updateDoctor(idDoctor, req.body)
        .then(result => {
            res.status(200).json({message: 'Doctor updated!', doctor: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteDoctor = (req, res, next) => {
    const idDoctor = req.params.idDoctor;
    DoctorRepository.deleteDoctor(idDoctor)
        .then(result => {
            res.status(200).json({message: 'Removed doctor', doctor: result});
    })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};