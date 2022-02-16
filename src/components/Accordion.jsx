import React, { useState} from "react";


export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index)
};


const renderedList = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : ''
    return (
      <div key={item.title}>
        <div
          onClick={() => {
            onTitleClick(index);
          }}
          className="ui styled fluid accordion segment"
        >
          <div className={`${active} title`}>
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className={`${active} content`}>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
  <div>
      {renderedList}
  </div>
  );
}
