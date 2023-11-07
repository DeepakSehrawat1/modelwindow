'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

 let showModel = document.querySelectorAll('.show-modal');  //querselector can select only first element if multiple element share class name or same name , so we need to use queryselectorall
                                                            //to get a nodelist of all the element with this class name
let closeModel = document.querySelector('.close-modal');

let closefn = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')          // this function remove hidden class from modal and overlay element;
};

let addfn = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')            // this function add hidden class from modal and overlay element;
};

for(let i=0 ;i<showModel.length;i++)
    showModel[i].addEventListener('click',closefn);                 //when we click any of 3 boxes closefn is called automatically



closeModel.addEventListener('click',addfn);                          //when we click at cross button or any where in overlay addfn is called automatically

overlay.addEventListener('click',addfn);                //when we need to add some extra html/css upon some event then  this method adding removing 
                                                        //class name is best, as put all properties to add/remove in one class name and then add remove according to choice of events

                                                        
document.addEventListener('keydown',function(e){                    //if escape button is pressesed than hidden class name is added
    if(e.key ==='Escape' && !modal.classList.contains('hidden')){
        modal.classList.add('hidden');
        overlay.classList.add('hidden') 
    }
})                                                        

