export default function Images() {
    return (
      <>
        <div id="wd-images">
            <h4>Image tag</h4>
            Loading an image from the internet:
            <br />
            <img
            id="wd-starship"
            width="400px"
            alt="Starship"
            src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
            />
            <br />
            Loading a local image:
            <br />
            <img
            id="wd-teslabot"
            src="/images/teslabot.jpg"
            height="200px"
            alt="Tesla Bot (Optimus) humanoid robot"
            />
            <br />
            Loading another image from the internet:
            <br />
            <img
            id="wd-ai-image"
            width="200px"
            alt="Earthrise seen from Apollo 8"
            src="https://images-assets.nasa.gov/image/as08-14-2383/as08-14-2383~small.jpg"
            />
        </div>
        <div id="wd-image-container">
            <h4>My Image</h4>
            <img
            id="wd-your-image"
            width="400px"
            alt="Catskill mountains landscape"
            src="/images/catskills.jpeg"
            />
        </div>
      </>
    );
  }