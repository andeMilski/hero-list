import './App.css';
import HeaderContainer from './containers/headerContainer'

import ArticleContainer from './containers/articleContainer'

export const App = () =>(
    <div className="App">
      <HeaderContainer></HeaderContainer>
      <ArticleContainer></ArticleContainer>
  </div>
)
export default App;
