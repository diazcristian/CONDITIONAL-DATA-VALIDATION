function sendEmails(){
 
  //Weeks out of TRT
  
     var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("db-ldap");
     var templateText = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Template").getRange(1,1).getValue();
     var lr = ss.getLastRow();
  
  for (var i = 2;i<=lr;i++){
   
     var ldap = ss.getRange(i,1).getValue();
     var closed_week = ss.getRange(i,2).getValue();
     var emailaddress = ldap +'@google.com';
     var TRT_Email = ss.getRange(i,3).getValue();
     var trt_email_percentage = ((TRT_Email)*100)+'%';
     var TRT_Chat = ss.getRange(i,4).getValue();
     var trt_chat_percentage = ((TRT_Chat)*100)+'%';
     var subject = 'TSA Performance Notification';
 //Dates    
     var date = new Date();
     var diff = date.getDate() - date.getDay() - 7 + (date.getDay() === 0 ? -6 : 0);
     var set = new Date(date.setDate(diff))
     var dd = set.getDate();
     var mm = set.getMonth() + 1;
     var yyyy = set.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = yyyy + '-' + mm + '-' + dd;
    
  if((TRT_Email < 0.85 || TRT_Chat < 0.75) && closed_week===today){ 
     
    var emailText = templateText.replace("{name}",ldap).replace("{TRT_Email}",trt_email_percentage).replace("{TRT_Chat}",trt_chat_percentage).replace("{week}",closed_week); 
   
           
             //MailApp.sendEmail(ldap, subject, messageBody)
       
     Logger.log(emailText);    
      
    } 
  }
}  
