import IssueProvider from '../contexts/Issue'
import Issues from './Issues'

const App = () => {
  return (
    <IssueProvider url="https://api.github.com/repos/ContentPI/ContentPI/issues">
      <Issues />
    </IssueProvider>
  )
}

export default App;
