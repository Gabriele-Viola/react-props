import style from "./AppMain.module.css"
export default function AppMain() {
    return (
        <main className={style.main}>
            <div className="container">
                <div className="card">
                    <img src="https://picsum.photos/" alt="" />
                    <div className="card-body">
                        <h3>title</h3>
                        <p>content</p>
                    </div>
                </div>
            </div>
        </main>
    )
}