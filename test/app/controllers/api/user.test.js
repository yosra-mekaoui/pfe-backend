const supertest = require('supertest')('localhost:5000/api');
const expect = require('chai').expect;
let response;

describe('Test Users', () => {
    it('should return a 200 response on GET /users', async() => {
        response = await supertest
            .get('/users')
            .then(response => {
                return response;
        });

        expect(response.statusCode).to.be.equal(200);
        expect(response.body).to.be.an('array');

    });

    it('should create a new user on POST /users', async () => {
        const firstName = "tawa";
        const lastName = "leader";
        const email = "kk.kk@gmail.com";
    
        // Envoyer la requête POST pour créer un nouvel utilisateur
        const response = await supertest
            .post('/users')
            .send({
                firstName,
                lastName,
                email
            });
    
        // Vérifier le statut de la réponse
        expect(response.statusCode).to.be.equal(201);
    
        // Vérifier les détails de l'utilisateur créé
        expect(response.body.firstName).to.be.equal(firstName);
        expect(response.body.lastName).to.be.equal(lastName);
        expect(response.body.email).to.be.equal(email);
    });
    //update user
    it('should update a user on PUT /users/:id', async () => {
        const firstName = "tawa";
        const lastName = "leader";
        const email = "kk.test@gmail.com";
        // Créer un nouvel utilisateur
        const newUser = await supertest
            .post('/users')
            .send({
                firstName,
                lastName,
                email
            });
    
        // Mettre à jour les détails de l'utilisateur
        const updatedFirstName = "tawa";
        const updatedLastName = "leader";
        const updatedEmail = "kk.testt@gmail.com";
        // Envoyer la requête PUT pour mettre à jour l'utilisateur
        const response = await supertest
            .put(`/users/${newUser.body._id}`)
            .send({
                firstName: updatedFirstName,
                lastName: updatedLastName,
                email: updatedEmail
            });
    
        // Vérifier le statut de la réponse
        expect(response.statusCode).to.be.equal(200);
    
        // Vérifier que les détails de l'utilisateur ont été correctement mis à jour
        expect(response.body.firstName).to.be.equal(updatedFirstName);
        expect(response.body.lastName).to.be.equal(updatedLastName);
        expect(response.body.email).to.be.equal(updatedEmail);
    }); 
    //delete user
    it('should delete a user on DELETE /users/:id', async () => {
        // Créer un nouvel utilisateur pour le supprimer ensuite
        const newUser = await supertest
            .post('/users')
            .send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com'
            });
    
        // Envoyer la requête DELETE pour supprimer l'utilisateur
        const response = await supertest
            .delete(`/users/${newUser.body._id}`);
    
        // Vérifier le statut de la réponse
        expect(response.statusCode).to.be.equal(200);
    
        // Vérifier que l'utilisateur a été supprimé en essayant de le récupérer
        const getUserResponse = await supertest.get(`/users/${newUser.body._id}`);
        expect(getUserResponse.statusCode).to.be.equal(404);
    });
<<<<<<< Updated upstream
    

=======
>>>>>>> Stashed changes
});