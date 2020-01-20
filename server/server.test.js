const request = require("supertest");
const expect = require("expect");

var app = require("./server").app;
describe('Server',()=>{
    describe("GET /", ()=>{
        it('should return helloworld response',(done)=>{
            request(app)
                .get('/')
                .expect(404)
                .expect((res)=>{
                    expect(res.body).toInclude({
                        error:'Page not found.',
                    })
                })
                .end(done);
        });
    });

    describe("GET /users",()=>{
        it('should return my user',(done)=>{
            request(app)
                .get('/users')
                .expect(200)
                .expect((res)=>{
                    expect(res.body).toInclude({
                        name:'Ayodeji',
                        age:26
                    })
                })
                .end(done);
        });
    });
})


