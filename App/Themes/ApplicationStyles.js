import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  container: {
    borderRadius: 4,
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden'
  },
  titleContainer: {
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontWeight: '500',
    fontSize: 13,
  },
  button: {

  },
  logo:{
    marginTop: Metrics.baseMargin,
    marginHorizontal : Metrics.screenWidth / 2 - (Metrics.images.large / 2) ,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  buttonImage: {
    width: 30,
    height: 25
  },
  body: {
    padding: 10,
    paddingTop: 0
  },
  spaceBar: {
    height: 54
  },
  detailText: {
    textAlign: 'left',
    fontSize: 13
  },
  centeredText: {
    textAlign: 'center'
  },
  labelText:{
    color: '#a2a2a2'
  }
}

export default ApplicationStyles
