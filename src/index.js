import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ApolloClient from 'apollo-boost';
import Routes from './routes';

// import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({ uri: 'https://localhost:3000/graphql' });


const App = (
    <MuiThemeProvider>
        <ApolloProvider client={client} >
            <Routes />
        </ApolloProvider>    
    </MuiThemeProvider>
    
);
  



ReactDOM.render(App, document.getElementById('root'));
// registerServiceWorker();
