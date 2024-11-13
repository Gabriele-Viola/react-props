import style from "./Card.module.css"
import posts from "../../../database/db.js"

export default function Card({ data }) {
    console.log(data);

    return (
        <div className="col">

            <div className={style.card}>
                <img src={data.image} alt="" />
                <div className="card-body">
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                    <p>{data.tags.join(' ')}</p>
                </div>
            </div>

        </div>
    )
}