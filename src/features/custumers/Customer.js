import { useSelector } from "react-redux";
import store from "../../store";

function Customer() {
  const {fullName} =  useSelector(store=>store.custumer)

  return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer
