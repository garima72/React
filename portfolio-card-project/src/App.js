
import './App.css';
import PortfolioCard from './components/portfoliocard';
function App() {
const msg = 'hello';
return (
  <div className="App">
  <PortfolioCard/>
  </div>
);


}
export default App;
/*

Portfolio Card(main container)
- header(title section)
- Avatar(profile image)
-personalInfo(name,role,location)
-bio (description text)
*/