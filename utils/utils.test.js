const expect = require('expect');
const utils = require("./utils");

describe('Utils',()=>{
    it('should add two numbers',()=>{
        var res = utils.add(33,11);
        expect(res).toBe(44).toBeA('number');
        // if (res !== 44) {
        //     throw new Error(`Expected 44, but got ${res}`);
        // }
    });
    
    //you need to pass done when testing async functions. it will inform mocha that the function is being tested is async
    it('should async add two numbers',(done)=>{
        utils.asyncAdd(4,3,(sum)=>{
            expect(sum).toBe(7).toBeA('number');
            done();//mocha will wait till done is called
        });
    });
    
    it('should square a number',()=>{
        var res = utils.square(3);
        expect(res).toBe(9).toBeA('number');
       
    });
    
    it('should async square a number',()=>{
        utils.asyncSquare(3,(square)=>{
            expect(square).toBe(9).toBeA('number');
            done();
        });
    });
});


// it('should expect some values',()=>{
//     expect(12).toNotBe(9);
//     //this will fail cuz it uses ===. expects  the same object
//     //expect({name:'Andrew'}).toBe({name:'Andrew'});
//     //This will pass, cuz it examines the content of both objects
//     expect({name:'Andrew'}).toEqual({name:'Andrew'});

//     expect([2,3,4]).toInclude(2);
//     expect({name:'Andrew',age:25}).toInclude({age: 25});
// });

it('should verify first and last names are set',()=>{
    var res = utils.setName({},'Ayo Quadri');
    expect(res).toInclude({firstName:'Ayo',lastName:'Quadri'});
});