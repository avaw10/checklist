import Layout from "../Layout/Layout";
import moneyStyles from "../Styles/money.module.css";

function Money() {
  return (
    <Layout isLoggedIn={true}>
      <div className={moneyStyles.container}>
        <div className={moneyStyles.intro}>
          <div className={moneyStyles.top}>
            <h21>Money!</h21>
            <div className={moneyStyles.under}>
              <h22>
                Click below to see if you're up to date on rent or utilities!
              </h22>
              <img
                className={moneyStyles.picture}
                src="/Images/money.png"
                alt=""
              />
              <div className={moneyStyles.money}>
                <div class={moneyStyles.moneyCol}>
                  <h23>Monthly Payments</h23>
                  <p>Have you paid your rent and utilties this month? </p>
                  <a href="/Rent">Check Here!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Money;
