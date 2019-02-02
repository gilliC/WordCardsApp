import React, {Component} from 'react';
import {Text, View} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import {ComponentItem, CarouselRow, ColInRow} from './common_components';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {components: this.props.children, componentIndex: 0};
    this.changeShow = this.changeShow.bind(this);
    this.onSwipeLeft = this.onSwipeLeft.bind(this);
    this.onSwipeRight = this.onSwipeRight.bind(this);
  }
  changeShow() {
    this.setState({show: !this.state.show});
  }
  showChild(id) {
    if (this.props.children !== undefined) {
      let component;
      if (Array.isArray(this.state.components))
        component = this.state.components[id];
      else component = this.state.components;
      return <ComponentItem component={component} index={id} key={id} />;
    }
  }
  onSwipeRight() {
    const i = this.state.componentIndex;
    const compCount = this.state.components.length;
    if (i + 1 < compCount)
      this.setState({
        componentIndex: i + 1,
      });
    else this.setState({componentIndex: 0});
  }
  onSwipeLeft() {
    const i = this.state.componentIndex;
    const compCount = this.state.components.length;
    if (i - 1 >= 0) this.setState({componentIndex: i - 1});
    else this.setState({componentIndex: compCount - 1});
  }

  componentDidMount() {
    this.changeShow();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.componentIndex !== prevState.componentIndex) {
      this.changeShow();
    }
  }
  componentWillReceiveProps({children}) {
    this.setState({
      components: children,
    });
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };
    return (
      <GestureRecognizer
        onSwipeLeft={this.onSwipeLeft}
        onSwipeRight={this.onSwipeRight}
        config={config}>
        <CarouselRow>{this.showChild(this.state.componentIndex)}</CarouselRow>
      </GestureRecognizer>
    );
  }
}
