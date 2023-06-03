import { StyleSheet, Dimensions, Platform} from 'react-native';

const { width, height } = Dimensions.get('window');
const displayPadding = Platform.OS === 'ios' ? 20 : 10;



export const styles = StyleSheet.create({
 app: {
  margin: Platform.OS === 'ios' ? 0 : 0,
  padding: 0,
  flex: 2,
  justifyContent: 'center',
  borderRadius: Platform.OS === 'ios' ? 50 : 10,
  backgroundColor:'black',
  alignItems: 'center',
  height: '100%',
  minHeight: '100%',
  overflow: 'hidden',
  width: '100%',
},

  calculator: {
    backgroundColor: '#22252D',
    width: '100%',
    maxWidth: Platform.OS === 'ios' ? 500 : 375,
    minHeight: 640,
    flexDirection: 'column',
    borderRadius: 40,
    overflow: 'hidden',
  },
  display: {
    minHeight: Platform.OS === 'ios' ? 400 : 200,
    padding: Platform.OS === 'ios' ? 20 : 20,
    justifyContent:  Platform.OS === 'ios' ? 'flex-end' : 'flex-end',
    alignContent: 'flex-end',
    color: 'white',
    textAlign: Platform.OS === 'ios' ? 'right' : 'right',
    flex: 1,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
    maxWidth: '100%',
    overflow: 'auto',
  },


Text: {
},


input: {
  color: '#FFFFFF',
  width: '100%',
  fontSize: 46, // Set the desired font size in pixels
  marginBottom: 10,
},

output: {
  color: '#EB6666',
  fontSize: 46, // Set the desired font size in pixels
  fontWeight: 'bold',
  width: '100%',
  whiteSpace: 'nowrap',
},

  keys: {
    backgroundColor: '#292D36',
    padding: Platform.OS === 'ios' ? 15 : 20,
    borderRadius: 30,
    width: Platform.OS === 'ios' ? '100%' : '100%',
    display: Platform.OS === 'ios' ? 'grid' : 'grid',
    gridTemplateColumns: Platform.OS === 'ios' ? 'repeat(4, 1fr)' : 'repeat(4,1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: Platform.OS ==='ios' ? '100%' : '50%',
    gridGap: Platform.OS ==='ios' ? 10 : 20,
    boxShadow: '0px -2px 16px rgba(0, 0, 0, 0.2)',
  },
  key: {
    position: 'relative',
    cursor: 'pointer',
    display: 'grid',
    margin: Platform.OS === 'ios' ? 10 : 0,
    width: Platform.OS === 'ios' ? '20%' : '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262933',
    borderRadius: 10,
    transition: '0.2s',
    userSelect: 'none',
  },
  keyText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  keyHover: {
    boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.2)',
  },
 
  actionKey: {
    position: 'relative',
    cursor: 'pointer',
    display: 'grid',
    margin: Platform.OS === 'ios' ? 10 : 0,
    width: Platform.OS === 'ios' ? '20%' : '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262933',
    borderRadius: 10,
    transition: '0.2s',
    userSelect: 'none',
  },
  actKeyText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#26FED7',
  },
  actionKeyHover: {
    boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.2)',
  },

   operatorKey: {
    position: 'relative',
    cursor: 'pointer',
    display: 'grid',
    margin: Platform.OS === 'ios' ? 5 : 0,
    width: Platform.OS === 'ios' ? '20%' : '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262933',
    borderRadius: 10,
    transition: '0.2s',
    userSelect: 'none',
  },
  oppKeyText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#EB6666',
  },
  operatorKeyHover: {
    boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.2)',
  },
});

