/*jshint multistr:true */
var text = "Ali, how are you Ali doing? My name is Emily. You Ali?";
var myName = "Ali";
var hits = [];
for(i = 0;i < text.length; i++){
    if(text[i] === myName[0])
        {
           for(j = i; j <= i + myName.length; j++){
               hits.push(text[j]);
               } 
        }
    }
if(hits.length == 0)
    {
    console.log(hits);
    }
else{
    console.log(hits);
    }