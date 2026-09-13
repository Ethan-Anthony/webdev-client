export default function YourForm() {
  return (
<form id="wd-your-form"
    onSubmit={(event) => {
        event.preventDefault();
    }}
>
    <label htmlFor="wd-first-name">First name: </label>
    <input 
        type="text"
        placeholder="First Name"
        defaultValue="Ethan"
        title="The first name"
        id="wd-first-name"
    />
    <br />
    <label htmlFor="wd-last-name">Last name: </label>
    <input 
        type="text"
        placeholder="Last Name"
        defaultValue="Anthony"
        title="The last name"
        id="wd-last-name"
    />
    <br />
    <label htmlFor="wd-password">Password: </label>
    <input 
        type="password"
        placeholder="password"
        defaultValue="123456"
        id="wd-password" 
    />
    <br />
    <label htmlFor="wd-textarea">Bio: </label>
    <br />
    <textarea
        id="wd-textarea"
        cols={30}
        rows={10}
        defaultValue="I'm taking this class for a couple of reasons. Primarily because it is a required course for me to graduate, and secondly because I have personal projects which I would like to develop for the web. I hope that this class will provide me with the necessary skills and get me on the right track to be able to publish my projects."
    />
    <br />
    <div>
        <label>Class Standing</label>
        <br />
        <input type="radio" name="radio-standing" id="wd-radio-freshman" />
        <label htmlFor="wd-radio-freshman">Freshman</label>
        <br />
        <input type="radio" name="radio-standing" id="wd-radio-sophmore" />
        <label htmlFor="wd-radio-sophmore">Sophmore</label>
        <br />
        <input type="radio" name="radio-standing" id="wd-radio-junior" />
        <label htmlFor="wd-radio-junior">Junior</label>
        <br />
        <input type="radio" name="radio-standing" id="wd-radio-senior" />
        <label htmlFor="wd-radio-senior">Senior</label>
        <br />

        <label>Chipotle Protein</label>
        <br />
        <input type="radio" name="radio-protein" id="wd-radio-chicken" />
        <label htmlFor="wd-radio-chicken">Chicken</label>
        <br />
        <input type="radio" name="radio-protein" id="wd-radio-steak" />
        <label htmlFor="wd-radio-steak">Steak</label>
        <br />
        <input type="radio" name="radio-protein" id="wd-radio-pork" />
        <label htmlFor="wd-radio-pork">Pork</label>
        <br />
        <input type="radio" name="radio-protein" id="wd-radio-vegetarian" />
        <label htmlFor="wd-radio-vegetarian">Vegetarian</label>
        <br />
    </div>
    <div>
        <label>Languages</label>
        <br />
        <input type="checkbox" name="check-lang" id="wd-checkbox-eng" />
        <label htmlFor="wd-checkbox-eng">English</label>
        <br />
        <input type="checkbox" name="check-lang" id="wd-checkbox-span" />
        <label htmlFor="wd-checkbox-span">Spanish</label>
        <br />
        <input type="checkbox" name="check-lang" id="wd-checkbox-fre" />
        <label htmlFor="wd-checkbox-fre">French</label>
        <br />
        <input type="checkbox" name="check-lang" id="wd-checkbox-ita" />
        <label htmlFor="wd-checkbox-ita">Italian</label>
        <br />

        <label>Sports You Follow</label>
        <br />
        <input type="checkbox" name="check-sports" id="wd-checkbox-football" />
        <label htmlFor="wd-checkbox-football">Football</label>
        <br />
        <input type="checkbox" name="check-sports" id="wd-checkbox-baseball" />
        <label htmlFor="wd-checkbox-baseball">Baseball</label>
        <br />
        <input type="checkbox" name="check-sports" id="wd-checkbox-basketball" />
        <label htmlFor="wd-checkbox-basketball">Basketball</label>
        <br />
        <input type="checkbox" name="check-sports" id="wd-checkbox-hockey" />
        <label htmlFor="wd-checkbox-hockey">Hockey</label>
        <br />

        <label>Interests</label>
        <br />
        <input type="checkbox" name="check-interests" id="wd-checkbox-tv" />
        <label htmlFor="wd-checkbox-tv">Television</label>
        <br />
        <input type="checkbox" name="check-interests" id="wd-checkbox-reading" />
        <label htmlFor="wd-checkbox-reading">Reading</label>
        <br />
        <input type="checkbox" name="check-interests" id="wd-checkbox-friend" />
        <label htmlFor="wd-checkbox-friend">Spending time with friends</label>
        <br />
        <input type="checkbox" name="check-interests" id="wd-checkbox-out" />
        <label htmlFor="wd-checkbox-out">Going out</label>
        <br />
    </div>

    <div>
        <label htmlFor="wd-select-one-major">Select your major</label>
        <br />
        <select id="wd-select-one-major" defaultValue="COMPSCI">
            <option value="COMPSCI">Computer Science</option>
            <option value="BIO">Biology</option>
            <option value="FIN">Finance</option>
            <option value="MATH">Mathematics</option>
        </select>
        <br />

        <label htmlFor="wd-select-many-topic">What topics do you wish to deepen this term?</label>
        <br />
        <select
            multiple
            id="wd-select-many-topic"
            defaultValue={["CSS", "DB"]}
        >
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JS">JavaScript</option>
            <option value="CLIENT">Client State</option>
            <option value="API">Express REST APIs</option>
            <option value="DB">MongoDB</option>
        </select>
    </div>
    
    <div>
        <label htmlFor="wd-text-field-email">School Email: </label>
        <input 
            type="email"
            defaultValue="anthony.e@northeastern.edu"
            placeholder="asdf@northeastern.edu"
            id="wd-text-field-email"
        />
        <br />

        <label htmlFor="wd-text-field-grad">Graduation year: </label>
        <input
            type="number"
            defaultValue="2026"
            placeholder="2026"
            min={2026}
            max={2031}
            id="wd-text-field-grad"
        />
        <br />  

        <label htmlFor="wd-text-field-bday">Birthday: </label>
        <input
            type="date"
            defaultValue="2000-01-01"
            min="1900-01-01"
            max="2026-09-01"
            id="wd-text-field-bday"
        />
        <br />

        <label htmlFor="wd-text-field-excitement">Course Excitement: </label>
        <input
            type="range"
            defaultValue="10"
            min="0"
            max="10"
            id="wd-text-field-excitement"
        />
        <br />
    </div>

    <button id="wd-html-button-save" type="submit">
        Save
    </button>
    <button id="wd-html-button-cancel" type="button">
        Cancel
    </button>
</form>
  );
}