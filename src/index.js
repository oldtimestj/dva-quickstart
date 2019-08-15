import dva from 'dva';
import './index.css';
import RouterConfig from './router'
import { createBrowserHistory as createHistory} from 'history'

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});
console.log(require('./models').default)
// require('./models').default.forEach(key => app.model(key.default))
require('./models').default.forEach(key => app.model(key.default))
// 3. Model
// app.model(require('./models/counter').default);
// app.model(require('./models/example').default);
// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');

