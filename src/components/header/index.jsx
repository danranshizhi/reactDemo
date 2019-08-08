// import React from 'react'
// import { Link } from 'rc-scroll-anim';
// import { Row, Col} from 'antd'
// import TweenOne from 'rc-tween-one';
// import './header.less'

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       phoneOpen: false,
//       menuHeight: 0,
//     };
//     this.menu = React.createRef();
//   }

//   /*
//   componentDidMount() {
//     // 如果是 react 16.3 以下版本请使用 findDOMNode;
//     this.menuDom = findDOMNode(this.menu);
//   }
//   */
//   phoneClick = () => {
//     const phoneOpen = !this.state.phoneOpen;
//     this.setState({
//       phoneOpen,
//       menuHeight: phoneOpen ? this.menu.current.dom.scrollHeight : 0,
//     });
//   };
//   render() {
//     const { ...props } = this.props;
//     const { dataSource, isMobile } = props;
//     console.log("dddd",props)
//     delete props.dataSource;
//     delete props.isMobile;
//     const { menuHeight, phoneOpen } = this.state;
//     const navData = dataSource.Menu.children;
//     const navChildren = Object.keys(navData).map((key, i) => (
//       <Link key={i.toString()} {...navData[key]}>
//         {navData[key].children}
//       </Link>
//     ));
//     return (
//       <TweenOne
//         component="header"
//         animation={{ opacity: 0, type: 'from' }}
//         {...dataSource.wrapper}
//         {...props}
//         style={{ position: 'fixed' }}
//       >
//         <Row type="flex" justify="center">
//           <Col xs={24} sm={24} md={22} lg={22} xl={18}>
//             <div
//               {...dataSource.page}
//               className={dataSource.page.className}
//             >
//               <TweenOne
//                 animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
//                 {...dataSource.logo}
//               >
//                 <img height="75" src={dataSource.logo.children} alt="img" />
//               </TweenOne>
//               {isMobile && (
//                 <div
//                   {...dataSource.mobileMenu}
//                   onClick={() => {
//                     this.phoneClick();
//                   }}
//                 >
//                   <em />
//                   <em />
//                   <em />
//                 </div>
//               )}
//               <TweenOne
//                 {...dataSource.Menu}
//                 animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
//                 ref={this.menu}
//                 style={isMobile ? { height: menuHeight } : null}
//               >
//                 {navChildren}
//               </TweenOne>
//             </div>
//           </Col>
//         </Row>
//       </TweenOne>
//     )
//   }
// }

// export default Header;


import React from 'react';
import TweenOne from 'rc-tween-one';
import { Link } from 'rc-scroll-anim';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
      menuHeight: 0,
    };
    this.menu = React.createRef();
  }

  /*
  componentDidMount() {
    // 如果是 react 16.3 以下版本请使用 findDOMNode;
    this.menuDom = findDOMNode(this.menu);
  }
  */

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
      menuHeight: phoneOpen ? this.menu.current.dom.scrollHeight : 0,
    });
  };

  render() {
    const { ...props } = this.props;
    const { dataSource, isMobile } = props;
    delete props.dataSource;
    delete props.isMobile;
    const { menuHeight, phoneOpen } = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = Object.keys(navData).map((key, i) => (
      <Link key={i.toString()} {...navData[key]}>
        {navData[key].children}
      </Link>
    ));
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.logo}
          >
            <img height="75" src={dataSource.logo.children} alt="img" />
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
            ref={this.menu} // {(c) => { this.menu = c; }}
            style={isMobile ? { height: menuHeight } : null}
          >
            {navChildren}
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;

