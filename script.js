let keyboardLanguage;
if (localStorage.getItem('keyboardLanguage')){
  keyboardLanguage = localStorage.getItem('keyboardLanguage');
} else {keyboardLanguage='en'}

function setLocalStorage() {
  localStorage.setItem('keyboardLanguage', keyboardLanguage);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('keyboardLanguage')) {
    let keyboardLanguage = localStorage.getItem('keyboardLanguage');
  }
}
window.addEventListener('onload', getLocalStorage)


let apostrophe, bothNum1, enNum2, enNum3, enNum4, bothNum5, enNum6, enNum7, bothNum8,
    bothNum9, bothNum0, bothMinus, bothPlus, pipe, curlyBracketLeft, curlyBracketRight, colon,
    quotes, angleBracketLeft, angleBracketRight, questionMark, ruNum2, ruNum3, ruNum4, ruNum6,
    ruNum7, slash, comma, arrowUp, arrowLeft, arrowDown, arrowRight;
[apostrophe, bothNum1, enNum2, enNum3, enNum4, bothNum5, enNum6, enNum7, bothNum8,
  bothNum9, bothNum0, bothMinus, bothPlus, pipe, curlyBracketLeft, curlyBracketRight, colon,
  quotes, angleBracketLeft, angleBracketRight, questionMark, ruNum2, ruNum3, ruNum4, ruNum6,
  ruNum7, slash, comma, arrowUp, arrowLeft, arrowDown, arrowRight] = 
 [`<sup>~</sup> <sub>\`</sub>`, `<sup>!</sup> 1`,`<sup>@</sup> 2`,'<sup>#</sup> 3','<sup>$</sup> 4',
  '<sup>%</sup> 5','<sup>^</sup> 6','<sup>&</sup> 7','<sup>*</sup> 8','<sup>(</sup> 9',
  '<sup>)</sup> 0','<sup>_</sup> -','<sup>+</sup> =','<sup>|</sup> \\', '<sup>{</sup> [',
  '<sup>}</sup> ]', '<sup>:</sup> ;', '<sup>"</sup> \'', '<sup>\<</sup> ,', '<sup>\></sup> .',
  '<sup>?</sup> /', '<sup>"</sup> 2', '<sup>№</sup> 3', '<sup>;</sup> 4', '<sup>:</sup> 6',
  '<sup>?</sup> 7', '<sup>/</sup> \\', '<sup>,</sup> .','<img src="assets/img/arrow_drop_up.png" class="button_img" alt="arrow up">',
  '<img src="assets/img/arrow_left.png" class="button_img" alt="arrow left">',
  '<img src="assets/img/arrow_drop_down.png" class="button_img" alt="arrow down">',
  '<img src="assets/img/arrow_right.png" class="button_img" alt="arrow right">'
];

  

let enKeysArr = [
                  [apostrophe, bothNum1,enNum2,enNum3,enNum4,bothNum5,enNum6,enNum7,bothNum8,bothNum9,bothNum0,bothMinus,bothPlus,'Backspace'],
                  ['Tab','Q','W','E','R','T','Y','U','I','O','P',curlyBracketLeft,curlyBracketRight,pipe,'DEL'],
                  ['Caps Lock','A','S','D','F','G','H','J','K','L',colon,quotes,'ENTER'],
                  ['Shift ','Z','X','C','V','B','N','M',angleBracketLeft,angleBracketRight,questionMark,arrowUp,'Shift'],
                  ['Ctrl','Win','Alt',' ','Alt','Ctrl',arrowLeft,arrowDown,arrowRight]
                ]

let ruKeysArr = [
                  ['Ё', bothNum1,ruNum2,ruNum3,ruNum4,bothNum5,ruNum6,ruNum7,bothNum8,bothNum9,bothNum0,bothMinus,bothPlus,'Backspace'],
                  ['Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ',slash,'DEL'],
                  ['Caps Lock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','ENTER'],
                  ['Shift ','Я','Ч','С','М','И','Т','Ь','Б','Ю',comma,arrowUp,'Shift'],
                  ['Ctrl','Win','Alt',' ','Alt','Ctrl',arrowLeft,arrowDown,arrowRight]
                ]

