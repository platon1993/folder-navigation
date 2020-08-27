import React, { useState, useCallback } from "react";
import FolderClose from "./icons/FolderClose";
import FolderOpen from "./icons/FolderOpen";
import FolderArrow from "./icons/FolderArrow";
import '../App.css';

function Menu({folders, title = "Folders", color = "#919191", activeColor = "#4640de", background = "#f5f5f5"}) {
const [items, setItems] = useState({});

const handle = useCallback((key) => (e) => {
      setItems({ ...items, [key]: !items[key] });
    },
    [items]
);

function FoldersList({folders}) {
  const items = folders ? 
        folders.map((item, index) =>
            <Item key={item.id}
                  value={item} 
                  />) : <></>
  return (
    <div>
      {items}
    </div>
  );
}

function Item({value}) {
    return <div>
            <div className="item" 
                onClick={handle(value.id)}
                >
              <div className="icon">
                  {items[value.id] ? 
                      <FolderOpen color={activeColor} />
                      :
                      <FolderClose color={color}/>
                  }  
              </div>
              {/* <div className={'' + (items[value.id] && 'active')} > */}
              <div style={{color: items[value.id] && activeColor}} >
                  {value.title}
              </div>
              <div className={'arrow'}>
                  {items[value.id] && value.sub && <FolderArrow color={activeColor}/>}  
              </div>  
            </div>
              {items[value.id] && value.sub && 
              <div className="subMenu">
                 <FoldersList folders={value.sub} />
              </div> 
              } 
           </div>
  }

  if(!folders) return null;

  return (
    <div className="menu" style={{backgroundColor : background}}>
     <div className="title">
         {title}
     </div>
     <FoldersList folders={folders} />
    </div>
  );
}

export default Menu;
