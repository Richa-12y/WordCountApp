const textarea = document.querySelector('textarea')
textarea.addEventListener('input', () => {
 
 // Word count
const text = textarea.value;
const wordLength= text.replace( /\n/g, " " ).split(' ').filter((el) => el !=='').length
// console.log(text.split(' '))
document.getElementById('word-count').innerHTML=wordLength

// we create one funcation and pass the paremeter and arug 
const styleText = (countId, textId , actualValue ,lowerange,upperRange) => {
     if(actualValue>lowerange &&  actualValue <upperRange){
          document.getElementById(countId).style.color='yellow'
          document.getElementById(textId).style.color='yellow'
     
     }
     else if(actualValue>=0 && actualValue<=lowerange){
          document.getElementById(countId).style.color='green'
          document.getElementById(textId).style.color='green'
     
     }
     else{
          document.getElementById(countId).style.color='red'
          document.getElementById(textId).style.color='red'
     
     }
}
styleText('word-count','word',wordLength,5,10)
// console.log(text)
//   charac-count
const findlenth=text.length
document.getElementById('charac-count').innerHTML=findlenth

styleText('charac-count','charac',findlenth,30,50)
//   charac-line

const lines = text.split("\n");
// console.log(lines)
const count = lines.length;
document.getElementById('charac-line').innerHTML=count
styleText('charac-line','charLin',count,3,8)
// console.log(findlenth);

})



//this function clear all the words charc and line after clicking on button
function clearValue() {
document.getElementById('tweet').value = '';
document.getElementById('word-count').innerHTML=0
document.getElementById('charac-count').innerHTML=0
document.getElementById('charac-line').innerHTML=0
document.getElementById('word-count').style.color='white'
document.getElementById('word').style.color='white'
document.getElementById('charac-count').style.color='white'
document.getElementById('charac').style.color='white'
document.getElementById('charac-line').style.color='white'
document.getElementById('charLin').style.color='white'

}
//this functaion generate the automatice greeting
document.addEventListener('click',mouseClick);
function mouseClick() {
      let todatDay=new Date();
      let hourse=todatDay.getHours()
      console.log(hourse)
      if(hourse>=6 && hourse<12){
      document.querySelector("#greeting").innerHTML='Good Morning 🌞'
      }
      else if(hourse>12 && hourse<16){
           document.querySelector("#greeting").innerHTML='Good Afternoon 🕑'

      }
      else if(hourse>=16 && hourse<19){
           document.querySelector("#greeting").innerHTML='Good Evening 🌆'

      }
      else{
           document.querySelector("#greeting").innerHTML='Good night 🌝'

      }

 }
