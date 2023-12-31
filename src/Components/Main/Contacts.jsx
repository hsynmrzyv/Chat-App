// Components
import ContactItem from "./ContactItem";

// Supabase
import supabase from "../../supabase";

// Redux
import { useDispatch } from "react-redux";
import { usersSlice } from "../../store/slices/usersSlice";

const Contacts = () => {
  return (
    <div className="bg-[#F6F6F6] py-5 rounded-2xl flex-1 h-full overflow-y-scroll">
      {/* <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem /> */}
    </div>
  );
};

export default Contacts;
