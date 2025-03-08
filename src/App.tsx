import GlobalStyle from "./globalStyles"
import GlobalRoutes from "./routes/routes"
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')
function App() {
  return (
    <>
      <GlobalRoutes />
      <GlobalStyle />
    </>
  )
}

export default App
