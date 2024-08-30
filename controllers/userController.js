const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password });
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao registrar o usuário:', error);
        res.status(500).json({ error: 'Erro ao registrar o usuário.' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            console.log('Usuário não encontrado');
            return res.status(401).json({ error: 'Email ou senha inválido.' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            console.log('Senha incorreta');
            return res.status(401).json({ error: 'Email ou senha inválido.' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN || '1h',
        });

        res.json({ token });

    } catch (error) {
        console.error('Erro ao tentar logar:', error);
        res.status(500).json({ error: 'Erro ao tentar logar.' });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
        attributes: { exclude: ['password'] },
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { username, email } = req.body;
        const user = await User.findByPk(req.user.id);

        if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });

        user.username = username || user.username;
        user.email = email || user.email;

        await user.save();

        res.json({ message: 'Usuário atualizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário.' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });

        await user.destroy();
        res.json({ message: 'Usuário deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar usuário.' });
    }
};


  