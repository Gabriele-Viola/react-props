import style from "./Tag.module.css"
export default function Tag({ tag }) {
    // let color
    // tag === 'html' ? color = style.html : tag === 'css' ? color = style.css : tag === 'php' ? color = style.php : tag === 'js' ? color = style.js : color = style.badge






    return (

        <span className={style[tag]}>{tag}</span>



    )

}