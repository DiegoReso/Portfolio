
const git = document.querySelector('#git')
const git_page = document.querySelector('#git-page')
let flagGit = 0

git.addEventListener('click', function(){
  
  if(flagGit === 0 ){
    git_page.classList.add('visible')
    flagGit = 1
    
  }
  else{
    git_page.classList.remove('visible')
    flagGit = 0
    
  }
  
})


const insta = document.querySelector('#insta')
const insta_page = document.querySelector('#insta-page')
let flagInsta = 0

insta.addEventListener('click', function(){
  
  if(flagInsta === 0 ){
    insta_page.classList.add('visible')
    flagInsta = 1
    
  }
  else{
    insta_page.classList.remove('visible')
    flagInsta = 0
    
  }
  
})


const linkedin = document.querySelector('#linkedin')
const linkedin_page = document.querySelector('#linkedin-page')
let flagLinkedin = 0

linkedin.addEventListener('click', function(){
  
  if(flagLinkedin === 0 ){
    linkedin_page.classList.add('visible')
    flagLinkedin = 1
    
  }
  else{
    linkedin_page.classList.remove('visible')
    flagLinkedin = 0
    
  }
  
})



const lists = document.querySelector('#lists')
const spanMenu = document.querySelector('#span')
let flag =0

spanMenu.addEventListener('click', function(){

    if(flag === 0){
      lists.classList.add('visible')
      spanMenu.innerHTML = '<i id="menu" class="fas fa-times fa-lg"></i>'
      flag = 1
    }else{
      flag = 0
      spanMenu.innerHTML= '<i id="menu" class="fas fa-bars fa-lg">'
      lists.classList.remove('visible')
    }
    

})