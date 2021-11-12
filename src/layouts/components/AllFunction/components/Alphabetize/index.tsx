import React from 'react';

import './index.less';

interface dataType {
  class: string;
  title: string;
  value: string[];
}
const Alphabetize: React.FC<{
  data: dataType[];
}> = (props) => {
  const { data } = props;

  const navRightArr: JSX.Element[] = [];

  const items = data.map((item, index) => {
    navRightArr.push(
      <li>
        <a href={`#${item.class}`}>{item.class}</a>
      </li>,
    );
    const childrenArr = item.value.map((children, i) => {
      return <dd key={`${children + i}`}>{children}</dd>;
    });
    return (
      <div className="content-item" key={index.toString()}>
        <div className="title-alphabet" id={item.class}>
          {item.class}
        </div>
        <dl>{childrenArr}</dl>
      </div>
    );
  });

  return (
    <div className="alphabetize-wrap">
      <div className="relative">
        <div className="content-wrap">{items}</div>
      </div>
      <div className="nav-right">
        <ul>{navRightArr}</ul>
      </div>
    </div>
  );
};

export default Alphabetize;
