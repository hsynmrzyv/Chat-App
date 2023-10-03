// Components
import ContactItem from "./ContactItem";

const Contacts = () => {
  return (
    <div className="bg-[#F6F6F6] p-5 rounded-2xl flex-1 h-full overflow-y-scroll">
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </div>
  );
};

export default Contacts;
