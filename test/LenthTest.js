let assert=require('assert');
let length=require('../main/Length')
describe('tests for length conversion',function(){
    it('given 1 feet should return 12 inch',function(){
        feet1=length.unitConversion(1,length.Length.FEET);
        inch12=length.unitConversion(12,length.Length.INCH);
        assert.equal(feet1,inch12);
    });

    it('given 3 feet should return 1 yard',function(){
        threeFeet=length.unitConversion(3,length.Length.FEET);
        oneYard=length.unitConversion(1,length.Length.YARD);
        assert.equal(oneYard,threeFeet);
    })
});