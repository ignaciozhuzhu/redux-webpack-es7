import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Lazyload from 'react-lazyload';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import { lazyload } from 'react-lazyload';
//import Operation from './Operation.js';
//import MyComponent from './MyComponent';


const EventCalendar = require('react-event-calendar');

const events = [{
  start: '2015-07-20',
  end: '2015-07-02',
  eventClasses: 'optionalEvent',
  title: 'test event',
  description: 'This is a test description of an event',
}, {
  start: '2015-07-19',
  end: '2015-07-25',
  title: 'test event',
  description: 'This is a test description of an event',
  data: 'you can add what ever random data you may want to use later',
}, ];


export default class ReactMobileComponents extends React.Component {
  render() {
    return (
      <div>
    	<EventCalendar 
		    month={7}
		    year={2015}
		    events={events} 
		    onEventClick={(target, eventData, day) => console.log(eventData) }
		 />
    	</div>
    )
  }
}


/*@lazyload({
  height: 200,
  once: true,
  offset: 100
})
class MyComponent extends React.Component {
    render() {
      return <div>this component is lazyloaded by default!</div>;
    }
  }*/
/*const App = () => {
  return (
    <div className="list">
      <Lazyload height={200}>
        <img src="tiger.jpg" /> 
      </Lazyload>
      <Lazyload height={200} once >    
        <MyComponent />
      </Lazyload>
      <Lazyload height={200} offset={100}>
        <MyComponent />
      </Lazyload>
      <Lazyload>
        <MyComponent />
      </Lazyload>
    </div>
  );
};*/

/*export default class ReactMobileComponents extends React.Component {
  render() {
    return (
      <div className="list">
      <LazyLoad height={200}>
        <img src="tiger.jpg" /> 
      </LazyLoad>
      <LazyLoad height={200} once >    
        <MyComponent />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <MyComponent />
      </LazyLoad>
      <LazyLoad>
        <MyComponent />
      </LazyLoad>
    </div>)
  }
}*/

//import React, { Component } from 'react';
//import Lazyload from '../../src/';
//import Operation from '../components/Operation';

/*export default class Image extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="widget-list image-container">
          <Lazyload throttle={200} height={300}>
            <img src="http://ww3.sinaimg.cn/mw690/62aad664jw1f2nxvya0u2j20u01hc16p.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxvyo52qj20u01hcqeq.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww2.sinaimg.cn/mw690/62aad664jw1f2nxvz2cj6j20u01hck1o.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxvzfjv6j20u01hc496.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxw0e1mlj20u01hcgvs.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww4.sinaimg.cn/mw690/62aad664jw1f2nxw0p95dj20u01hc7d8.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww2.sinaimg.cn/mw690/62aad664jw1f2nxw134xqj20u01hcqjg.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxw1kcykj20u01hcn9p.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww3.sinaimg.cn/mw690/62aad664jw1f2nxvya0u2j20u01hc16p.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxvyo52qj20u01hcqeq.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww2.sinaimg.cn/mw690/62aad664jw1f2nxvz2cj6j20u01hck1o.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxvzfjv6j20u01hc496.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxw0e1mlj20u01hcgvs.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww4.sinaimg.cn/mw690/62aad664jw1f2nxw0p95dj20u01hc7d8.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww2.sinaimg.cn/mw690/62aad664jw1f2nxw134xqj20u01hcqjg.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxw1kcykj20u01hcn9p.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww3.sinaimg.cn/mw690/62aad664jw1f2nxvya0u2j20u01hc16p.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxvyo52qj20u01hcqeq.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww2.sinaimg.cn/mw690/62aad664jw1f2nxvz2cj6j20u01hck1o.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxvzfjv6j20u01hc496.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxw0e1mlj20u01hcgvs.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww4.sinaimg.cn/mw690/62aad664jw1f2nxw0p95dj20u01hc7d8.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww2.sinaimg.cn/mw690/62aad664jw1f2nxw134xqj20u01hcqjg.jpg" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxw1kcykj20u01hcn9p.jpg" />
          </Lazyload>
        </div>
      </div>
    );
  }
}*/