import style from "./AppFooter.module.css"
export default function AppFooter() {
    return (
        <footer className={style.footer}>&copy; {new Date().getFullYear()} VioWeb</footer>
    )
}
