export type PlayerId = string;
export type NEOCAmount = number;

export interface Wallet {
  playerId: PlayerId;
  balance: NEOCAmount;
}

export function mintNEOC(wallet: Wallet, amount: NEOCAmount): Wallet {
  return { ...wallet, balance: wallet.balance + amount };
}

export function burnNEOC(wallet: Wallet, amount: NEOCAmount): Wallet {
  return { ...wallet, balance: Math.max(0, wallet.balance - amount) };
}

export function transferNEOC(
  from: Wallet,
  to: Wallet,
  amount: NEOCAmount
): { from: Wallet; to: Wallet } {
  if (from.balance < amount) return { from, to };
  return {
    from: { ...from, balance: from.balance - amount },
    to: { ...to, balance: to.balance + amount },
  };
}
