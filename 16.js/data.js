let users=[{"id":1,"name":"Alexi","gender":"Female"},
    {"id":500,"name":"elli","gender":"Female"},
    
]
function displayUsers(){
    let rows="";
    for(user of users){
        if(user.gender ==='Female'){
            rows+=`<tr>
             <td>${user.id}</td> 
             <td>${user.name}</td>
             <td>${user.gender}</td>
             </tr>`
            
        }
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows
}