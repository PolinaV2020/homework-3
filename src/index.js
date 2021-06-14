import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Task2.css';
import Text from './Task1';
import Square from './Task2';


ReactDOM.render(
  <React.StrictMode>

    <Text value="Обычный синий текст" fontSize={24} underlined="false" color="blue"/>
    <Text value="Мелкий оранжевый текст" fontSize={12} underlined="false" color="orange"/>
    <Text value="Большой Коралловый текст" fontSize={87} color="coral"/>
    <Text value="Подчёркнуто серый текст" fontSize={56} color="grey" underlined="true"/>

    <Square cssClass="square-red" label="Красный круг"/>
    <Square cssClass="square-coral" label="Коралловый квадрат"/>
    <Square cssClass="square-pink" label="Розовый маленький квадрат"/>
    

  </React.StrictMode>,
  document.getElementById('root')
);



