const OperationRepository = require('../repository/sequelize/OperationRepository');

exports.getOperations = (req, res, next) => {
    OperationRepository.getOperations()
        .then(operations => {
            res.status(200).json(operations);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getOperationById = (req, res, next) => {
    const idOperation = req.params.idOperation;
    OperationRepository.getOperationById(idOperation)
        .then(operation => {
            if(!operation) {
                res.status(404).json({
                    message: 'Operation with id: '+idOperation+' not found'
                })
            } else {
                res.status(200).json(operation)
            }
        });
};

exports.createOperation = (req, res, next) => {
    OperationRepository.createOperation(req.body)
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

exports.updateOperation = (req, res, next) => {
    const idOperation =  req.params.idOperation;
    OperationRepository.updateOperation(idOperation, req.body)
        .then(result => {
            res.status(200).json({message: 'Operation updated!', operation: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteOperation = (req, res, next) => {
    const idOperation = req.params.idOperation;
    OperationRepository.deleteOperation(idOperation)
        .then(result => {
            res.status(200).json({message: 'Removed operation', operation: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};