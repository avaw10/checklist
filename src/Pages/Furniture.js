import Layout from "../Layout/Layout";
import furnitureStyles from "../Styles/furniture.module.css";

function Cleaning() {
  return (
    <Layout isLoggedIn={true}>
      <div className={furnitureStyles.container}>
        <div className={furnitureStyles.intro}>
          <div className={furnitureStyles.top}>
            <h29>Furniture and Other Items!</h29>
            <div className={furnitureStyles.under}>
              <h30>
                Keep track of who's items are whose by listing them and their
                owners. Browse through each room to make sure all your items are
                there!
              </h30>
              <img
                className={furnitureStyles.pic}
                src="/Images/furn.png"
                alt=""
              />
              <div className={furnitureStyles.furniture}>
                <div class={furnitureStyles.furnitureCol}>
                  <h31>Kitchen</h31>
                  <p>Who owns the items and furniture in the kitchen? </p>
                  <a href="/KitchenFurn">Assign Here!</a>
                </div>
                <div class={furnitureStyles.furnitureCol}>
                  <h32>Living Room</h32>
                  <p>Who owns the items and furniture in the living room?</p>
                  <a href="/LivingFurn">Assign Here!</a>
                </div>
                <div class={furnitureStyles.furnitureCol}>
                  <h33>Office</h33>
                  <p>Who owns the items and furniture in the office?</p>
                  <a href="/OfficeFurn">Assign Here!</a>
                </div>
                <div class={furnitureStyles.furnitureCol}>
                  <h34>Laundry Room</h34>
                  <p>Who owns the items and furniture in the laundry room?</p>
                  <a href="/LaundryFurn">Assign Here!</a>
                </div>
                <div class={furnitureStyles.furnitureCol}>
                  <h35>Bathroom 1</h35>
                  <p>Who owns the items and furniture in the first bathroom?</p>
                  <a href="/BathOneFurn">Assign Here!</a>
                </div>
                <div class={furnitureStyles.furnitureCol}>
                  <h36>Bathroom 2</h36>
                  <p>
                    Who owns the items and furniture in the second bathroom?
                  </p>
                  <a href="/BathTwoFurn">Assign Here!</a>
                </div>
                <div class={furnitureStyles.furnitureCol}>
                  <h37>Bathroom 3</h37>
                  <p>Who owns the items and furniture in the third bathroom?</p>
                  <a href="/BathThreeFurn">Assign Here!</a>
                </div>
                <div class={furnitureStyles.furnitureCol}>
                  <h38>Outdoors</h38>
                  <p>
                    Who owns the items and furniture in the yard(s), garage, or
                    anything outdoors?
                  </p>
                  <a href="/OutdoorsFurn">Assign Here!</a>
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
