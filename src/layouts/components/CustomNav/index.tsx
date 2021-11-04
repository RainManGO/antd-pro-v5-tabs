import React from 'react';
import './index.less';
import { Checkbox, Button, Row, Col, Space } from 'antd';
import returnImg from '@/assets/return.png';

const CustomNav: React.FC<{
  data: any;
}> = (props) => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  console.log(props);

  return (
    <div className="custom-nav-comp">
      <div className="header">
        <div className="title">自定义导航</div>
        <img src={returnImg} alt="图标加载失败" />
      </div>
      <div className="content">
        <div className="left">
          <ul>
            <li>
              <div className="item">
                <div className="text">费用报销单</div>
                <img src={returnImg} alt="图标加载失败" />
              </div>
            </li>
            <li>
              <div className="item">
                <div className="text">费用报销单费用报销单费用报销单</div>
                <img src={returnImg} alt="图标加载失败" />
              </div>
            </li>
            <li>
              <div className="item">
                <div className="text">费用报销单</div>
                <img src={returnImg} alt="图标加载失败" />
              </div>
            </li>
            <li>
              <div className="item">
                <div className="text">费用报销单</div>
                <img src={returnImg} alt="图标加载失败" />
              </div>
            </li>
            <li>
              <div className="item">
                <div className="text">费用报销单</div>
                <img src={returnImg} alt="图标加载失败" />
              </div>
            </li>
            <li>
              <div className="item">
                <div className="text">费用报销单</div>
                <img src={returnImg} alt="图标加载失败" />
              </div>
            </li>
            <li>
              <div className="item">
                <div className="text">费用报销单</div>
                <img src={returnImg} alt="图标加载失败" />
              </div>
            </li>
          </ul>
          <div className="tip">
            {8} <span>/15</span>
          </div>
        </div>
        <div className="right">
          <div className="position">
            <ul>
              <li>
                <div className="title">采购报销</div>
                <div className="items">
                  <dl>
                    <dd>
                      <Checkbox value={898} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={889} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={33} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={22} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={'字符串'} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                  </dl>
                </div>
              </li>
              <li>
                <div className="title">采购报销</div>
                <div className="items">
                  <dl>
                    <dd>
                      <Checkbox value={898} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={889} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={33} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={22} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={'字符串'} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                  </dl>
                </div>
              </li>
              <li>
                <div className="title">采购报销</div>
                <div className="items">
                  <dl>
                    <dd>
                      <Checkbox value={898} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={889} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={33} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={22} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={'字符串'} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                  </dl>
                </div>
              </li>
              <li>
                <div className="title">采购报销</div>
                <div className="items">
                  <dl>
                    <dd>
                      <Checkbox value={898} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={889} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={33} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={22} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={'字符串'} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                  </dl>
                </div>
              </li>
              <li>
                <div className="title">采购报销</div>
                <div className="items">
                  <dl>
                    <dd>
                      <Checkbox value={898} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={889} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={33} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={22} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={'字符串'} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                  </dl>
                </div>
              </li>
              <li>
                <div className="title">采购报销</div>
                <div className="items">
                  <dl>
                    <dd>
                      <Checkbox value={898} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={889} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={33} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={22} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={'字符串'} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                  </dl>
                </div>
              </li>
              <li>
                <div className="title">采购报销</div>
                <div className="items">
                  <dl>
                    <dd>
                      <Checkbox value={898} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={889} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={33} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={22} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                    <dd>
                      <Checkbox value={'字符串'} onChange={onChange} />
                      <div>费用费用报销单费用报销单报销单</div>
                    </dd>
                  </dl>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <Row>
          <Space size="large">
            <Col>
              <Button type="primary">确定</Button>
            </Col>
            <Col>
              <Button type="primary">取消</Button>
            </Col>
          </Space>
        </Row>
      </div>
    </div>
  );
};

export default CustomNav;
