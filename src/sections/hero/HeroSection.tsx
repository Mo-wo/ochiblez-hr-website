import React from "module";
import styles from "./hero.module.css";

export const Hero = () => {

    return (
      <section className={styles.hero}>
        <div className={styles.heroWrapper}>
          <h2>Empowering Your Workforce</h2>
          <p>
            Shamzbridge HR specializes in innovative HR solutions to enhance
            your business success. Our expert team is dedicated to optimizing
            your workforce and driving growth.
          </p>
          <div>
            <a>
              <button>Learn more</button>
            </a>
            <a>
              <button>Our Services</button>
            </a>
          </div>
        </div>
      </section>
    );
}