import { useState } from 'react'
import { useWallet } from '@lazorkit/wallet'
import {
  SystemProgram,
  PublicKey,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js'

export function TransferButton() {
  const { signAndSendTransaction, smartWalletPubkey } = useWallet()

  const [toAddress, setToAddress] = useState('')
  const [loading, setLoading] = useState(false)

  const handleTransfer = async () => {
    if (!smartWalletPubkey) {
      alert('Connect wallet first')
      return
    }

    if (!toAddress) {
      alert('Enter destination wallet address')
      return
    }

    try {
      setLoading(true)

      // validate destination address
      const destination = new PublicKey(toAddress)

      // ONLY SystemProgram instruction (required for LazorKit)
      const transferIx = SystemProgram.transfer({
        fromPubkey: smartWalletPubkey,
        toPubkey: destination,
        lamports: 0.1 * LAMPORTS_PER_SOL,
      })

      const signature = await signAndSendTransaction({
        instructions: [transferIx],
      })

      console.log('tx success:', signature)
      alert(`Tx sent: ${signature}`)
      setToAddress('')
    } catch (err) {
      console.error(err)
      alert('Transaction failed or invalid address')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Destination wallet address"
        value={toAddress}
        onChange={(e) => setToAddress(e.target.value)}
      />

      <button className="btn" onClick={handleTransfer} disabled={loading}>
        {loading ? 'sending...' : 'Send 0.1 SOL'}
      </button>
    </div>
  )
}
