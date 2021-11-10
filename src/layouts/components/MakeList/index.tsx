import React from 'react';
import './index.less';

// 导入icon
import clockIcon from '@/assets/clock.png';
import RightOutlined from '@ant-design/icons/lib/icons/RightOutlined';

const MakeList: React.FC<{
  data: any;
}> = (props) => {
  console.log(props);

  const items: any = {
    recently: ['费用报销单', '出差申请单', '差率报销单', '功能名称功能名称功功能名称功能名称功能'],
    nav: [
      {
        name: '存货业务0',
        children: [
          '对外付款单对外付款单对外付款单',
          '对外付款手工填单',
          '对外付款被动扣款单',
          '对外付款预付款单',
          '税费及行政性收费缴',
          '工资薪酬发放单',
          '社保公积金缴纳单',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
        ],
      },
      {
        name: '存货业务1',
        children: [
          '对外付款单',
          '对外付款手工填单',
          '对外付款被动扣款单',
          '对外付款预付款单',
          '税费及行政性收费缴',
          '工资薪酬发放单',
          '社保公积金缴纳单',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
        ],
      },
      {
        name: '存货业务2',
        children: [
          '对外付款单',
          '对外付款手工填单',
          '对外付款被动扣款单',
          '对外付款预付款单',
          '税费及行政性收费缴',
          '工资薪酬发放单',
          '社保公积金缴纳单',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
        ],
      },
      {
        name: '存货业务3',
        children: [
          '对外付款单',
          '对外付款手工填单',
          '对外付款被动扣款单',
          '对外付款预付款单',
          '税费及行政性收费缴',
          '工资薪酬发放单',
          '社保公积金缴纳单',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
        ],
      },
      {
        name: '存货业务4',
        children: [
          '对外付款单',
          '对外付款手工填单',
          '对外付款被动扣款单',
          '对外付款预付款单',
          '税费及行政性收费缴',
          '工资薪酬发放单',
          '社保公积金缴纳单',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
        ],
      },
      {
        name: '存货业务5',
        children: [
          '对外付款单',
          '对外付款手工填单',
          '对外付款被动扣款单',
          '对外付款预付款单',
          '税费及行政性收费缴',
          '工资薪酬发放单',
          '社保公积金缴纳单',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
        ],
      },
      {
        name: '存货业务6',
        children: [
          '对外付款单',
          '对外付款手工填单',
          '对外付款被动扣款单',
          '对外付款预付款单',
          '税费及行政性收费缴',
          '工资薪酬发放单',
          '社保公积金缴纳单',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
        ],
      },
      {
        name: '存货业务7',
        children: [
          '对外付款单对外付款单对外付款单',
          '对外付款手工填单',
          '对外付款被动扣款单',
          '对外付款预付款单',
          '税费及行政性收费缴',
          '工资薪酬发放单',
          '社保公积金缴纳单',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
          '功能名称功能名称功能',
        ],
      },
    ],
  };

  const recentlyItems = items.recently.map((item: string, index: number) => {
    return <dd key={item + index.toString()}>{item}</dd>;
  });

  const oneNavItems = items.nav.map((item: { name: string; children: string[] }, index: number) => {
    const twoNavItems = item.children.map((twoNav: string, i: number) => {
      return (
        <dd key={i.toString() + twoNav}>
          <p>{twoNav}</p>
        </dd>
      );
    });
    return (
      <dd key={index.toString()}>
        <p>{item.name}</p>
        <div>
          <RightOutlined />
        </div>
        <div className="two-nav">
          <dl>
            <dt>{item.name}</dt>
            {twoNavItems}
          </dl>
        </div>
      </dd>
    );
  });
  return (
    <div className="makelist-wrap">
      <div className="one-nav-all">
        <dl className="recently-used-dl">
          <dt>
            <img src={clockIcon} alt="图片加载失败..." />
            <p>最近使用</p>
          </dt>
          {recentlyItems}
        </dl>
        <div className="one-nav">
          <dl className="one-nav-dl">{oneNavItems}</dl>
        </div>
      </div>
    </div>
  );
};

export default MakeList;
