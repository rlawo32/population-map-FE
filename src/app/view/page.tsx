import ViewMain from "./view-main/page";
import styles from "../page.module.css";
import supabase from "../supabase";

export default async function View() {
  const client:any = supabase();
    
  return (
    <div className={styles.view}>
      <ViewMain />
    </div>
  );
}
