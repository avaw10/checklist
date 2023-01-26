function Register() {
  return (
    <form>
      <label for="username">Create a Username!</label>
      <input type="username" placeholder="Enter Username" id="username" name="username" />
      <label for="password">Create A Password</label>
      <input type="password" placeholder="Enter Password" id="password" name="password" />
    </form>
  );
}

export default Register;
