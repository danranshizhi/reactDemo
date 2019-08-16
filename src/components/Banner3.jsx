import React from 'react';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource, isMobile } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    let styles = {
      textAlign: isMobile?'center':'left'
    }
    const children = dataSource.textWrapper.children && dataSource.textWrapper.children.map((item) => {
      return (
        <Col xs={24} sm={12} md={6} lg={6} key={item.name} style={{lineHeight: '50px'}}>
          <Row>
            <Col xs={24} sm={24} md={8} lg={8}>{item.name}:</Col>
            <Col xs={24} sm={24} md={16} lg={16}><Texty type="mask-bottom" style={{styles}}>{item.children}</Texty></Col>
          </Row>
           
        </Col>
      )
      
    });
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          {...dataSource.textWrapper}
        >
          <Row>
            {children}
          </Row>
          
        </QueueAnim>
      </div>
    );
  }
}
export default Banner;
