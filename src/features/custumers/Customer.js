import { useSelector } from "react-redux";
import store from "../../store";

function Customer() {
  const custumer =  useSelector(store=>store.custumer.fullName)

  return <h2>👋 Welcome, {custumer}</h2>;
}

export default Customer
