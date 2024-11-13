import style from "./Tag.module.css"
export default function Tag({ tag }) {



    return (

        <span className={style.badge} >{tag}</span>



    )

}