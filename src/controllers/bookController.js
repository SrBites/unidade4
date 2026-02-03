const Book = require('../models/book');

// POST - Criar novo livro
exports.createBook = async (req, res) => {
    try {
        const { titulo, autor, ano, genero } = req.body;

        if (!titulo || !autor || !ano || !genero) {
            return res.status(400).json({ error: 'Todos os campos (titulo, autor, ano, genero) são obrigatórios.' });
        }

        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar livro', details: error.message });
    }
};

// GET - Listar todos os livros
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros', details: error.message });
    }
};

// PUT - Atualizar livro por ID
exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        
        // { new: true } retorna o objeto atualizado e não o antigo
        const book = await Book.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!book) {
            return res.status(404).json({ error: 'Livro não encontrado' });
        }

        res.status(200).json(book);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ error: 'ID fornecido é inválido' });
        }
        res.status(500).json({ error: 'Erro ao atualizar livro', details: error.message });
    }
};

// DELETE - Remover livro por ID
exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);

        if (!book) {
            return res.status(404).json({ error: 'Livro não encontrado' });
        }

        res.status(200).json({ message: 'Livro removido com sucesso' });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ error: 'ID fornecido é inválido' });
        }
        res.status(500).json({ error: 'Erro ao deletar livro', details: error.message });
    }
};