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

    it('should create a new user on POST /users', async() => {
        const firstName = "tawa";
        const lastName = "leader";
        const email = "kk.kk@gmail.com";
    
        response = await supertest
            .post('/users')
            .send({
                firstName,
                lastName,
                email
            })
            .then(response => {
                return response;
        });
    
        expect(response.statusCode).to.be.equal(201);
        expect(response.body.firstName).to.be.equal(firstName);
        expect(response.body.lastName).to.be.equal(lastName);
        expect(response.body.email).to.be.equal(email);
    });
});

