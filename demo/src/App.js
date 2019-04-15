import React, { PureComponent } from "react";
import withStyles from "react-jss";
// import Calendar from "calendar";

import {
  View,
  Button,
  Text,
  Image,
  NativeSVG,
  TouchableOpacity,
  ScrollView
} from "../../src/";
import logo from "./logo.svg";
import image1 from "./image1.png";
import styles from "./AppStyles";

class App extends PureComponent {
  trans = val => val.toUpperCase();
  testPress = type => () => alert(`${type} was clicked!`);

  render() {
    return (
      <View style={styles.App}>
        <View style={styles.AppHeader}>
          <NativeSVG source={logo} style={styles.AppLogo} alt="logo" />
          <Image source={image1} style={styles.AppImage} alt="logo" />
          <Text style={styles.headerText}>
            Testing all kinds of crap since 2019!
          </Text>
        </View>
        <View style={styles.AppBody}>
          <Button
            onPress={this.testPress("Button")}
            title="I&apos;m a Mobile &lt;Button /&gt;"
          />
          <TouchableOpacity
            onPress={this.testPress("Styled Button")}
            style={styles.button}
          >
            <Text style={{ color: styles.button.color }}>
              I'm a styled "button"
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.centered}
            onPress={this.testPress("View")}
          >
            <View style={styles.touchView}>
              <Text style={styles.text}>
                {"This is a touchable view".toUpperCase()}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.shadowView}>
            <Text style={styles.text}>A view with a box shadow</Text>
          </View>
          <View style={styles.testView}>
            <Text>Mobile &lt;View&gt; test</Text>
            <Text onPress={this.testPress("Text")}>Im clickable Text</Text>
            <Text style={styles.shadow}>Im Text with a text shadow</Text>
          </View>
          <ScrollView style={styles.list}>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
            <View style={styles.listItem}>
              <Text>I am an item in the list</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default withStyles(styles)(App);
