import './index.scss';
import React, {useState} from "react";

const questions = [
  {
    title: 'Лето - это ... ?',
    variants: ['пора года', 'кайф', 'не знаю'],
    correct: 0,
  },
  {
    title: 'React- это ... ',
    variants: ['приложение', 'библиотека', 'фреймворк'],
    correct: 1,
  },
  {
    title: 'Что такое JS?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'язык программирования',
    ],
    correct: 2,
  },
    {
        title: 'Как дела?',
        variants: [
            'хорошо',
            'клёво',
            'плохо',
            'терпимо',
        ],
        correct: 1,
    },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
        <a href="/">
            <button>Попробовать снова</button>
        </a>
    </div>
  );
}

function Game({question, onClickVariant, step}) {
    const percent = Math.round(step/ questions.length*100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"/>
      </div>
      <h1>{question.title}</h1>
      <ul>
          {question.variants.map((item, index)=><li onClick={()=>onClickVariant(index)} key={item}>{item}</li>)}
      </ul>
    </>
  );
}

function App() {

    const [step, setStep]= useState(0)
    const [correct, setCorrect]= useState(0)
    const question= questions[step]

    const onClickVariant=(index)=>{
        setStep(step +1)

        if(index === question.correct){
            setCorrect(correct +1)
        }
    }

  return (
    <div className="App">
        {
            step !==questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant}/> : <Result correct={correct}/>
        }
    </div>
  );
}

export default App;
