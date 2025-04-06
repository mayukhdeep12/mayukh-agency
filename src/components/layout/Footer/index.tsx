import { memo } from 'react';

import Link from '@/components/Link';

// Assuming this Link component handles internal/external links appropriately
import styles from './Footer.module.scss';

const YEAR = new Date().getFullYear();

const Footer = memo(function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Optional: Wrap the first row for potentially better structure/styling */}
      <div className={styles.firstRow}>
        <p>© {YEAR} Mazzerx, All rights reserved.</p>
      </div>

      {/* New row for Privacy and Terms links */}
      <div className={styles.linksRow}>
        <Link href='/privacy-policy'>Privacy Policy</Link>
        {/* Add some space between links if needed via CSS or a simple text node */}
        {' | '}
        <Link href='#top'>Back to Top ↑</Link> {/* Changed href to #top for semantic correctness */}
        {/* <Link href='/terms-and-conditions'>Terms and Conditions</Link> */}
      </div>
    </footer>
  );
});

export default Footer;
