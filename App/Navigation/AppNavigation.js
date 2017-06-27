import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: {
    screen: LaunchScreen,
    navigationOptions: { title: 'Constitution' }
  }
}, {
    // Default config for all screens
    headerMode: 'screen',
    initialRouteName: 'LaunchScreen',
  })

export default PrimaryNav
