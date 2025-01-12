import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react"
import Home from "./Home"

function App() {

  return (
    <AgoraRTCProvider client={AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })}>
      <Home />
    </AgoraRTCProvider>
  )
}

export default App
