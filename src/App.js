import React from 'react';
import Menu from './components/menu';
import './App.css';

function App() {

  const folders = [
    {id:1, title:"title 1"}, 
    {id:2, title:"title 2", sub:[
      {id:4, title:"sub title 1", sub:[ 
        {id:6, title:"sub-sub title 1"},
        {id:7, title:"sub-sub title 2"},
        {id:8, title:"sub-sub title 3"}],
      },
      {id:5, title:"sub title 2"},
      ]},
    {id:3, title: "title 3"}];

  return (
    <div>
      <Menu 
         title = "Folders"
         color = "#919191"
         activeColor = "#4640de"
         background = "#f5f5f5"
         folders = {folders}
      />
    </div>
  );
}

export default App;
