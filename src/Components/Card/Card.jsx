import style from "./Card.module.css"
import posts from "../../../database/db.js"
import Tag from "../tag/Tag.jsx";

export default function Card({ data }) {
    console.log(data);

    return (
        <div className="col">

            <div className={style.card}>
                <img src={data.image} alt="" />
                <div className="card-body">
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                    {data.tags.map((tag, index) => <Tag key={data.tags[index]} tag={tag} />)}
                </div>
            </div>

        </div>
    )
}