let employees=[
    {"first_name":"Gretchen","email":"gcurmi0@huffingtonpost.com","gender":"Female"},
{"first_name":"Culver","email":"cdoddridge1@facebook.com","gender":"Male"},
{"first_name":"Berky","email":"bdionisetto2@phoca.cz","gender":"Male"},
{"first_name":"Marika","email":"mbernardy3@qq.com","gender":"Female"},
{"first_name":"Leodora","email":"lbertl4@mashable.com","gender":"Female"},
{"first_name":"Allie","email":"adye5@seesaa.net","gender":"Male"},
{"first_name":"Dyana","email":"dmorphey6@e-recht24.de","gender":"Female"},
{"first_name":"Alexei","email":"ahaken7@edublogs.org","gender":"Male"},
{"first_name":"Nicko","email":"ncaltera8@oracle.com","gender":"Bigender"},
{"first_name":"Filip","email":"fpfeffel9@dropbox.com","gender":"Male"},
{"first_name":"Casey","email":"cmottona@discuz.net","gender":"Female"},
{"first_name":"Raff","email":"rgrobb@nature.com","gender":"Male"},
{"first_name":"Bidget","email":"bmalacridac@chronoengine.com","gender":"Female"},
{"first_name":"Stearn","email":"scheyneyd@ihg.com","gender":"Male"},
{"first_name":"Nikolaos","email":"ngaynese@indiegogo.com","gender":"Male"},
{"first_name":"Hulda","email":"hbestwallf@phoca.cz","gender":"Female"},
{"first_name":"Corette","email":"ccragellg@behance.net","gender":"Female"},
{"first_name":"Marcile","email":"mblaslh@alexa.com","gender":"Female"},
{"first_name":"Clio","email":"cstanlikei@buzzfeed.com","gender":"Female"},
{"first_name":"Shanna","email":"sfreestonej@usda.gov","gender":"Female"},
{"first_name":"Corny","email":"cashwellk@msu.edu","gender":"Female"},
{"first_name":"Vito","email":"vsigfridl@house.gov","gender":"Male"},
{"first_name":"Michal","email":"mayrsm@weibo.com","gender":"Female"},
{"first_name":"Montgomery","email":"mlandyn@forbes.com","gender":"Male"},
{"first_name":"Archibald","email":"agallachero@artisteer.com","gender":"Male"},
{"first_name":"Damian","email":"ddownagep@sbwire.com","gender":"Male"},
{"first_name":"Emmalynn","email":"ebracherq@toplist.cz","gender":"Female"},
{"first_name":"Theo","email":"tarnowitzr@tumblr.com","gender":"Female"},
{"first_name":"Jacqueline","email":"jkleisles@wikia.com","gender":"Female"},
{"first_name":"Mozes","email":"mnutkinst@flickr.com","gender":"Male"},
{"first_name":"Calhoun","email":"cgerlacku@va.gov","gender":"Agender"},
{"first_name":"Sauveur","email":"shobbenv@boston.com","gender":"Male"},
{"first_name":"Gwenette","email":"gbanvillew@wordpress.org","gender":"Female"},
{"first_name":"Chantalle","email":"cauklandx@amazon.com","gender":"Female"},
{"first_name":"Ashly","email":"alaisey@homestead.com","gender":"Female"},
{"first_name":"Edythe","email":"ekrzyzaniakz@mysql.com","gender":"Female"},
{"first_name":"Elwira","email":"estitle10@bravesites.com","gender":"Female"},
{"first_name":"Feliks","email":"fdowdam11@skyrock.com","gender":"Male"},
{"first_name":"Ezra","email":"ewedmore12@nasa.gov","gender":"Male"},
{"first_name":"Zebadiah","email":"zlaxson13@sourceforge.net","gender":"Male"},
{"first_name":"Courtnay","email":"ccarsey14@netlog.com","gender":"Male"},
{"first_name":"Janine","email":"jarnison15@weibo.com","gender":"Female"},
{"first_name":"Eddy","email":"etertre16@exblog.jp","gender":"Male"},
{"first_name":"Karl","email":"kvicarey17@google.cn","gender":"Male"},
{"first_name":"Rog","email":"rivashinnikov18@etsy.com","gender":"Male"},
{"first_name":"Fielding","email":"fangrove19@squarespace.com","gender":"Male"},
{"first_name":"Joscelin","email":"jrestieaux1a@netscape.com","gender":"Female"},
{"first_name":"Gil","email":"greekie1b@topsy.com","gender":"Male"},
{"first_name":"Shaylah","email":"schater1c@etsy.com","gender":"Agender"},
{"first_name":"Vere","email":"vfrusher1d@hud.gov","gender":"Female"}]

let no_of_male_employees=0;
let no_of_Female_employees=0;
for(employee of employees){
    if(employee.gender==="Female"){
        no_of_male_employees++;
    }
    else
    if(employee.gender==="male"){
        no_of_male_employees++
    }
}
    console.log("no of male employees",no_of_male_employees)
    console.log("no of Female employees",no_of_Female_employees)
