// navbar scroll in html,body
let navBar = document.querySelector('.navbar');
let body = document.querySelector('html,body');

window.addEventListener('scroll',function(){
    if(body.scrollTop>15){
        navBar.style.backgroundColor = 'white';
        navBar.style.boxShadow = ' 0 1px 0 #e1e1e2 ';
    } else{
        navBar.style.backgroundColor = 'transparent';
        navBar.style.boxShadow = ' none ';
    }
});


// change active for navbar
let navBarLinks = document.querySelectorAll('.navbar .navbar-nav .nav-item .nav-link');
let menu = document.querySelector('.navbar-collapse');
let menuBar = document.querySelector('.navbar-toggler-icon .icon');

for(let i=0; i<navBarLinks.length; i++){
    navBarLinks[i].addEventListener('click',function(){
        for(let j=0; j<navBarLinks.length; j++){
            navBarLinks[j].classList.remove('active');
        }
        navBarLinks[i].classList.add('active');
    });
    // when click on links to hide menu and click on menubar to show menu again
    navBarLinks[i].addEventListener('click',function(){
        if( menu.style.display = 'none'){
            menuBar.addEventListener('click',function(){
            menu.style.display = 'block';
        }); 
        }
    }); 
}


//dynamic section padding for start top section
let section = document.querySelectorAll('.section');
let hands = document.querySelector('.btn1-protect');
for(let k=0; k<section.length; k++){
    section[k].style.paddingTop = navBar.clientTop + 'rem';
    section[k].style.paddingTop = hands.clientTop + 'rem';
}






// change active for faq left list
let faqList = document.querySelectorAll('.box-faq ul li');

for(let i=0; i<faqList.length; i++){
    faqList[i].addEventListener('click',function(){
        for(let j=0; j<navBarLinks.length; j++){
            faqList[j].classList.remove('active');
        }
        faqList[i].classList.add('active');
    })
}

// panel-group-list in faq
let borderLink = document.querySelectorAll('.panel-group-list .link');
let panelList = document.querySelectorAll('.panel-group-list .panel-list ');
let panelHeading = document.querySelectorAll('.panel-group-list .panel-list .panel-heading');
let dieaseList  = document.querySelector('.panel-group-list');
// left-list in faq
let disease = document.querySelector('.disease');
let spread = document.querySelector('.spreads');
let protect = document.querySelector('.protects');
let symptoms = document.querySelector('.symptom');
let outbreak = document.querySelector('.outbreak');
let buster = document.querySelector('.busters');
// right-list in faq 
let diseaseList = document.querySelector('.disease-list');
let spreadList = document.querySelector('.spread-list');
let protectList = document.querySelector('.protects-list');
let symptomsList = document.querySelector('.symptom-list');
let outbreakList = document.querySelector('.outbreak-list');
let busterList = document.querySelector('.buster-list');
// when click on borderlink(plus) show panellist and hide borderlink(plus) and
// when click on panellist show borderlink(plus) and hide panellist 
for(let n=0; n<borderLink.length, n<panelList.length, n<panelHeading.length; n++){
    borderLink[n].addEventListener('click',function(){
        borderLink[n].style.display = 'none';
        panelList[n].style.display = 'block';
    });
    panelHeading[n].addEventListener('click',function(){
        borderLink[n].style.display = 'block';
        panelList[n].style.display = 'none';
    });

    //   first panel lists are show
        borderLink[0].style.display = 'none';
        panelList[0].style.display = 'block';

        borderLink[4].style.display = 'none';
        panelList[4].style.display = 'block';

        borderLink[10].style.display = 'none';
        panelList[10].style.display = 'block';

        borderLink[15].style.display = 'none';
        panelList[15].style.display = 'block';

        borderLink[19].style.display = 'none';
        panelList[19].style.display = 'block';

        borderLink[24].style.display = 'none';
        panelList[24].style.display = 'block';
}

// when click on left-list(disease) show right-list(diseaseList)
disease.addEventListener('click',function(){
    diseaseList.style.display = 'block';
    spreadList.style.display = 'none';
    protectList.style.display = 'none';
    symptomsList.style.display = 'none';
    outbreakList.style.display = 'none';
    busterList.style.display = 'none';
});
// when click on left-list(spread) show right-list(spreadList)
spread.addEventListener('click',function(){
    diseaseList.style.display = 'none';
    spreadList.style.display = 'block';
    protectList.style.display = 'none';
    symptomsList.style.display = 'none';
    outbreakList.style.display = 'none';
    busterList.style.display = 'none';
});
// when click on left-list(protect) show right-list(protectList)
protect.addEventListener('click',function(){
    diseaseList.style.display = 'none';
    spreadList.style.display = 'none';
    protectList.style.display = 'block';
    symptomsList.style.display = 'none';
    outbreakList.style.display = 'none';
    busterList.style.display = 'none';
});
// when click on left-list(symptoms) show right-list(symptomsList)
symptoms.addEventListener('click',function(){
    diseaseList.style.display = 'none';
    spreadList.style.display = 'none';
    protectList.style.display = 'none';
    symptomsList.style.display = 'block';
    outbreakList.style.display = 'none';
    busterList.style.display = 'none';
});
// when click on left-list(outbreak) show right-list(outbreakList)
outbreak.addEventListener('click',function(){
    diseaseList.style.display = 'none';
    spreadList.style.display = 'none';
    protectList.style.display = 'none';
    symptomsList.style.display = 'none';
    outbreakList.style.display = 'block';
    busterList.style.display = 'none';
});
// when click on left-list(buster) show right-list(busterList)
buster.addEventListener('click',function(){
    diseaseList.style.display = 'none';
    spreadList.style.display = 'none';
    protectList.style.display = 'none';
    symptomsList.style.display = 'none';
    outbreakList.style.display = 'none';
    busterList.style.display = 'block';
});


// slide-scroll in html,body
let  bodyScroll = document.querySelector('html,body');
let slideScroll = document.querySelector('.slide-scroll');

window.addEventListener('scroll',function(){
    if(bodyScroll.scrollTop > 12){
        slideScroll.style.display = 'block';
    }else{
        slideScroll.style.display = 'none';
    }
});

