import React, { memo } from 'react';
import styles from './footer.module.css'

const Footer = memo((props) => {
console.log("footer render")
	return (
		<footer className={styles.footer}>
			<h3 className={styles.text}>Card Maker ...</h3>
		</footer>
	)	
})

export default Footer;