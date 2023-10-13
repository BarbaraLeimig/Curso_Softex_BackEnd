const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Configurações da conexão com o banco de dados
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'seu-host-do-banco-de-dados',
  username: 'seu-usuario-do-banco-de-dados',
  password: 'sua-senha-do-banco-de-dados',
  database: 'seu-nome-do-banco-de-dados',
});

// Verificando a conexão
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão bem-sucedida com o banco de dados.');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

// Definindo o modelo da tabela 'Atividade'
const Atividade = sequelize.define('Atividade', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  data_entrega: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Sincronizando o modelo com o banco de dados
sequelize.sync({ force: true })
  .then(() => {
    console.log('Modelo sincronizado com o banco de dados.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o modelo com o banco de dados:', error);
  });

// Criando uma instância do aplicativo Express
const app = express();
app.use(express.json());

// Rotas CRUD para atividades
app.post('/atividades', async (req, res) => {
  try {
    const atividade = await Atividade.create(req.body);
    res.status(201).json(atividade);
  } catch (error) {
    console.error('Erro ao criar atividade:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.get('/atividades', async (req, res) => {
  try {
    const atividades = await Atividade.findAll();
    res.status(200).json(atividades);
  } catch (error) {
    console.error('Erro ao ler atividades:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.put('/atividades/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const atividade = await Atividade.findByPk(id);

    if (atividade) {
      atividade.update(req.body);
      res.status(200).json(atividade);
    } else {
      res.status(404).json({ error: 'Atividade não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao atualizar atividade:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.delete('/atividades/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const atividade = await Atividade.findByPk(id);

    if (atividade) {
      await atividade.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Atividade não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao excluir atividade:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
