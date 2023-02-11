Submit = () => {
     document.getElementById('Ratingitem').style.display = 'none';
     document.getElementById('thanksitem').style.display = 'block';

     if(document.getElementById('1f').checked) {   
          var selectedValue = document.getElementById('1f').value;  
        document.getElementById('range').innerHTML = selectedValue
     }  
          if(document.getElementById('2f').checked) {   
               var selectedValue = document.getElementById('2f').value;  
               document.getElementById('range').innerHTML = selectedValue 
          }
               if(document.getElementById('3f').checked) {   
                    var selectedValue = document.getElementById('3f').value;  
                    document.getElementById('range').innerHTML = selectedValue  
               }
                    if(document.getElementById('4f').checked) {   
                         var selectedValue = document.getElementById('4f').value;  
                         document.getElementById('range').innerHTML = selectedValue 
                    }
                         if(document.getElementById('5f').checked) {   
                              var selectedValue = document.getElementById('5f').value;  
                              document.getElementById('range').innerHTML = selectedValue
                         }
   }  
