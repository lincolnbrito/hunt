import React from 'react';
import {WebView} from 'react-native-webview';

const Product = ({route, navigation}) => {
  return <WebView source={{uri: route.params.product.url}} />;
};

Product.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.product.title,
});

export default Product;