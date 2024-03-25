import React from 'react'; 
import styles from "../faqsection/faqsection.module.css"

const Faqsection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <div className={styles.question}>
            <h3>Q: How long will it take to complete my business plan?</h3>
          </div>
          <div className={styles.answer}>
            <p>A: It depends on the context of the business but turnaroud times are generally between 7-14 working days</p>
          </div>
          <hr/>
          <div className={styles.question}>
            <h3>Q: How much do business planning services cost?</h3>
          </div>
          <div className={styles.answer}>
            <p>A: Due to the unique nature of drafting and presenting a business, the pricing of this service depends on the scope of work required, we can provide pricing on request for each individual business plan.</p>
          </div>
          <hr/>
          <div className={styles.question}>
            <h3>Q: What financial institutions does BAFCO work with?</h3>
          </div>
          <div className={styles.answer}>
            <p>A: BAFCO partners with all commercial banks in South and Non-Profit Organizations as well as Government institutions providing funding and finance opportunities to a variety of businesses.</p>
          </div>
          <hr/>
          <div className={styles.question}>
            <h3>Q: When should a company file annual returns?</h3>
          </div>
          <div className={styles.answer}>
            <p>A: CIPC annual returns should be filed within 30 days of the company's incorporation anniversary and SARS annual returns must be filed within 12 months of the company's financial year end.</p>
          </div>
          <hr/>
          <div className={styles.question}>
            <h3>Q: Which companies have to file annual returns?</h3>
          </div>
          <div className={styles.answer}>
            <p>A: All registered companies have to file annual returns within the prescribed time periods to maintain regulatory eligibility and avoid deregistration with the CIPC.</p>
          </div>
          <hr/><div className={styles.question}>
            <h3>Q: What is included in a cashflow forecast sheet?</h3>
          </div>
          <div className={styles.answer}>
            <p>A: The cashflow forecast sheet includes all projected income and expenditure for a set period of time. This financial document is an overview of the expected financial activity to take place in upcoming weeks, months, and years.</p>
          </div>
          <hr/><div className={styles.question}>
            <h3>Q: What to do after registering a business with CIPC?</h3>
          </div>
          <div className={styles.answer}>
            <p>A: After registering your company, the next steps to follow are:
            </p>
            <div className={styles.list}>
            <ul>
              <li>Tax and VAT registration</li>
              <li>Setting up business banking accounts</li>
              <li>Planning business operations</li>
              <li>Business branding</li>
              <li>Getting your business online</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqsection