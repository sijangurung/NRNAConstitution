
import React, { PropTypes, Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  Image,
  Keyboard,
  Animated
} from 'react-native'

import styles from './Styles/LaunchScreenStyles'
import Panel from '../Components/Panel';
import SearchBar from '../Components/SearchBar';
import { Colors, Images, AppStrings } from '../Themes'
import TextHighlight from 'react-native-text-highlight';

class LaunchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.strIntro = AppStrings.introText
    this.chapterTitleArray = AppStrings.chapterTitleArray
    this.chapterArray = AppStrings.chapterTextArray
  }
  state = {
    searchText: ""
  }

  onSearchText = (text) => {
    console.log("Searching Text: " + text)
    this.setState({ searchText: text })
  }

  onCancelText = () => { this.setState({ searchText: '' }) }

  render() {
    return (
      <View>
        {/*<View style={{ flexDirection: 'row' }}>
          <SearchBar onSearch={this.onSearchText} onCancel={this.onCancelText} searchTerm={this.state.searchText} />
        </View>*/}
        <ScrollView style={styles.container}>
          <Image style={styles.logo} source={Images.logo} />
          <TextHighlight style={styles.centeredText}
            highlight={this.state.searchText}
            highlightStyle={{ color: Colors.bloodOrange, backgroundColor: Colors.banner }}>
            {this.strIntro}
          </TextHighlight>

          {
            this.chapterArray.map((txtChapter, index) => {
              return (
                <Panel title={this.chapterTitleArray[index]}
                  key={index}
                >
                  <TextHighlight style={styles.detailedText}
                    highlight={this.state.searchText}
                    highlightStyle={{ color: Colors.bloodOrange, backgroundColor: Colors.banner }}>
                    {txtChapter}
                  </TextHighlight>
                </Panel>
              );
            })
          }
          <Text style={[styles.centeredText, styles.labelText]}> © 2016 Nrnanorway All rights reserved. </Text>

          <View style={styles.spaceBar}></View>
        </ScrollView>
      </View>
    );
  }
}
export default LaunchScreen;