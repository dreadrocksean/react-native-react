import React, { PureComponent, Fragment } from "react";
import withStyles from "react-jss";
import styled from "styled-components";
// import Calendar from "calendar";

import {
  View,
  Button,
  Text,
  Image,
  NativeSVG,
  TouchableOpacity,
  ScrollView,
  FormElement
} from "../../src/";
import logo from "./logo.svg";
import image1 from "./image1.png";
import styles from "./AppStyles";

const languages = [
  { label: "Java", value: "java" },
  { label: "JavaScript", value: "js" }
];

const TestInput = styled.input`
  font-size: 1em;
  text-align: left;
  border: 1px solid #efefef;
  padding: 0.5em;
  width: 100%;
  border-radius: 10px;
`;

class App extends PureComponent {
  state = {
    checked: "first",
    radioValue: false,
    textInputValue: "",
    textAreaValue: "",
    selectedValue: ""
  };

  trans = val => val.toUpperCase();
  testPress = type => () => alert(`${type} was clicked!`);

  _onRadioChange = () => this.setState({ radioValue: !this.state.radioValue });

  _onTextChange = ev => {
    ev.preventDefault();
    console.log("value: ", ev.target.value);
    this.setState({ textInputValue: ev.target.value });
  };

  _onTextAreaChange = ev => this.setState({ textAreaValue: ev.target.value });

  _onSelectValueChange = (itemValue, itemPosition) =>
    this.setState({ selectedValue: itemValue });

  render() {
    return (
      <ScrollView style={styles.App}>
        {/*<View style={styles.AppHeader}>
          <NativeSVG source={logo} style={styles.AppLogo} alt="logo" />
          <Image source={image1} style={styles.AppImage} alt="logo" />
          <Text style={styles.headerText}>
            Testing all kinds of crap since 2019!
          </Text>
        </View>*/}
        {/*<View key="theform" style={styles.AppBody}>*/}
        <FormElement
          type="checkbox"
          onPress={this._onRadioChange}
          value={this.state.radioValue}
          label={this.state.radioValue ? "Off" : "On"}
          style={styles.FormElement}
        />
        <FormElement
          type="select"
          onChange={this._onSelectValueChange}
          selectedValue={this.state.selectedValue}
          values={languages}
          label="Language"
          style={styles.FormElement}
        />
        <FormElement
          type="text"
          onChange={this._onTextChange}
          value={this.state.textInputValue}
          label={"Name"}
          placeholder="Enter Name"
          style={styles.TextInput}
          labelStyles={{ color: "red" }}
        />
        <FormElement
          type="textarea"
          onChange={this._onTextAreaChange}
          value={this.state.textAreaValue}
          label={"Notes"}
          placeholder="Enter Notes"
          style={styles.FormElement}
        />
        <Button
          onPress={this.testPress("Button")}
          title="I&apos;m a Mobile &lt;Button /&gt;"
          value={this.state.radioValue}
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
        <View style={styles.list}>
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
        </View>
        {/*</View>*/}
      </ScrollView>
    );
  }
}

export default withStyles(styles)(App);
