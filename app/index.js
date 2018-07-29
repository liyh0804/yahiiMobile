import React from 'react';
import dva from 'dva-no-router';
import createLoading from 'dva-loading';
import App from './router';

const app = dva();

app.use(createLoading());

app.model(require('./models').default);

app.router(() => <App />);

export default app.start();
