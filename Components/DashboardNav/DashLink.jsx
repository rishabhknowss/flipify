import React from 'react';
import Link from "next/link";
import styles from "./dashNav.module.css";

function DashLink({Svg, Name}) {
    return (
        <Link className={styles.navLinks__route} href="/selectHost">
          <div className={styles.navLinks__routeFlex}>
            {Svg} <p>{Name}</p>
          </div>
        </Link>
    );
}

export default DashLink;