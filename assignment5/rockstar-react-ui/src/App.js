import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Song from './pages/Song'
import HomePage from './pages/Home'
// import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import Layout from './components/Layout'

const theme = createTheme({
  palette: {
    primary: {
      light: red[100],
      main: red[500],
      dark: '#002984'
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

var qs = (function(a) {
  if (a === "") return {};
  var b = {};
  for (var i = 0; i < a.length; ++i) {
  var p=a[i].split('=', 2); 
  if (p.length === 1)
      b[p[0]] = ""; 
  else
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b; 
})(window.location.search.substr(1).split('&'));

function App() {
  const webappUrl = qs["webapp"];
  const webapiUrl = qs["webapi"];
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage webappUrl={webappUrl} webapiUrl={webapiUrl}/>
            </Route>
            <Route exact path="/o-sanam">
              <Song songName="O Sanam" webappUrl={webappUrl} webapiUrl={webapiUrl}/>
            </Route>
            <Route path="/laari-chootee">
              <Song songName="Laari Chootee" webappUrl={webappUrl} webapiUrl={webapiUrl}/>
            </Route>
            <Route path="/despacito">
              <Song songName="Despacito" webappUrl={webappUrl} webapiUrl={webapiUrl}/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
