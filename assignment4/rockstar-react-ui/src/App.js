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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/o-sanam">
              <Song songName="O Sanam"/>
            </Route>
            <Route path="/laari-chootee">
              <Song songName="Laari Chootee"/>
            </Route>
            <Route path="/despacito">
              <Song songName="Despacito"/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
