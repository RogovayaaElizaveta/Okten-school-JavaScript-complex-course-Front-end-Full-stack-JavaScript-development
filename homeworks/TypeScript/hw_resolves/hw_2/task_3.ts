//
type Author  = {name:string,age:number};
type Book01 ={
    title:string ,
    pageCount :number,
    genre :string,
    authors : Author
};
let Book1 :Book01 = {
 title:'dhbdhb' ,
    pageCount :200,
    genre :'horror',
    authors : [
       {name:'Joh Kein',
        age:40
       } ,{
        name:'Dain Fit',age:55
       }
    ]
}