import React from 'react';
import classNames from 'classnames';
import BlackTheme from './svgFiles/blackTheme';
import WhiteTheme from './svgFiles/whiteTheme';
import BlackLogo from './svgFiles/blackLogo';
import WhiteLogo from './svgFiles/whiteLogo';

import './SvgIcon.less';
import { Popover } from 'antd';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from 'react-dom';

// @ts-nocheck
export default class SvgIconTheme extends React.Component {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(props) {
    super(props);
    this.state = {
      popVisible: false,
    };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  cancellationContent = (themeChange) => {
    return (
      <div className="cancellationTheme">
        <span
          dangerouslySetInnerHTML={{ __html: BlackTheme + '幻夜黑（默认）' }}
          onClick={() => {
            themeChange('black');
            localStorage.setItem('selectedTheme', 'black');
            this.setState({
              popVisible: false,
            });
          }}
        />

        <span
          dangerouslySetInnerHTML={{ __html: WhiteTheme + '商务蓝' }}
          onClick={() => {
            themeChange('white');
            localStorage.setItem('selectedTheme', 'white');
            this.setState({
              popVisible: false,
            });
          }}
        />
      </div>
    );
  };
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  handleVisibleChange = (popVisible) => {
    this.setState({ popVisible });
  };
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    // const {
    //   type,
    //   width,
    //   height,
    //   className,
    //   style,
    //   children,
    //   theme,
    // changeTheme,
    // ...otherProps
    // } = this.props;
    let ThemeColor = this.props.theme === 'black' ? BlackLogo : WhiteLogo;
    // const iconMap = {
    //   BlackTheme,
    //   WhiteTheme,
    // };
    // const iconStr = iconMap[this.props.type];

    return (
      <Popover
        content={this.cancellationContent(this.props.changeTheme)}
        trigger="click"
        visible={this.state.popVisible}
        onVisibleChange={this.handleVisibleChange}
        overlayClassName="namespace"
      >
        <div
          style={{ ...this.props.style }}
          className={classNames('biSvgIcon', 'signOut', this.props.className)}
          {...this.props.otherProps}
          dangerouslySetInnerHTML={{ __html: ThemeColor }}
        />
      </Popover>
    );
  }
}
