const OrganRepository = require('../repository/mysql2/OrganRepository');

exports.getOrgans = (req, res, next) => {
    OrganReporsitory.getOrgans()
        .then(organs => {
            res.status(200).json(organs);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getOrganById = (req, res, next) => {
    const idOrgan = req.params.idOrgan;
    OrganRepository.getOrganById(idOrgan)
        .then(organ => {
            if(!organ) {
                res.status(404).json({
                    message: 'Organ with id: '+idOrgan+' not found'
                })
            } else {
                res.status(200).json(organ)
            }
        });
};

exports.createOrgan = (req, res, next) => {
    OrganRepository.createOrgan(req.body)
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

exports.updateOrgan = (req, res, next) => {
    const idOrgan =  req.params.idOrgan;
    OrganRepository.updateOrgan(idOrgan, req.body)
        .then(result => {
            res.status(200).json({message: 'Organ updated!', organ: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteOrgan = (req, res, next) => {
    const idOrgan = req.params.idOrgan;
    OrganRepository.deleteOrgan(idOrgan)
        .then(result => {
            res.status(200).json({message: 'Removed organ', organ: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};