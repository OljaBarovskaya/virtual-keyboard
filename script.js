let keyboardLanguage = 'ru';

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

function createPageHTML(){
  document.body.insertAdjacentHTML('afterbegin', 
  ` <main class="main">
  <div class="container">
      <textarea class="keyboard-input" rows="10"></textarea>
      <div class="keyboard main__keyboard">
        <div class="keyboard__line"></div>
        <div class="keyboard__line"></div>
        <div class="keyboard__line"></div>
        <div class="keyboard__line"></div>
        <div class="keyboard__line"></div>
      </div>
      <p class="information">Клавиатура создана в операционной системе Windows</p>
      <p class="information">Чтобы переключить язык нажмите комбинацию клавиш <span class="text text_important">Shift + Alt</span></p>
  </div>
</main>`)
}

createPageHTML()


function determineClass(item, index){
  if (item==='' && index===11){
    return 'button_width_standard button_arrow-up';
  }
  if (item==='' && index===6){
    return 'button_width_standard button_arrow-left';
  }
  if (item==='' && index===7){
    return 'button_width_standard button_arrow-down';
  }
  if (item==='' && index===8){
    return 'button_width_standard button_arrow-right';
  }
  switch (item) {
    case 'Backspace':
      return 'button_width_3';
    case 'Shift ':
        return 'button_width_grow'
    case 'Tab':
      return 'button_width_grow';
    case 'Caps Lock':
      return 'button_width_3';
    case 'ENTER':
      return 'button_width_grow';
    case 'Ctrl':
      return 'button_width_1-5';
    case ' ':
      return 'button_width_grow';
    default:
      return 'button_width_standard';
  }
}




let keyboardHTMLArr =[]

function createKeyboard(){
  let keyboard = document.querySelectorAll(".keyboard__line")
  if(keyboardLanguage === 'en'){
    for(let i=0; i<enKeysArr.length; i++){
      enKeysArr[i].forEach((item, index)=>{
          function createKey(item, index){
            let keyButton=document.createElement('button');
            let buttonClass = determineClass(item, index);
            keyButton.className=`button ${buttonClass}`;
            keyButton.insertAdjacentHTML('afterbegin', item);
            keyboard[i].appendChild(keyButton);
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
            let buttonClass = determineClass(item, index);
            keyButton.className=`button ${buttonClass}`;
            keyButton.insertAdjacentHTML('afterbegin', item);
            keyboard[i].appendChild(keyButton);
          }
          createKey(item, index);
      })
    }
  }
}

createKeyboard()
