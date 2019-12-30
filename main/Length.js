class Length{
    Length={FEET:12,INCH:1,YARD:36}
    unitConversion(value,Length){
        return value*Length;
    }
}
    module.exports=new Length();