import style from "./Card.module.css"
import posts from "../../../database/db.js"

export default function Card(props) {
    console.log(props);

    return (
        <div className="col">

            <div className={style.card}>
                <img src={props.image} alt="" />
                <div className="card-body">
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                    <p>{props.tags}</p>
                </div>
            </div>

        </div>
    )
}