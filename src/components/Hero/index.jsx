import React from "react"
import * as styles from "./hero.module.css"

export const Hero = () => (
  <div className={styles.content}>
    <h3>New World</h3>
    <h1>Ishtakar</h1>
    {/* <h4 class='subheader'>1000 / 1000 Online</h4> */}
    <a className={styles.discord} href="https://ishtakar.eu/discord">
      Join Discord
    </a>
  </div>
)
