import style from "./Card.module.css"


export default function Card({ data }) {
    console.log(data);

    return (
        <div className="col">

            <div className={style.card}>
                <img src={data.image} alt="" />
                <div className="card-body">
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                    <p>{data.tags}</p>
                </div>
            </div>

        </div>
    )
}