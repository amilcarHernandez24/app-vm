import styles from "./photo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowUpFromBracket,
  faCheck,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";

function Photo({ item }) {
  return (
    <div className={styles.photo_content}>
      <div className={styles.photo}>
        {
          item.url

          ?

            <img src={item.url} className={styles.img} />

          :

            <div className={styles.img}>
            </div>
        }
        {
          <div className={styles.photo_icons}>
            {item.status_id === 3 && <FontAwesomeIcon icon={faXmark} />}
            {item.status_id === 2 && <FontAwesomeIcon icon={faExclamation} />}
            {item.status_id === 1 && <FontAwesomeIcon icon={faCheck} />}
            {item.status_id === 3 && <FontAwesomeIcon icon={faArrowUpFromBracket} />
            }
          </div>
        }
      </div>
    </div>
  );
}

export default Photo;
