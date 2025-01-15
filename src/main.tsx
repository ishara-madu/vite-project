import { createRoot } from 'react-dom/client'
import App from './screens/App.tsx'
import AgoraRTC, { AgoraRTCProvider } from 'agora-rtc-react'

createRoot(document.getElementById('root')!).render(
  <AgoraRTCProvider client={AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })}>
    <App />
  </AgoraRTCProvider>,
)
