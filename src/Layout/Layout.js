import Navbar from "../Components/Navbar";

function Layout(props) {
  return (
    <div>
      {/* <h3> Are You Logged In?: {props.isLoggedIn ? "Yes" : "No"}</h3> */}
      <Navbar isLoggedIn={props.isLoggedIn} />
      <main>{props.children}</main>
    </div>
  );
}
export default Layout;
