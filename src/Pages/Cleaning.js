import Layout from "../Layout/Layout";
import cleaningStyles from "../Styles/cleaning.module.css";

function Cleaning(props) {
  return (
    <Layout isLoggedIn={true}>
      <div className={cleaningStyles.container}>
        <div className={cleaningStyles.intro}>
          <div className={cleaningStyles.top}>
            <h11>Cleaning!</h11>
            <div className={cleaningStyles.under}>
              <h12>
                Browse through each section to see what chores are needed to be
                checked off in each room!
              </h12>
              <img
                className={cleaningStyles.pic}
                src="/Images/cleaningtab.png"
                alt=""
              />
              <div className={cleaningStyles.clean}>
                <div class={cleaningStyles.cleanCol}>
                  <h13>Kitchen</h13>
                  <p>
                    Let's see what chores are needed to be done in the kitchen!{" "}
                  </p>
                  <a href="/kitchen">Click Here!</a>
                </div>
                <div class={cleaningStyles.cleanCol}>
                  <h14>Living Room</h14>
                  <p>
                    Let's see what chores are needed to be done in the living
                    room!
                  </p>
                  <a href="/livingroom">Click Here!</a>
                </div>
                <div class={cleaningStyles.cleanCol}>
                  <h15>Office</h15>
                  <p>
                    Let's see what chores are needed to be done in the office!
                  </p>
                  <a href="/office">Click Here!</a>
                </div>
                <div class={cleaningStyles.cleanCol}>
                  <h16>Laundry Room</h16>
                  <p>
                    Let's see what chores are needed to be done in the laundry
                    room!
                  </p>
                  <a href="/laundry">Click Here!</a>
                </div>
                <div class={cleaningStyles.cleanCol}>
                  <h17>Bathroom 1</h17>
                  <p>
                    Let's see what chores are needed to be done in the first
                    bathroom!
                  </p>
                  <a href="/BathroomOne">Click Here!</a>
                </div>
                <div class={cleaningStyles.cleanCol}>
                  <h18>Bathroom 2</h18>
                  <p>
                    Let's see what chores are needed to be done in the second
                    bathroom!
                  </p>
                  <a href="/BathroomTwo">Click Here!</a>
                </div>
                <div class={cleaningStyles.cleanCol}>
                  <h19>Bathroom 3</h19>
                  <p>
                    Let's see what chores are needed to be done in the third
                    bathroom!
                  </p>
                  <a href="/BathroomThree">Click Here!</a>
                </div>
                <div class={cleaningStyles.cleanCol}>
                  <h20>Outdoors</h20>
                  <p>
                    Let's see what chores are needed to be done in the yard(s),
                    garage, or anything outdoors!
                  </p>
                  <a href="/outdoors">Click Here!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cleaning;
