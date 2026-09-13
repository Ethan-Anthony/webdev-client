export default function AnchorTag() {
    return (
      <>
        <h4>Anchor tag</h4>
        Please{" "}
        <a href="https://www.lipsum.com" id="wd-lipsum">
          click here
        </a>{" "}
        to get dummy text
        <br />
        <a href="https://github.com/jannunzi" id="wd-github">
          GitHub
        </a>
        <br />
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
          id="wd-ai-link"
        >
          MDN: table element
        </a>

        <h4>My tags</h4>
        Here is a {" "}
        <a href="https://northeastern.instructure.com/" id="wd-your-link">
            website
        </a> {" "}
         that I visit often
         <br />
        And here is my {" "}
        <a 
        href="https://github.com/ethan-anthony"
        target="_blank"
        rel="noreferrer"
        id="wd-your-github"
        >
            github
        </a>
      </>
    );
  }