// Customer Controller
// Métodos CRUD para acessar o banco de dados, provindos do repositories

const ValidatorContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getByEmail = async (req, res, next) => {
    try {
        var data = await repository.getByEmail(req.params.email);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(200).send({
            message: 'Cliente cadastrado com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Customer alterado com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: 'Usuário removido com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}