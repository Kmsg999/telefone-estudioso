let timer=document.querySelector('#P')
let inicia=document.querySelector('.inicia') 
let para=document.querySelector('.para')
let zera=document.querySelector('.zera')
let p=document.querySelector('#parcial')

 let intervalo=null
 let tmpinit=null
 
 
 
 function contador(){
   const tempatual=Date.now()
   let cont=tempatual-tmpinit
   let seg=(tempatual-tmpinit)/1000
   timer.innerHTML=comverter(seg)
     
  }  
  
  function comverter(seg){
    let hora=Math.floor(seg/3600)
    let resto=seg%3600
    let minuto=Math.floor(resto/60)
    let segundo=Math.floor(resto%60)
    let form=(hora<10?"0"+hora:hora)+":"+(minuto<10?"0"+minuto:minuto)+':'+(segundo<10?"0"+segundo:segundo)
      return form
  }
 
 

inicia.addEventListener('click',function(evt){

    tmpinit=Date.now()
  intervalo=setInterval(contador,1000)
})

para.addEventListener('click',function(evt){
   clearInterval(intervalo) 
})

zera.addEventListener('click',function(evt){
   tmpini=Date.now()
   timer.innerHTML='00:00:00'
   p.innerHTML=""
})


document.querySelector('.parci').addEventListener('click',function parcial(){
   
   let parcial="<div>"+timer.innerHTML+"</div>"
   p.innerHTML+=parcial
   
})
 
 
 

  