let enKeyNumbers = ["Backquote", "Digit1", "Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9",
  "Digit0", "Minus", "Equal", "BracketLeft","BracketRight","Backslash","Semicolon","Quote","Comma","Period","Slash"];
let ruKeyNumbers = ["Digit1", "Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0", 
  "Minus", "Equal", "Backslash","Slash"];



let keyCodesArr = [
  ["Backquote", "Digit1", "Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0", "Minus", "Equal", "Backspace", "Delete"],
  ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash"],
  ["CapsLock", "KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],
  ["ShiftLeft", "KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM", "BracketLeft","BracketRight","Slash","ArrowUp", "ShiftRight"],
  ["ControlLeft","MetaLeft","AltLeft", "Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"]
]

function createPageHTML(){
  document.body.insertAdjacentHTML('afterbegin', 
  ` <main class="main">
  <div class="container">
      <textarea autofocus class="keyboard-input" rows="5" cols="69"></textarea>
      <div class="keyboard main__keyboard">
      </div>
      <p class="information">Клавиатура создана в операционной системе Windows</p>
      <p class="information">Чтобы переключить язык нажмите комбинацию клавиш <span class="text text_important">Shift + Alt</span></p>
  </div>
</main>`)
}

createPageHTML()


function determineClass(i, index){
  let className = keyCodesArr[i][index];
      return `button_${className}`
  }




function createKeyboard(){
  let keyboard = document.querySelector('.keyboard');
  keyboard.insertAdjacentHTML('afterbegin', 
  `<div class="keyboard__line"></div>
  <div class="keyboard__line"></div>
  <div class="keyboard__line"></div>
  <div class="keyboard__line"></div>
  <div class="keyboard__line"></div>`
  )
  let keyboardLine = document.querySelectorAll(".keyboard__line")
  if(keyboardLanguage === 'en'){
    for(let i=0; i<enKeysArr.length; i++){
      enKeysArr[i].forEach((item, index)=>{
          function createKey(item, index){
            let keyButton=document.createElement('button');
            let buttonClass = determineClass(i, index);
            keyButton.className=`button ${buttonClass}`;
            keyButton.insertAdjacentHTML('afterbegin', item);
            keyboardLine[i].appendChild(keyButton);
          }
          createKey(item, index);
      })
    }
  }  
  if(keyboardLanguage === 'ru'){
    for(let i=0; i<ruKeysArr.length; i++){
      ruKeysArr[i].forEach((item, index)=>{
          function createKey(item, index){
            let keyButton=document.createElement('button');
            let buttonClass = determineClass(i, index);
            keyButton.className=`button ${buttonClass}`;
            keyButton.insertAdjacentHTML('afterbegin', item);
            keyboardLine[i].appendChild(keyButton);
          }
          createKey(item, index);
      })
    }
  }
}

setTimeout (createKeyboard, 1)

function changeLanguage (){
  let keyboard = document.querySelector('.keyboard');
  while (keyboard.firstChild) {
    keyboard.removeChild(keyboard.firstChild);
  }
  if(keyboardLanguage === 'en'){ 
    keyboardLanguage = 'ru'
    createKeyboard();
  } else {keyboardLanguage = 'en'
  createKeyboard();
}
}

class Stack { 
  constructor() { 
    this.stack = [];  
  } 

  size() { 
   return this.stack.length; 
  } 

  showValue(){
    return this.stack;
  }

  insert(element,position) { 
    if(position===this.stack.length){
      this.stack.push(element);
    } else {
      this.stack.splice(position,0,element)
    }
  }

  delete(position){ 
    if(position===this.stack.length){
    } else {
      this.stack.splice((position),1)
    }
  }

  backspace(position){ 
    this.stack.splice((position-1),1)
    }
 
  // pop() { 
  //   return this.stack.pop(); 

  // } 

  // peek() { 
  //   return this.stack[this.stack.length-1] 
  // }
} 

let capsLock=false;
function toggleCapsLock(){
  if (capsLock === true){
    capsLock=false;
  } else {
    capsLock=true;
  }
}

const inputValue= new Stack()
let position = 0;

document.addEventListener('keydown', (event) => {
  if(!(event.altKey || event.ctrlKey || event.metaKey)){
  let keyCode = event.code;
  let input = document.querySelector('.keyboard-input');
  let shift;

  event.preventDefault();
  

  let button = document.querySelectorAll(".button")
  button.forEach ((item)=>{
    if(item.classList.contains(`button_${keyCode}`)){

      item.classList.add('button_pressed');
      item.classList.add('button_active');
      
      document.addEventListener('keyup', (event)=>{
        let keyCode2=event.code;
        if(item.classList.contains(`button_${keyCode2}`)){
          item.classList.remove('button_pressed');
          item.classList.remove('button_active');
          document.removeEventListener('keyup', ()=>{
            item.classList.remove('button_pressed');
            item.classList.remove('button_active');
          });
        }
       
      })
        
    }
  })

  if(keyCode==='Backspace') {
    if (position!==0){
      inputValue.backspace(position); 
      position--;
      input.value = inputValue.stack.join('');
    }
  }

  if(keyCode==='Tab') {
    inputValue.insert('   ', position);
    input.value = inputValue.stack.join('');
    position++;  
  }
  
  if(keyCode==='CapsLock'){
    toggleCapsLock();
  }

  if(keyCode==="Enter") {
    inputValue.insert('\r\n', position);
    input.value = inputValue.stack.join('');
    position++;  
  }

  if(keyCode==="Delete") {
    inputValue.delete(position);
    input.value = inputValue.stack.join('');
    input.setSelectionRange(position, position); 
  }

  if(keyCode==="ArrowLeft") {
    if(position>0){
      position--;  
      input.setSelectionRange(position, position);
    }
  }

  if(keyCode==="ArrowRight") {
    let length=inputValue.size();
    if(position<length){
      position++;  
      input.setSelectionRange(position, position);
    } 
  }

  if(keyCode==="Space"){
    inputValue.insert(' ', position);
    input.value = inputValue.stack.join('');
    position++;  
  }

  if (keyCode === 'Shift') {
    return
  }

  if (event.shiftKey){
    if (keyCode === 'AltLeft' || keyCode === 'AltRight' ){
       changeLanguage();
  } 
  else {
    shift=true;
    insertKey(keyCode, keyboardLanguage, shift, capsLock);    
  }
  } 

  if(!event.shiftKey){
    shift=false;
    insertKey(keyCode, keyboardLanguage, shift, capsLock);
  }

  async function insertKey(keyCode, keyboardLanguage, shift, capsLock) { 
    let inputKey;
    let cL=capsLock;
    const keyboardKeys = 'data.json';
    const res = await fetch(keyboardKeys);
    const data = await res.json();
    if ((keyboardLanguage === 'en' && enKeyNumbers.includes(keyCode)) || (keyboardLanguage === 'ru' && ruKeyNumbers.includes(keyCode))){
      cL=false;
    }
    if (shift === cL){
      data.forEach((item)=>{
        if(item.eventCode === keyCode){
          if (keyboardLanguage === 'en'){
            inputKey=item.enNoShift
          }
          if (keyboardLanguage === 'ru'){
            inputKey=item.ruNoShift
          }
          inputValue.insert(inputKey,position);
          input.value = inputValue.stack.join('');
          position++;
        }
      })
    } else {
      data.forEach((item)=>{
        if(item.eventCode === keyCode){
          if (keyboardLanguage === 'en'){
            inputKey=item.enShift
          }
          if (keyboardLanguage === 'ru'){
            inputKey=item.ruShift
          }
          inputValue.insert(inputKey,position);
          input.value = inputValue.stack.join('');
          position++;
        }
      })
    }
  }
} 
});





document.addEventListener('click', (event) => {
  let targetKey = event.target;
  console.log(position)
  let input = document.querySelector('.keyboard-input');
  let shift;
  // event.preventDefault();


    for (let i=0; i<keyCodesArr.length; i++){
      keyCodesArr[i].forEach((item)=>{
        if (targetKey.classList.contains(`button_${item}`)){
console.log(item)
if(item === 'Backspace') {
    if (position!==0){
      inputValue.backspace(position); 
      position--;
      input.value = inputValue.stack.join('');
    }
  }

  if(item==='Tab') {
    inputValue.insert('   ', position);
    console.log(inputValue.stack.join(''))
    input.value = inputValue.stack.join('');
    position++;  
  }
  
  if(item==='CapsLock'){
    toggleCapsLock();
  }

  if(item==="Enter") {
    inputValue.insert('\r\n', position);
    input.value = inputValue.stack.join('');
    position++;  
  }

  if(item==="Delete") {
    inputValue.delete(position);
    input.value = inputValue.stack.join('');
    input.setSelectionRange(position, position); 
  }

  if(item==="ArrowLeft") {
    if(position>0){
      position--;  
      input.setSelectionRange(position, position);
    }
  }

  if(item==="ArrowRight") {
    let length=inputValue.size();
    if(position<length){
      position++;  
      input.setSelectionRange(position, position);
    } 
  }

  if(item==="Space"){
    inputValue.insert(' ', position);
    input.value = inputValue.stack.join('');
    position++;  
  }

  if (item === 'Shift') {
    return
  }

  if (event.shiftKey){
    if (item === 'AltLeft' || item === 'AltRight' ){
       changeLanguage();
  } 
  else {
    shift=true;
    insertKey(item, keyboardLanguage, shift, capsLock);    
  }
  } 

  if(!event.shiftKey){
    console.log('hj')
    shift=false;
    insertKey(item, keyboardLanguage, shift, capsLock);
  }

          async function insertKey(item, keyboardLanguage, shift, capsLock) { 
            let inputKey;
            let cL=capsLock;
            const keyboardKeys = 'data.json';
            const res = await fetch(keyboardKeys);
            const data = await res.json();
            if ((keyboardLanguage === 'en' && enKeyNumbers.includes(item)) || (keyboardLanguage === 'ru' && ruKeyNumbers.includes(item))){
              cL=false;
            }
            if (shift === cL){
              data.forEach((element)=>{
                if(element.eventCode === item){
                  if (keyboardLanguage === 'en'){
                    inputKey=element.enNoShift
                  }
                  if (keyboardLanguage === 'ru'){
                    inputKey=element.ruNoShift
                  }
                  inputValue.insert(inputKey,position);
                  input.value = inputValue.stack.join('');
                  position++;
                }
              })
            } else {
              data.forEach((element)=>{
                if(element.eventCode === item){
                  if (keyboardLanguage === 'en'){
                    inputKey=element.enShift
                  }
                  if (keyboardLanguage === 'ru'){
                    inputKey=element.ruShift
                  }
                  inputValue.insert(inputKey,position);
                  input.value = inputValue.stack.join('');
                  position++;
                }
              })
            }
          }
        }
      })
    }
    
    input.setSelectionRange(position, position);
    input.focus();
  }
)

  //     item.classList.add('button_pressed');
      
  //     document.addEventListener('keyup', (event)=>{
  //       let keyCode2=event.code;
  //       if(item.classList.contains(`button_${keyCode2}`)){
  //         item.classList.remove('button_pressed');
  //         document.removeEventListener('keyup', ()=>{
  //           item.classList.remove('button_pressed')
  //         });
  //       }
       
  //     })
        
  //   }
  // })

  





//let inputKeysEn = []





// document.addEventListener('keyup', (event) => {
//   const keyName = event.key;

//   // Как только пользователь отпустит клавишу Ctrl, то она больше не будет активной.
//   // Поэтому event.ctrlKey = false.
//   if (keyName === 'Control') {
//     alert('Control key was released');
//   }
// }, false);


// function showSymbol(){
//   console.log(event.code)
// }
// ;
// input.addEventListener('keydown', showSymbol);




