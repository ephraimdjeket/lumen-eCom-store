import classes from "./Home.module.css";

export default function Home() {
  return (
    <section className={classes.homeContainer}>
      <div className={classes.test1}>
        <div className={classes.product}>
          <div>          <h2>Lumen eCom Store</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis sapiente, itaque cum officia veritatis atque voluptatibus repellendus in quas reprehenderit laudantium exercitationem quo omnis quasi expedita illum soluta tenetur.</p></div>
        </div>
      </div>
      <div className={classes.test2}></div>
      <div className={classes.test3}></div>
      <div className={classes.test4}></div>
    </section>
  )
}