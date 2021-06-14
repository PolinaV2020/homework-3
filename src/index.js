import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text from './Task1';
import Square from './Task2';


ReactDOM.render(
  <React.StrictMode>

    <Text value="Обычный синий текст" fontSize={24} underlined="false" color="blue"/>
    <Text value="Мелкий оранжевый текст" fontSize={12} underlined="false" color="orange"/>
    <Text value="Большой Коралловый текст" fontSize={87} color="coral"/>
    <Text value="Подчёркнуто серый текст" fontSize={56} color="grey" underlined="true"/>

    <Square size={50} color="red" indent={20} borderRadius={50} text="Красный круг"/>
    <Square size={150} color="coral" indent={102} borderRadius={5} text="Коралловый квадрат"/>
    <Square size={50} color="pink" indent={24} borderRadius={0} text="Розовый маленький квадрат"/>
    <Square size={50} color="black" indent={31} borderRadius={30}/>

  </React.StrictMode>,
  document.getElementById('root')
);



