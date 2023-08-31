const tweets = {
  1: "What are you humming about?"
};

function TweetForm() {
  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder={tweets[1]}></textarea>
        <input type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;