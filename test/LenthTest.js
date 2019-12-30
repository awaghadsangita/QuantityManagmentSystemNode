let assert=require('assert');
let length=require('../main/Length')
describe('tests for length conversion',function(){
    it('given 1 feet should return 12 inch',function(){
        feet1=length.unitConversion(1,length.Length.FEET);
        inch12=length.unitConversion(12,length.Length.INCH);
        assert.equal(feet1,inch12);
    });
});