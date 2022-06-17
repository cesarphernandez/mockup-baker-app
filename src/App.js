import logo from './logo.svg';
import './App.css';

import { defaultTheme, Provider, IllustratedMessage, Content, Flex, View} from '@adobe/react-spectrum';
import {Heading} from '@adobe/react-spectrum'
import Upload from '@spectrum-icons/illustrations/Upload';
function App() {
  return (
    <Provider height="100vh" theme={defaultTheme}>
      <Flex direction="column" justifyContent="center" height="100%">
        <View >
        <IllustratedMessage>
          <Upload />
          <Heading>No results</Heading>
          <Content>Try another search</Content>
        </IllustratedMessage>
        </View>
      </Flex>
    </Provider>
      
  );
}

export default App;
