const Annotations = require('../models/AnnotationData');

module.exports = {

    async read(request, response){
        const annotationList = await Annotations.find();

        return response.json(annotationList);


    },

   

    async create (request, response){
        const {title, notes, priority } = request.body; // dados pegos no json

        if (!notes || !title){
            return response.status(400).json({error: "Neccessário um titulo/anotação!"});
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        });
        return response.json(annotationCreated);
    },

    async delete(request, response){
        const {id} = request.params;

        const annotationDeleted = await Annotations.findOneAndDelete({ _id : id}); //Busca Id igual ao id do json

        if(annotationDeleted){
            return response.json(annotationDeleted);
        }

        return response.status(401).json({error:"Não foi encontrado o registro para deletar"})
    }
}