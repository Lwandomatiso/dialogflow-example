import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js" async></script>
<df-messenger style={{
  zIndex: '999',
  position: 'fixed',
  bottom: '16px',
  right: '16px'}}
  location="us-central1"
  project-id="chatbot-test-405307"
  agent-id="325e859d-c9a9-40e9-8b81-9221ef609b2c"
  language-code="en">
  <df-messenger-chat-bubble
   chat-title="SanChat">
  </df-messenger-chat-bubble>
</df-messenger>
    </main>
  )
}
