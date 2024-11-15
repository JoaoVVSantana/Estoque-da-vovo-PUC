import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import autenticarToken from '../../middlewares/autenticarToken.js'; 
import express from 'express';
const router = express.Router();

const SECRET_KEY = 'admin123'; // Senha secreta
// Rota de login
router.post('/api/login',autenticarToken, async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verifica se o usuário existe
    const usuario = await User.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Verifica a senha
    const senhaValida = bcrypt.compareSync(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gera o token JWT
    const token = jwt.sign({ id: usuario.id }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

export default router;