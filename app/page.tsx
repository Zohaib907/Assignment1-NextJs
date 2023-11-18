import Image from 'next/image'
import React from 'react';
import panaverse from "../public/assets/panaverse.png"
// import videoSource from "../public/assets/test.mp4";
const Page = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    { id: 3, name: 'Bob Smith', age: 22 },
    // Add more dummy data as needed
  ];
  return (
    <>
      <html lang="en">

      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>HTML Tags Example</title>
      </head>

      <body>

          <header>
              <h1>This is a Header</h1>
              <p>This is a paragraph inside the header.</p>
          </header>

          <nav>
              <ul>
                  <li><a href="panaversepage">Panaverse Clone Page</a></li>
                  <li><a href="contactus">Contact</a></li>
              </ul>
          </nav>

          <section>
              <article>
                  <h2>Article Title</h2>
                  <p>This is a paragraph within an article.</p>
              </article>

              <aside>
                  <h3>Aside Section</h3>
                  <p>This is additional content related to the main article.</p>
              </aside>
          </section>

          <main>
              <h2>Main Content Section</h2>
              <p>This is the main content of the page.</p>
          </main>


          <br />

          <div>
              <h2>Div Section</h2>
              <p>This is a div element, used for grouping content.</p>
          </div>

          <Image src={panaverse} alt="Placeholder Image" />
          <br />

          <video controls width="600" className='hidden'>
            <source src="test.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <br />

          <a href="https://www.panaverse.co/" target="_blank" title="Visit Panaverse.co">
              Visit Panaverse.co
          </a>

          <br />

          <input type="text" placeholder="Enter your name" />

          <br />

          <button>Click me</button>

          <br />

          <ol>
              <li>Ordered List Item 1</li>
              <li>Ordered List Item 2</li>
              <li>Ordered List Item 3</li>
          </ol>

          <ul>
              <li>Unordered List Item 1</li>
              <li>Unordered List Item 2</li>
              <li>Unordered List Item 3</li>
          </ul>
          <div>
            <h1>Dummy Data Table</h1>
            <table border="1">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">Footer content can go here</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FwARACe8M_4" title="YouTube Video" allow="autoplay; encrypted-media"></iframe>

          <footer>
              <p>&copy; 2023 Your Website</p>
          </footer>

          <address>
              <p>Contact us at <a href="mailto:info@example.com">info@example.com</a></p>
          </address>

          <hr />

          <blockquote>
              <p>This is a blockquote. It is used to emphasize or highlight a piece of text.</p>
          </blockquote>

      </body>

      </html>
    </>
  );
};

export default Page;

