import React, { useEffect } from 'react';

import './index.less';

interface dataType {
  class: string;
  title: string;
  value: string[];
}

const Waterfall: React.FC<{
  data: dataType[];
}> = (props) => {
  const { data } = props;

  const items = data.map((item, index) => {
    const children = item.value.map((child, i) => {
      return <dd key={(i + child).toString()}>{child}</dd>;
    });
    return (
      <div className="item" key={index.toString()}>
        <h2>{item.title}</h2>
        <dl>{children}</dl>
      </div>
    );
  });

  // 获取最小值
  function getMin(arr: any[] = []) {
    let min = arr[0]; // 假设数组的第一项为最小值
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }

  const setPositon = () => {
    const divContainer = document.getElementById('waterfall-wrap');

    const nextTops = new Array<number>(5); // 数组的长度初始化为列数的个数
    nextTops.fill(0); // 将数组的每一项填充为 0

    // 定位
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < divContainer!.children.length; i++) {
      const img = divContainer!.children[i] as any;
      // 找到数组里面的最小值
      const minTop = getMin(nextTops);
      img.style.top = minTop + 'px';
      const index = nextTops.indexOf(minTop);
      // 高度 = item高度 + 间隙
      nextTops[index] += img.offsetHeight + 0;
      const left = (index + 1) * 20 + index * 180;
      img.style.left = left + 'px';
    }
  };

  useEffect(() => {
    setPositon();
  }, []);

  return (
    <div id="waterfall-wrap" className="waterfall-wrap">
      {items}
    </div>
  );
};

export default Waterfall;
