/**
 */
'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {WebView, requireNativeComponent} from 'react-native';

export default class YPWebView extends Component {
  static propTypes = WebView.propTypes;

  render() {
    return (
      <WebView
        ref={w => this.webview = w}
        {...this.props}
        nativeConfig={{
          component: RCTYPWebView
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
