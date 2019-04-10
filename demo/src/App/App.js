import React, { PureComponent } from "react";
import withStyles from "react-jss";

import {
  View,
  Button,
  Text,
  Image,
  TouchableOpacity
} from "../lib/MobileComponents";
import logo from "../testLogo.svg";
import styles from "./AppStyles";

class App extends PureComponent {
  trans = val => val.toUpperCase();
  testPress = () => alert("Button was clicked!");

  render() {
    return (
      <View styles={styles.App}>
        <View styles={styles.AppHeader}>
          <Image src={logo} styles={styles.AppLogo} alt="logo" />
          <Text>Testing all kinds of crap since 2019</Text>
        </View>
        <View styles={styles.AppBody}>
          <Text styles={styles.text} transfunc={this.trans}>
            Hey this is a Mobile Shared &lt;Text&gt; Component automatically
            transformed to uppercase!
          </Text>
          <TouchableOpacity onPress={this.testPress}>
            <Button styles={styles.button}>
              I&apos;m a Mobile &lt;Button&gt;
            </Button>
          </TouchableOpacity>
          <View styles={styles.testView}>
            <Text styles={styles.shadow}>Mobile &lt;View&gt; test</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default withStyles(styles)(App);
