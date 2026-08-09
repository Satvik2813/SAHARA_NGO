/**
 * CRITICAL — every field here is transcribed EXACTLY from
 * /audit/client-confirmed-information.md, itself transcribed from the six
 * client-approved donation images. Do not alter any number, code, or name.
 * Do not add, remove, or merge accounts. No FCRA content anywhere in this file.
 */

export interface BankAccount {
  id: string;
  type: "Indian" | "Overseas";
  bankName: string;
  logo?: string;
  accountName: string;
  accountNumber: string;
  ifsc: string | null; // null = not shown in the approved images
  swift?: string;
  branch?: string;
  note?: string;
}

export const bankAccounts: BankAccount[] = [
  {
    id: "D1",
    type: "Indian",
    bankName: "Vijaya Bank",
    logo: "/assets/banks/vijaya.png",
    accountName: "SAHARA",
    accountNumber: "404601010006102",
    ifsc: "VIJB0004046",
    branch: "Narayanaguda, Hyderabad - 500029",
  },
  {
    id: "D2",
    type: "Indian",
    bankName: "Canara Bank",
    logo: "/assets/banks/canara.png",
    accountName: "SAHARA",
    accountNumber: "0649101017864",
    ifsc: "CNRB0000649",
    branch: "Narayanaguda, Hyderabad - 500029",
  },
  {
    id: "D3",
    type: "Indian",
    bankName: "Bank of Baroda",
    logo: "/assets/banks/bob.png",
    accountName: "SAHARA",
    accountNumber: "06440100022464",
    ifsc: "BARB0BARKAT",
    note: "5th character of the IFSC is the digit zero.",
  },
  {
    id: "D4",
    type: "Indian",
    bankName: "ICICI Bank",
    logo: "/assets/banks/icici.png",
    accountName: "SAHARA",
    accountNumber: "630501061075",
    ifsc: "ICIC0006305",
    branch: "Himayatnagar, Hyderabad",
  },
  {
    id: "D5",
    type: "Indian",
    bankName: "Union Bank of India",
    logo: "/assets/banks/union.png",
    accountName: "SAHARA",
    accountNumber: "328002010015532",
    ifsc: null,
    branch: "Karimnagar",
    note: "IFSC code was not shown in the supplied material — please confirm with SAHARA before transferring.",
  },
  {
    id: "D6",
    type: "Overseas",
    bankName: "Canara Bank",
    logo: "/assets/banks/canara.png",
    accountName: "SAHARA",
    accountNumber: "0649101019518",
    ifsc: "CNRB0000649",
    swift: "CNRBINBBHFD",
    branch: "Narayanaguda, Hyderabad - 500029",
  },
  {
    id: "D7",
    type: "Overseas",
    bankName: "State Bank of India",
    logo: "/assets/banks/sbi.png",
    accountName: "SAHARA",
    accountNumber: "40125204937",
    ifsc: "SBIN0000691",
    swift: "SBININBB104",
  },
];

export const upi = [
  { label: "PhonePe", value: "9440483089", icons: ["/assets/banks/phonepe.png"] },
  { label: "GPay / PhonePe", value: "9441156212", icons: ["/assets/banks/gpay.svg", "/assets/banks/phonepe.png"] },
];

export const cashDonation =
  "Cash donations are accepted at SAHARA's office in Amberpet, Hyderabad. Please contact us to arrange a visit or handover.";

export interface DonationPlatform {
  name: string;
  url: string;
}

export const donationPlatforms: DonationPlatform[] = [
  { name: "Give India", url: "https://fundraisers.giveindia.org/nonprofits/sahara" },
  { name: "ImpactGuru", url: "https://www.impactguru.com/fundraiser/saharango" },
  { name: "Milaap", url: "https://milaap.org/fundraisers/saharangohyderabad" },
];
