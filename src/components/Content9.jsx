import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { getChildrenToRender } from './utils';
let styles = {
  listStyleType: "circle"
}
class Content9 extends React.PureComponent {
  getBlockChildren = (block, i) => {
    const { isMobile } = this.props;
    const item = block.children;
    const itemContent = item.content.children && item.content.children.map((val, i) => (
      <li key={i.toString()}>
        {val}
      </li>
    ));
    const textWrapper = (
      <QueueAnim
        key="text"
        leaveReverse
        delay={isMobile ? [0, 100] : 0}
        {...item.textWrapper}
      >
        <div key="time" {...item.time}>
          {item.time.children}
        </div>
        <h2 key="title" {...item.title}>
          <i {...item.icon}>
            <img src={item.icon.children} alt="img" />
          </i>
          {item.title.children}
        </h2>
        <div key="p" {...item.content}>
          <ul style={styles}>
            {itemContent}
          </ul>
          
        </div>
      </QueueAnim>
    );
    return (
      <OverPack key={i.toString()} {...block}>
        {isMobile && textWrapper}
        <QueueAnim
          className="image-wrapper"
          key="image"
          type={isMobile ? 'right' : 'bottom'}
          leaveReverse
          delay={isMobile ? [100, 0] : 0}
          {...item.imgWrapper}
        >
          <div key="name" className="name-wrapper">
            <div key="name" {...item.name}  onClick={()=>{window.open(item.name.href)}} title="点我查看">
              {item.name.children}
            </div>
          </div>
        </QueueAnim>

        {!isMobile && textWrapper}
      </OverPack>
    );
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const children = dataSource.block.children.map(this.getBlockChildren);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <div {...dataSource.block}>{children}</div>
        </div>
      </div>
    );
  }
}

export default Content9;
