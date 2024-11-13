import posts from "../../../database/db.js"
import Card from "../Card/Card"
import style from "./AppMain.module.css"
export default function AppMain() {
    console.log(posts);

    return (
        <main className={style.main}>
            <div className="container">
                <div className="row">
                    {/* <Card title="post1" image="https://picsum.photos/400/300" content="ciao post" tags="vari tags" /> */}
                    {posts.map(post => <Card key={post.id} data={post} />)}
                    {/* data={post} */}
                    {/* title={post.title} image={post.image} content={post.content} tags={post.tags.join(' ')} */}
                </div>
            </div>
        </main>
    )
}