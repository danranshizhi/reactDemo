import React, { Component } from 'react'
import { Row } from 'antd'; 
import Header from './header'
import BasicInfosComponent from './Banner3'
import WorkExperienceComponent from './Content9'
import PersonalSkillComponent from './Content8'
import { enquireScreen } from 'enquire-js';
import { Nav20DataSource, Banner30DataSource, Content80DataSource,Content90DataSource } from '../config/config.js'
import '../static/less/antMotionStyle.less'
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile
    };
  }

  componentDidMount() {
    const MobileCondition = 'only screen and (max-width: 576px)';

    // mobile 屏幕断点（576px)
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    }, MobileCondition);
  }



  render() {
    return (
      <Row>
        <Header
          id="Nav2_0"
          key="Nav2_0"
          dataSource={Nav20DataSource}
          isMobile={this.state.isMobile}
        />
        <BasicInfosComponent
          id="Banner3_0"
          key="Banner3_0"
          dataSource={Banner30DataSource}
          isMobile={this.state.isMobile}
        />
        <PersonalSkillComponent
          id="Content8_0"
          key="Content8_0"
          dataSource={Content80DataSource}
          isMobile={this.state.isMobile}
        />
        <WorkExperienceComponent
          id="Content9_0"
          key="Content9_0"
          dataSource={Content90DataSource}
          isMobile={this.state.isMobile}
        />
        
      </Row>
    )
  }
}

export default MainComponent