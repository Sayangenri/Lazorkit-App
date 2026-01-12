import { useWallet } from '@lazorkit/wallet'

export function ConnectButton() {
  const {
    connect,
    disconnect,
    isConnected,
    isConnecting,
    wallet,
    smartWalletPubkey,
  } = useWallet()

  if (isConnected && smartWalletPubkey) {
    const address = smartWalletPubkey.toBase58()

    return (
      <div className="connect-section">
        <button className="btn" onClick={() => disconnect()}>
          Disconnect ({address.slice(0, 6)}...)
        </button>

        <div className="address-display">
          <code>{address}</code>
          <button
            className="btn copy-btn"
            onClick={() => navigator.clipboard.writeText(address)}
          >
            Copy
          </button>
        </div>
      </div>
    )
  }

  return (
    <button className="btn" onClick={() => connect()} disabled={isConnecting}>
      {isConnecting ? 'Connecting...' : 'Connect Wallet'}
    </button>
  )
}
