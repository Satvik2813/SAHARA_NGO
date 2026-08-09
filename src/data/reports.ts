/**
 * Sourced from /audit/wordpress-audit.md — six annual/half-yearly reports
 * hosted on SAHARA's historical WordPress site. Linked to their original
 * publicly-hosted location rather than re-hosted (re-hosting was not part of
 * the client's confirmation round). No financial figures invented.
 */

export interface AnnualReport {
  year: string;
  title: string;
  highlight: string;
  url: string;
}

export const annualReports: AnnualReport[] = [
  {
    year: "2013–14",
    title: "Annual Report 2013–14",
    highlight: "Sponsor-a-child and sponsor-an-aged programmes; NGO network workshop with 50+ organisations.",
    url: "https://saharango.wordpress.com/wp-content/uploads/2019/05/ar-2013-14.pdf",
  },
  {
    year: "2014–15",
    title: "Annual Report 2014–15",
    highlight: "132 children supported; beautician, computer and tailoring training for young women.",
    url: "https://saharango.wordpress.com/wp-content/uploads/2019/05/annual-report-14-15.pdf",
  },
  {
    year: "2015–16",
    title: "Annual Report 2015–16",
    highlight: "New training centre at Old Alwal, Secunderabad; solar-lighting promotion for rural households.",
    url: "https://saharango.wordpress.com/wp-content/uploads/2019/05/sahara-ar-2015-16.pdf",
  },
  {
    year: "2016–17",
    title: "Annual Report 2016–17",
    highlight: "Support for establishing the Suraksha Old Age Day-Care Centre near BHEL, Hyderabad.",
    url: "https://saharango.wordpress.com/wp-content/uploads/2019/05/sahara_ar_2016-17.pdf",
  },
  {
    year: "2017–18",
    title: "Annual Report 2017–18",
    highlight: "41 girls and 13 boys sponsored for education; employability placements for trained youth.",
    url: "https://saharango.wordpress.com/wp-content/uploads/2019/05/annual_report_sahara-2017-18.pdf",
  },
  {
    year: "Apr–Sep 2018",
    title: "Half-Yearly Report, April–September 2018",
    highlight: "Kerala flood-relief response led by SAHARA staff and Self Help Group volunteers.",
    url: "https://saharango.wordpress.com/wp-content/uploads/2019/05/sahara-apr-sep.pdf",
  },
];

export const governanceNote =
  "SAHARA's governing board members serve without remuneration. Newer reports will be added once SAHARA provides them.";
