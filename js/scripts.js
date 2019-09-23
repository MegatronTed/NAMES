var malenames=["Kwasi","Kwadwo","kwadena","Kwaku","Yaw","Kofi","Kwame"];
var femalenames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var daysoftheweek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];
function akanName(){
    var month=parseInt(document.getElementById("Month").value);
    var day=parseInt(document.getElementById("Day").value);
    var year=parseInt(document.getElementById("Year").value);
    var Gender=getGender();

var gender = document.getElementById("choice").value;
var date=new Date(Year +"/"+Month+"/"+Day);
var dayborn= date.getDay();
var akanName;
   if(gender==="male"){
       akanName =malenames[dayBorn];
   }
   else{
       akanName=femalenames[dayBorn];
   }
   alert("You were born on"+daysoftheweek[dayBorn]+"And your Akan name is"+akanName);
}
   function getNames(){
       var gender=documentent.getElementsByName("gender");
       for(i=0;i<gender.length;i++){
           if(gender[i].checked){
               return(gender[i].value)
           }
       }
   }
      
