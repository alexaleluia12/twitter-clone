

export default function Form({size=250}) {

    return (
        <section id="form-group">
            <form>
                <textarea value={"Tweet About 30 days of React"}/>
            </form>
            <p>{size}</p>
            <button>Add Post</button>
        </section>
    )
}