import Form from "./Form";
import Tweet from "./Tweet";

const stext = "30 Days Of JavaScript challenge has been started on 1 January and ended on 30 January 2020. It is of the best JavaScript material on the internet. Students learned quite a lot of concepts. I hope this will help lots of students. JavaScript for Ever!"
function App() {
  const defaultTweets = [
    <Tweet
      authorNick={"any"}
      author={"An Extrain"}
      text={stext}
      key={1}/>,
    <Tweet
      authorNick={"any"} author={"An Extrain"} text={stext} key={2}/>
  ]
  return (
    <main>
      <Form />
      {defaultTweets}
    </main>
  );
}

export default App;
