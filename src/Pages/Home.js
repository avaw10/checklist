import Layout from "../Layout/Layout";
import homeStyles from "../Styles/home.module.css";

function Home(props) {
  console.log("Home:", props.isLoggedIn);
  return (
    <Layout sLoggedIn={true}>
      <div className={homeStyles.container}>
        <h1>
          Welcome to Checklist <br /> An Easier Way for Adulting
        </h1>
        <h2>
          Browse through your house's chores that need to be completed, payments
          that need to be fufilled, items that need to be claimed, or other
          tasks that are designed specifically for your house!
        </h2>
      </div>
      <div className={homeStyles.container}>
        <div className={homeStyles.action}>
          <img className={homeStyles.image} src="/Images/bback.jpeg" alt="" />
          <a href="/login">
            {" "}
            <button className={homeStyles.sign}>
              Sign Up or Log In To Start Checking Off Your List Today!{" "}
            </button>{" "}
          </a>
        </div>
      </div>

      {/* About Us */}
      <div className={homeStyles.container}>
        <div className={homeStyles.about}>
          <h3> About Us </h3>

          <h4>
            Checklist was designed by college students for college students.
            This website was made to help college students keep their houses
            clean and organized. It is easily accessible, easy to use, and
            catered to your own specific house and needs. Being in college is
            hard and keeping a house clean is even harder. Checklist is here to
            make you and your roommates lives easier and hopefully help you feel
            like an adult!{" "}
          </h4>
        </div>
      </div>

      {/* Reviews */}
      <div className={homeStyles.container}>
        <div className={homeStyles.reviews}>
          <h5>Reviews</h5>
          <h6>
            Read some of the reviews that fellow college students have written
            about Checklist
          </h6>

          <div className={homeStyles.reviewsection}>
            <div className={homeStyles.claire}>
              <h7>Claire Wilcox - Cal Poly SLO</h7>
              <p>
                I live in a house with 17 girls and it gets really messy.
                Checklist has been a lifesaver because now we can all see what
                chores need to be done even if we're not home since we can get
                on the website on our phones and computers! We also know who
                owns the furniture and all the kitchen appliances. Thank you
                Checklist!
              </p>
            </div>

            <div className={homeStyles.pilar}>
              <h8>Pilar Hemingway - University of San Diego</h8>
              <p>
                Keeping my house clean has been the hardest thing about being in
                college but thanks to Checklist, I feel so much more organized
                and prepared! I can put all groceries or cleaning supplies that
                need to be bought and any of my roommates can pick them up since
                all of our accounts are linked together!
              </p>
            </div>

            <div className={homeStyles.sarah}>
              <h9>Sarah Engel - University of Colorado Boulder</h9>
              <p>
                I was hesitant to use Checklist because I didn't think it would
                help my houses organization or cleanliness but after trying it I
                can see a huge difference. My roommates and I get along so much
                better because of how organized we are and how much our
                communication has improved!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Leave review  */}
      <div className={homeStyles.container}>
        <div className={homeStyles.reviewbox}>
          <p>Leave A Review!</p>
          <div>
            <form action="/formhandler.php">
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter Name" />
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter Email" />
              <label>Comments</label>
              <textarea
                rows="5"
                name="review"
                placeholder="Enter Review"></textarea>
              <button type="submit" class="hero-btn red-btn">
                SEND REVIEW
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
