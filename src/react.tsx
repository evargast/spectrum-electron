import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import {
  defaultTheme,
  Provider,
  Button,
  Grid,
  View,
} from '@adobe/react-spectrum';

const Hello: FC = () => {
  return (
    <Provider theme={defaultTheme}>
      <Grid
        areas={['header  header', 'sidebar content', 'footer  footer']}
        columns={['1fr', '3fr']}
        rows={['size-1000', 'auto', 'size-1000']}
        height="100vh"
        gap="size-100"
      >
        <View backgroundColor="celery-600" gridArea="header">
          <Button variant="cta">
            This is an Electron app using React Spectrum!
          </Button>
        </View>
        <View backgroundColor="blue-600" gridArea="sidebar" />
        <View backgroundColor="purple-600" gridArea="content" />
        <View backgroundColor="magenta-600" gridArea="footer" />
      </Grid>
    </Provider>
  );
};

ReactDOM.render(<Hello />, document.getElementById('app'));
