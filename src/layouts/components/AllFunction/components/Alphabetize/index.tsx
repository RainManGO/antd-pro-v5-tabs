import React from 'react';

import './index.less';

type dataType = {
  class: string;
  value: string[];
};
const Alphabetize: React.FC<{
  data: dataType[];
}> = (props) => {
  const { data } = props;

  const navRightArr: JSX.Element[] = [];

  const items = data.map((item, index) => {
    navRightArr.push(<li>{item.class}</li>);
    const childrenArr = item.value.map((children, i) => {
      return <dd key={`${children + i}`}>{children}</dd>;
    });
    return (
      <div className="content-item" key={index}>
        <div className="title">{item.class}</div>
        <dl>{childrenArr}</dl>
      </div>
    );
  });

  return (
    <div className="alphabetize-wrap">
      <div className="content-wrap">{items}</div>
      <div className="nav-right">
        <ul>{navRightArr}</ul>
      </div>
    </div>
  );
};

export default Alphabetize;
