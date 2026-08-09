import type { BankAccount } from "@/data/donations";
import { CopyField } from "@/components/CopyField";
import { Chip } from "@/components/Chip";

export function BankAccountCard({ account }: { account: BankAccount }) {
  return (
    <div className="card overflow-hidden">
      <div className="bg-brand-forest text-cream px-5 py-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          {account.logo && (
            <div className="bg-white p-1 rounded-sm w-8 h-8 flex items-center justify-center shrink-0">
              <img src={account.logo} alt={`${account.bankName} logo`} className="max-w-full max-h-full object-contain" />
            </div>
          )}
          <h3 className="font-display text-lg text-cream">{account.bankName}</h3>
        </div>
        <Chip className="!bg-cream/15 !border-cream/30 !text-cream">{account.type}</Chip>
      </div>
      <div className="p-5">
        <div className="text-sm">
          <div className="flex items-center justify-between gap-3 py-2 border-b border-line">
            <p className="text-xs text-ink-muted">Account name</p>
            <p className="text-ink font-semibold">{account.accountName}</p>
          </div>
          <CopyField label="Account number" value={account.accountNumber} />
          {account.ifsc ? (
            <CopyField label="IFSC code" value={account.ifsc} />
          ) : (
            <div className="py-2 border-b border-line">
              <p className="text-xs text-ink-muted">IFSC code</p>
              <Chip variant="verify" className="mt-1">
                Confirm before transferring
              </Chip>
            </div>
          )}
          {account.swift && <CopyField label="SWIFT code" value={account.swift} />}
          {account.branch && (
            <div className="py-2">
              <p className="text-xs text-ink-muted">Branch</p>
              <p className="text-ink">{account.branch}</p>
            </div>
          )}
        </div>
        {account.note && <p className="text-xs text-ink-muted italic mt-3">{account.note}</p>}
      </div>
    </div>
  );
}
