
// var scrapeForm = document.getElementById("scraper");

// var getProfile = document.getElementsByTagName("select")[0].addEventListener('change', function(){
//     let value = document.getElementsByTagName("select")[0].value;
//     if(value == 'canAppl'){
//         scrapeForm.action = "/scrapecanAppl"
//         console.log(scrapeForm.action);
//     } 
//     else if(value == 'goemans'){
//         scrapeForm.action = "/scrapegoemans"
//         console.log(scrapeForm.action);
//     }
//     else if(value == 'midAppl'){
//         scrapeForm.action = "/scrapemidAppl"
//         console.log(scrapeForm.action);
//     }  
//     else if(value == 'coastAppl'){
//         scrapeForm.action = '/scrapecoastAppl'
//         console.log(scrapeForm.action)
//     }
//     else if(value == 'default'){
//         scrapeForm.action = "/scrape"
//         console.log(scrapeForm.action);
//     }
// });

var value = document.querySelector("select").value;

document.querySelector('select').addEventListener('change', ()=>{
    console.log(document.querySelector("select").value)
    value = document.querySelector("select").value

    document.querySelector('.high-low-filter form').action = '/' + value;
    
})

