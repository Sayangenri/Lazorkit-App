import { LazorkitProvider } from '@lazorkit/wallet'
import { ConnectButton } from './ConnectButton'
import { TransferButton } from './TransferButton'
import { Balance } from './Balance'
import './App.css'

interface Config {
  RPC_URL: string
  PORTAL_URL: string
  PAYMASTER: {
    paymasterUrl: string
  }
}

const CONFIG: Config = {
  RPC_URL: 'https://api.devnet.solana.com',
  PORTAL_URL: 'https://portal.lazor.sh',
  PAYMASTER: {
    paymasterUrl: 'https://kora.devnet.lazorkit.com',
  },
}

export default function App() {
  return (
    <LazorkitProvider
      rpcUrl={CONFIG.RPC_URL}
      portalUrl={CONFIG.PORTAL_URL}
      paymasterConfig={CONFIG.PAYMASTER}
    >
      <div className="app-container">
        <h2 className="app-title">LazorKit Test</h2>
        <div className="component-section">
          <ConnectButton />
        </div>
        <div className="component-section">
          <Balance />
        </div>
        <div className="component-section transfer-section">
          <TransferButton />
        </div>
      </div>
    </LazorkitProvider>
  )
}
