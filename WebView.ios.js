/**
 */
'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {WebView, requireNativeComponent, NativeModules} from 'react-native';
const {YPWebViewManager} = NativeModules;

export default class YPWebView extends Component {
  static propTypes = WebView.propTypes;

  render() {
    return (
      <WebView
        ref={w => this.webview = w}
        {...this.props}
        nativeConfig={{
          component: RCTYPWebView,
          props: {
            userAgent: this.props.userAgent
          },
          viewManager: YPWebViewManager,
        }}
      />
    );
  }

  goForward() {
    this.webview.goForward();
  }
  goBack() {
    this.webview.goBack();
  }
  reload() {
    this.webview.reload();
  }
  stopLoading() {
    this.webview.stopLoading();
  }
  postMessage(data) {
    this.webview.postMessage(data);
  }
  injectJavaScript(code) {
    this.webview.injectJavaScript(code);
  }
}

const RCTYPWebView = requireNativeComponent(
  'RCTYPWebView',
  YPWebView,
  WebView.extraNativeComponentConfig
);
