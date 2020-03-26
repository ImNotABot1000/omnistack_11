const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query

        const [count] = await connection('messages').count();
        
        const messages = await connection('messages')
            .join('users', 'users.id', '=', 'messages.user_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'messages.*',
                'users.name',
                'users.email',
                'users.whatsapp',
                'users.city',
                'users.uf' 
            ]);

        response.header('X-Total-Xount', count['count(*)']);

        return response.json(messages);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const user_id = request.headers.authorization;
        const [id] = await connection('messages').insert({
            title,
            description,
            value,
            user_id,
        });

        return response.json({ id }); //mandar desse jeito para o front end nao saber que e um ID!
    },

    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const message = await connection('messages')
            .where('id', id)
            .select('user_id')
            .first()

        
        if(message.user_id !== user_id) {
            return response.status(401).json({error: "Opperation not permitted."});
        }

        await connection('messages').where('id', id).delete();

        return response.status(204).send(); //enviar resposta de corpo vazio
    },
};