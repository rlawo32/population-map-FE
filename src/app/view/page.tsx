import ViewMain from "./view-main/page";
import styles from "../page.module.css";
import supabase from "../supabase";

export default function View() {
  const client:any = supabase();

  const {data:population_jul, error} = client
    .from("population_jul")
    .select("pop_total")

  console.log("test")
    
  return (
    <div className={styles.view}>
      <ViewMain />
    </div>
  );
}
