import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

export default function Contact({ contact: { name, number, id }, delContact }) {
  return (
    <div className={css.card}>
      <div>
        <div className={css.name}>
          <FaUser /> {name}
        </div>
        <div>
          <FaPhoneAlt /> {number}
        </div>
      </div>
      <button className={css.delete} onClick={() => delContact(id)}>
        Delete
      </button>
    </div>
  );
}
