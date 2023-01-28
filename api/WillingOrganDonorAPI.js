const WillingOrganDonorRepository = require('../repository/mysql2/WillingOrganDonorRepository');

exports.getWillingOrganDonors = (req, res, next) => {
    WillingOrganDonorReporsitory.getWillingOrganDonors()
        .then(willingOrganDonors => {
            res.status(200).json(willingOrganDonors);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getWillingOrganDonorById = (req, res, next) => {
    const idWillingOrganDonor = req.params.idWillingOrganDonor;
    WillingOrganDonorRepository.getWillingOrganDonorById(idWillingOrganDonor)
        .then(willingOrganDonor => {
            if(!willingOrganDonor) {
                res.status(404).json({
                    message: 'WillingOrganDonor with id: '+idWillingOrganDonor+' not found'
                })
            } else {
                res.status(200).json(willingOrganDonor)
            }
        });
};

exports.createWillingOrganDonor = (req, res, next) => {
    WillingOrganDonorRepository.createWillingOrganDonor(req.body)
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

exports.updateWillingOrganDonor = (req, res, next) => {
    const idWillingOrganDonor =  req.params.idWillingOrganDonor;
    WillingOrganDonorRepository.updateWillingOrganDonor(idWillingOrganDonor, req.body)
        .then(result => {
            res.status(200).json({message: 'WillingOrganDonor updated!', willingOrganDonor: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteWillingOrganDonor = (req, res, next) => {
    const idWillingOrganDonor = req.params.idWillingOrganDonor;
    WillingOrganDonorRepository.deleteWillingOrganDonor(idWillingOrganDonor)
        .then(result => {
            res.status(200).json({message: 'Removed willingOrganDonor', willingOrganDonor: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};