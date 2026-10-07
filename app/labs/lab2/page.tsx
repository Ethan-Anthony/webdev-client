import Link from "next/link";
import "./index.css";
import BackgroundColors from "./BackgroundColors";
import ForegroundColors from "./ForegroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";
import TailwindSpacing from "./tailwind/TailwindSpacing";
import TailwindTypography from "./tailwind/TailwindTypography";
import TailwindBackgroundColors from "./tailwind/TailwindBackgroundColors";
import TailwindResponsiveBreakpoint from "./tailwind/TailwindResponsiveBreakpoint";
import TailwindResponsiveShowHide from "./tailwind/TailwindResponsiveShowHide";
import TailwindResponsiveFlex from "./tailwind/TailwindResponsiveFlex";
import TailwindResponsiveGrid from "./tailwind/TailwindResponsiveGrid";
import TailwindResponsiveSpacingText from "./tailwind/TailwindResponsiveSpacingText";
import TailwindResponsiveDesign from "./tailwind/TailwindResponsiveDesign";
import TailwindFilters from "./tailwind/TailwindFilters";
import TailwindGrids from "./tailwind/TailwindGrids";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <Link href="/labs/lab2/tailwind" id="wd-lab2-tailwind-link">
        Tailwind CSS
      </Link>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the
        element. Although it's very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
        Instead of changing the look and feel of all the
        elements of the same name, e.g., P, we can refer to a
        specific element by its ID
        </p>
        <p id="wd-id-selector-2">
        Here's another paragraph using a different ID and a
        different look and feel
        </p>
        <p id="wd-ai-id-selector">
        This paragraph is styled by its own ID selector with a
        dark green background and light yellow text
        </p>
        <p id="wd-id-selector-3">
            Heres a 3rd paragraph using a different ID and a
            new look
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
            Instead of using IDs to refer to elements, you can use an
            element's CLASS attribute
        </p>
        <h4 className="wd-class-selector">
            This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector">
            This paragraph and the heading below share a class with a
            maroon background and white text
        </p>
        <h4 className="wd-ai-class-selector">
            This heading shares the same class as the paragraph above
        </h4>
        <h4 className="wd-your-class">This heading has the same style as
            the paragraph below
        </h4>
        <p className="wd-your-class">Here is the paragraph below!</p>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
            <h3>Document structure selectors</h3>
            <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document
            <p className="wd-selector-3">
                This paragraph's red background is referenced as
                <br />
                .selector-2 .selector3
                <br />
                meaning the descendant of some ancestor.
                <br />
                <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
                </span>
                <br />
                You can combine these relationships to create specific
                styles depending on the document structure
                <br />
                <span className="wd-ai-selector-5">
                    This span is a descendant of .wd-selector-1
                </span>
                <br />
                <span className="wd-my-selector">
                    here is my new child
                </span>
            </p>
            </div>
        </div>
      </div>
      <div id="wd-css-specificity">
        <h3>Selector specificity</h3>
        <h5 id="wd-specificity-id" className="wd-specificity-class">
            Tag, class, and ID rules all set this h5 background.
            The ID rule wins, so it is green.
        </h5>
      </div>
      <div id="wd-css-cascade">
        <h3>Cascade conflict</h3>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
            Tag, class, and ID rules all set this paragraph&apos;s background.
            The ID rule wins, so it is red.
        </p>
      </div>

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
      <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Tailwind CSS</h1>
      <TailwindSpacing />
      <hr className="my-8" />
      <TailwindTypography />
      <hr className="my-8" />
      <TailwindBackgroundColors />
      <hr className="my-8" />
      <TailwindResponsiveBreakpoint />
      <hr className="my-8" />
      <TailwindResponsiveShowHide />
      <hr className="my-8" />
      <TailwindResponsiveFlex />
      <hr className="my-8" />
      <TailwindResponsiveGrid />
      <hr className="my-8" />
      <TailwindResponsiveSpacingText />
      <hr className="my-8" />
      <TailwindResponsiveDesign />
      <hr className="my-8" />
      <TailwindFilters />
      <hr className="my-8" />
      <TailwindGrids />
    </div>
    </div>
    

  );
}