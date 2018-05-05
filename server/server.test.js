const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {

    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    })
                })
                .end(done);
        });
    })
    describe('GET /users', () => {
        it('should return my user record', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Jaini',
                        age: 30
                    })
                })
                .end(done);
        });
    })
})

// Server
//GET /
    //some test case
// GET /users
    //


//Make new test
//status code 200
//assert that your user object exists

