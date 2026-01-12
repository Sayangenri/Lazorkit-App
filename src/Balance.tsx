import { useEffect, useState } from 'react'
import { useWallet } from '@lazorkit/wallet'
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js'

const RPC_URL = 'https://api.devnet.solana.com'

export function Balance() {
  const { smartWalletPubkey } = useWallet()
  const [balance, setBalance] = useState<number | null>(null)

  useEffect(() => {
    if (!smartWalletPubkey) return

    const connection = new Connection(RPC_URL)

    const fetchBalance = async () => {
      const lamports = await connection.getBalance(smartWalletPubkey)
      setBalance(lamports / LAMPORTS_PER_SOL)
    }

    fetchBalance()
  }, [smartWalletPubkey])

  if (!smartWalletPubkey) return null

  return (
    <div className="balance-display">
      <strong>Balance:</strong>{' '}
      {balance === null ? 'loading...' : `${balance} SOL`}
    </div>
  )
}
