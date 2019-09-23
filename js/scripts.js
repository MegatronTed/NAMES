var maleNames=["Kwasi","Kwadwo","kwadena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var daysOfTheweek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];
function akan(){
    var Month=parseInt(document.getElementById("month").value);
    var Day=parseInt(document.getElementById("day").value);
    var Year=parseInt(document.getElementById("year").value);
    var gender=getGender();
var date=new Date(Year +"/"+Month+"/"+Day);
var dayBorn= date.getDay();
var akanName;
if(gender ==="male"){
       akanName = maleNames[dayBorn];
   }
   else{
       akanName = femaleNames[dayBorn];
   }
   alert("You were born on "+daysOfTheweek[dayBorn]+" and your Akan name is "+akanName);
}
   function getGender(){
       var gender = document.getElementsByName("gender");
       for(i= 0; i < gender.length; i++){
           if(gender[i].checked){
               return(gender[i].value)
           }
       }
   }
      
