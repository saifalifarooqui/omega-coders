import React from 'react'

export const Css = () => {
  return (
    <div className='detailsPage'>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/H%C3%A5kon-Wium-Lie-2009-03.jpg" className='dennisPhoto cssInventor' alt="photo error" />
        <h4 className='mt-3'>Håkon Wium Lie</h4>
        <p className='mt-5 aboutDennis font-weight-bold'>
          "Hakon Lie" redirects here. For the Norwegian politician, see Haakon Lie.
          Håkon Wium Lie

          Håkon Wium Lie, March 2009
          Born	July 26, 1965 (age 59)
          Halden, Norway
          Nationality	Norwegian
          Employer	YesLogic
          Known for	Cascading Style Sheets
          Website	Personal homepage of Håkon W. Lie
          Håkon Wium Lie (born July 26, 1965) is a Norwegian web pioneer, a standards activist, and the chairman of YesLogic, developers of Prince CSS-based PDF rendering software. He is best known for developing Cascading Style Sheets (CSS) while working with Tim Berners-Lee and Robert Cailliau at CERN in 1994. He was the chief technology officer of Opera Software from 1998 until the browser was sold to new owners in 2016.
        </p>
        <div className='whatIsC'>
          <h4>What is Css ?</h4>
          Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

          CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts. This separation can improve content accessibility, since the content can be written without concern for its presentation; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.

          Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device.
        </div>
        <hr />
        <h4>Important Notes</h4>
        <div className='importantNotes'>
          <ul>
            <li>Developers can quickly prototype designs using CSS.</li>
            <li>CSS helps ensure websites look good across different browsers.</li>
            <li>Changes can be made easily in one place, affecting all linked pages.</li>
            <li>Designers can implement complex layouts that adapt to changing content.</li>
            <li>With CSS, developers can use custom fonts, enhancing the brand identity.</li>
            <li>Properly styled and structured websites can improve search engine rankings.</li>
            <li>Well-structured CSS can lead to faster load times, improving user experience.</li>
            <li>CSS offers a variety of styling options, from simple tweaks to complex layouts.</li>
            <li>CSS reduces redundancy by allowing a single stylesheet to style multiple pages.</li>
            <li>CSS helps establish a visual hierarchy, guiding users through content effectively.</li>
            <li>By using CSS, designers can ensure consistency across multiple pages of a website. </li>
            <li>CSS separates content from design, making it easier to maintain and manage websites.</li>
            <li>CSS supports media queries, allowing for different styles based on device characteristics..</li>
            <li>CSS can improve accessibility by enabling better layout control for assistive technologies..</li>
            <li>CSS allows for the implementation of animations and transitions, enhancing user interaction.</li>
            <li>CSS provides the ability to create print-specific styles, improving printed document layouts.</li>
            <li>CSS enables responsive web design, allowing sites to adapt to various screen sizes and devices.</li>
            <li>It allows developers to control the appearance of web pages, including layout, colors, fonts, and spacing.</li>
            <li>Many CSS frameworks, like Bootstrap and Tailwind, streamline development processes and ensure best practices.</li>
          </ul>
        </div>
        <h4>Syntex of Css</h4>
        <div>
          <div className='syntexOfC'>
            <pre>
              <code>
                {
                  `LINE 1: <div class="w3-container w3-teal">
LINE 2:  <h1>My Header</h1>
LINE 3: </div>
LINE 4:
LINE 5: <img src="img_car.jpg" alt="Car">
LINE 6:
LINE 7: <div class="w3-container">
LINE 8: <p>A car is a wheeled, self-powered motor vehicle used for transportation.</p>
LINE 9: </div>
LINE 10:
LINE 11: <div class="w3-container w3-teal">
LINE 12: <p>My Footer</p>
LINE 13: </div>`
                }
              </code>
            </pre>
          </div>
          <h4>Syntex Explained</h4>
          <div className='syntexNotes pb-4'>
            <ul>
              <li><b>Line 1: </b>Here we make a div(container) and in div tag we add class for Css. We have to use class if we want</li>
              <li><b>Line 2: </b>This is a tag of Html. Used for heading.</li>
              <li><b>Line 3: </b></li>
              <li><b>Line 4: </b></li>
              <li><b>Line 5: </b></li>
              <li><b>Line 6: </b></li>
              <li><b>Line 7: </b></li>
              <li><b>Line 8: </b></li>
              <li><b>Line 9: </b></li>
              <li><b>Line 10: </b></li>
              <li><b>Line 11: </b></li>
              <li><b>Line 12: </b></li>
              <li><b>Line 13: </b></li>
            </ul>
          </div>
        </div>
        <h4>LEARN MORE ABOUT C HERE</h4>
        <div className='pb-5'>
          <div className="row align-items-start pt-4">
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active " aria-current="page" href="https://www.w3schools.com/c/c_output.php">C OUTPUT</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_comments.php">C COMMENTS</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_variables.php">C VARIABLES</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_data_types.php">C DATA TYPES</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_constants.php">C CONSTANTS</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_operators.php">C OPERATORS</a>
              </button>
            </div>
          </div>
          <div className="row align-items-start pt-4">
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active " aria-current="page" href="https://www.w3schools.com/c/c_booleans.php">C BOOLEAN</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_conditions.php">C CONDITIONS</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_switch.php">C SWITCH</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_while_loop.php">C WHILE LOOP</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_for_loop.php">C FOR LOOP</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_break_continue.php">C BREAK</a>
              </button>
            </div>
          </div>
          <div className="row align-items-start pt-4">
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active " aria-current="page" href="https://www.w3schools.com/c/c_arrays.php">C ARRAY</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_strings.php">C STRINGS</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_user_input.php">C USER INPUT</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_memory_address.php">C MEMORY ADDRESS</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_pointers.php">C POINTERS</a>
              </button>
            </div>
            <div className="col-2">
              <button className='rounded'>
                <a className="text-dark nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_operators.php">C OPERATORS</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='pageEnd'>
        <p>Thank you for visiting our website! We appreciate your interest in our study materials, designed to support your educational journey. Our resources are tailored to help you succeed, whether you're preparing for exams or enhancing your knowledge. We’re dedicated to providing high-quality content that meets your needs, and we hope you find everything you’re looking for. Your feedback is invaluable to us, so please feel free to reach out with any suggestions or questions. Thank you once again for choosing us as your study partner—we look forward to assisting you on your path to success!
        </p>
      </div>
    </div>
  )
}

export default Css;