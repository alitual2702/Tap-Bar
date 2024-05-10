import React, { useEffect, useRef } from "react";

const Tab = () => {
    let refernce = useRef(null)
    let refernceimg = useRef(null)
    let referncepara = useRef(null)

    function handlebtn() {

        let ele = Array.from(refernce.current.children).map((a, i) => {
            a.addEventListener("click", () => {
               if(data[i].key == i){
                refernceimg.current.src = data[i].url;
                referncepara.current.innerHTML = data[i].discription;
               }
               
            })
        })

    }

    useEffect(() => {
        handlebtn()

    }, [])


    // dyanamic Data 
    let data = [
        {
            key: 0,
            url: "/htmlimg.jpg",
            discription: ` HyperText Markup Language is the computer language that facilitates
            website creation. The language, which has code words and syntax just
            like any other language, is relatively easy to comprehend and, as
            time goes on, increasingly powerful in what it allows someone to
            create. HTML continues to evolve to meet the demands and
            requirements of the Internet under the guise of the World Wide Web
            Consortium, the organization that designs and maintains the
            language; for instance, with the transition to Web 2.0.HyperText is
            the method by which Internet users navigate the web. By clicking on
            special text called hyperlinks, users are brought to new pages. The
            use of hyper means it is not linear, so users can go anywhere on the
            Internet simply by clicking on the available links. Markup is what
            HTML tags do to the text inside of them; they mark it as a specific
            type of text. For example, markup text could come in the form of
            boldface or italicized type to draw specific attention to a word or
            phrase.At its core, HTML is a series of short codes typed into a
            text-file. These are the tags that power HTML’s capabilities. The
            text is saved as an HTML file and viewed through a web browser. The
            browser reads the file and translates the text into a visible form,
            as directed by the codes the author used to write what becomes the
            visible rendering. Writing HTML requires tags to be used correctly
            to create the author’s vision.The tags are what separate normal text
            from HTML code. Tags are the words between what are known as
            angle-brackets, which allow graphics, images, and tables to appear
            on the webpage. Different tags perform different functions. The most
            basic tags apply formatting to text. As web interfaces need to
            become more dynamic, Cascading Style Sheets (CSS) and JavaScript
            applications may be used. CSS makes web pages more accessible and
            JavaScript adds power to basic HTML.`,
        },
        {
            key: 1,
            url: "/csssty.jpg",
            discription: `Cascading Style Sheets, fondly referred to as CSS, is a simple
      design language intended to simplify the process of making web pages
      presentable.CSS handles the look and feel part of a web page. Using
      CSS, you can control the color of the text, the style of fonts, the
      spacing between paragraphs, how columns are sized and laid out, what
      background images or colors are used, as well as a variety of other
      effects. CSS is easy to learn and understand but it provides a
      powerful control over the presentation of an HTML document. Most
      commonly, CSS is combined with the markup languages HTML or
      XHTML.CSS is created and maintained through a group of people within
      the W3C called the CSS Working Group. The CSS Working Group creates
      documents called specifications. When a specification has been
      discussed and officially ratified by the W3C members, it becomes a
      recommendation.These ratified specifications are called
      recommendations because the W3C has no control over the actual
      implementation of the language. Independent companies and
      organizations create that software.CSS, or Cascading Style Sheets,
      is a language used to style and layout web pages. It provides a way
      to control the visual appearance of HTML elements, including colors,
      fonts, spacing, and positioning. CSS works by selecting elements in
      an HTML document and applying styles to them. These styles can
      cascade down through the document, allowing for inheritance of
      styles from parent elements to child elements. CSS can be applied in
      three main ways: inline within HTML elements, internally in the
      section of an HTML document, or externally in separate CSS files.
      Using CSS allows developers to create visually appealing and
      responsive web pages, separating content from presentation for
      better maintainability and scalability. CSS, or Cascading Style
      Sheets, is a stylesheet language used to control the visual
      presentation of a full web page by styling the HTML elements it
      contains. Through CSS, developers can define styles for fonts,
      colors, margins, padding, borders, backgrounds, and more for various
      elements on the page, including headers, paragraphs, lists, images,
      and links.`,
        },
        {
            key: 2,
            url: "/jsmain.png",
            discription: ` JavaScript (often abbreviated as JS) is a high-level, versatile
      programming language that is one of the core technologies of the
      World Wide Web, alongside HTML and CSS. It is primarily known for
      enabling interactivity and dynamic content on web pages. JavaScript
      can manipulate the Document Object Model (DOM), which represents the
      structure and content of a web page, allowing developers to create
      rich, responsive user experiences. By working directly with HTML and
      CSS, JavaScript can modify elements, add animations, manage events
      such as clicks and key presses, and enable complex user interfaces.
      JavaScript's event-driven model allows for asynchronous execution
      through mechanisms such as callbacks, promises, and the more recent
      async/await syntax. This capability is essential for handling tasks
      like making network requests to servers without blocking the main
      execution thread, leading to smooth and performant applications.
      With the introduction of modern JavaScript (ECMAScript) features
      like arrow functions, destructuring, and template literals, the
      language has become more expressive and concise. Beyond client-side
      scripting, JavaScript has expanded into server-side development with
      the rise of Node.js, a runtime environment that allows developers to
      use JavaScript for backend development. This has enabled the
      creation of full-stack JavaScript applications where both frontend
      and backend are built using the same language, streamlining
      development and reducing context switching. JavaScript's extensive
      ecosystem includes numerous libraries and frameworks such as React,
      Angular, and Vue.js, which simplify the process of building complex
      web applications by providing modular, reusable components and
      efficient structures for managing state and data flow. These tools
      have revolutionized the development of single-page applications
      (SPAs), which provide seamless navigation and real-time updates
      without full page reloads. The language's open-source nature and
      active community have contributed to a wealth of resources,
      tutorials, and third-party libraries, fostering innovation and
      continuous improvement..`,
        },
        {
            key: 3,
            url: "/reactjs.png",
            discription: `React is a powerful, open-source JavaScript library for building
      dynamic and interactive user interfaces, primarily for single-page
      applications (SPAs). Developed by Facebook in 2013, React has become
      one of the most popular tools for web development due to its
      flexibility, efficiency, and ease of use. The core concept of React
      revolves around creating reusable components, which are
      self-contained units that represent specific parts of a user
      interface, such as buttons, forms, or entire sections of a page. By
      organizing a web application into a hierarchy of components,
      developers can achieve a modular, scalable, and maintainable
      architecture. At the heart of React is a virtual DOM (Document
      Object Model), an abstraction of the actual browser DOM. The virtual
      DOM allows React to efficiently update the UI by calculating the
      differences (diffing) between the previous and current states of the
      application. Instead of re-rendering the entire DOM, React applies
      only the necessary changes, which results in improved performance
      and a smooth user experience. React uses a declarative programming
      paradigm, allowing developers to describe what the UI should look
      like based on the application's state, rather than how to manipulate
      the DOM directly. This approach simplifies the process of building
      complex UIs and handling state changes. The primary way to define
      components is through JSX (JavaScript XML), a syntax extension that
      combines JavaScript and HTML-like markup. JSX makes it easier to
      write and read component structures and provides the basis for
      creating dynamic and interactive interfaces. State management is a
      key aspect of React applications. Components can maintain their own
      internal state, which can be managed using the useState hook in
      functional components. For more complex applications, state
      management libraries such as Redux and MobX provide centralized
      state stores and mechanisms for state synchronization across
      components. React also supports context, which enables data to be
      shared across multiple components without the need for prop
      drilling. React's ecosystem includes various tools and libraries
      that enhance its capabilities.`,
        },
        {
            key: 4,
            url: "/nodejsx.jpg",
            discription: `Node.js is an open-source, cross-platform runtime environment that
      enables developers to run JavaScript on the server side, expanding
      the language's utility beyond its traditional client-side role in
      web development. Launched in 2009 by Ryan Dahl, Node.js has become a
      popular choice for building scalable and high-performance network
      applications, APIs, and real-time services. It is powered by the V8
      JavaScript engine developed by Google, which compiles JavaScript
      into machine code for efficient execution. A key feature of Node.js
      is its event-driven, non-blocking I/O model, which allows the server
      to handle multiple requests simultaneously without waiting for one
      to complete before starting another. This asynchronous architecture
      is well-suited for building applications that require handling a
      large number of concurrent connections, such as chat applications,
      real-time data streaming, and APIs. Node.js achieves this through
      the use of callbacks, promises, and async/await syntax, which allow
      developers to write asynchronous code in a readable and manageable
      manner. Node.js boasts a robust package ecosystem through npm (Node
      Package Manager), one of the largest repositories of open-source
      libraries and tools in the world. Developers can easily integrate
      third-party packages and modules to extend the functionality of
      their applications, whether for database access, authentication,
      data validation, or other common tasks. This ecosystem accelerates
      development and encourages best practices and standardization.
      Node.js supports a wide range of application architectures, from
      traditional server-based web applications to microservices and
      serverless functions. Frameworks like Express.js provide a
      lightweight, minimalist approach to building web applications and
      APIs with Node.js, offering features like routing, middleware, and
      request/response handling. Other frameworks such as Koa and Hapi
      further expand the possibilities, each with its own strengths and
      design philosophies. Node.js is often used to build RESTful APIs,
      which allow applications to communicate and exchange data using HTTP
      methods.`,
        },
        {
            key: 5,
            url: "/leaf.svg",
            discription: ` MongoDB is a widely used, open-source NoSQL database designed for
      scalability, flexibility, and high performance. Unlike traditional
      relational databases, MongoDB adopts a document-oriented approach
      that stores data in JSON-like BSON (Binary JSON) documents rather
      than tables with rows and columns. This allows for the storage of
      complex and nested data structures, providing greater versatility
      and ease of use for developers working with modern, dynamic
      applications. MongoDB's documents are grouped into collections,
      which are analogous to tables in relational databases. However, the
      documents within a collection can have different schemas, offering a
      flexible data model that can evolve with the application's
      requirements. This schema-less design is particularly useful for
      handling unstructured or semi-structured data, enabling developers
      to adapt the data model as their application grows. One of MongoDB's
      key strengths is its horizontal scalability. The database supports
      sharding, a technique that partitions data across multiple servers
      to improve performance and handle large datasets efficiently.
      Sharding divides data into smaller, more manageable chunks called
      shards, which can be distributed across different machines. This
      allows MongoDB to scale out by adding more servers to accommodate
      growing data and traffic demands. In addition to sharding, MongoDB
      offers replication as a means of ensuring data availability and
      resilience. Replication involves creating multiple copies of data
      across different servers, forming a replica set. This configuration
      provides fault tolerance and high availability by allowing data to
      remain accessible even if one server fails. Replica sets also enable
      automatic failover, ensuring that a secondary server can take over
      if the primary server becomes unavailable. MongoDB's query language,
      called the aggregation framework, provides powerful and expressive
      ways to manipulate and analyze data. Developers can perform complex
      queries, data transformations, and aggregations directly on the
      database, reducing the need for application-level processing..`,
        },
    ];




    return (
        <div className="tab-sec">
            <div className="logo">
                <img ref={refernceimg} src={data[0].url} alt="web_2.0" />
            </div>

            <div className="content">
                <div ref={refernce} className="tabs">
                    <button className="btn-sec">Html</button>
                    <button className="btn-sec">Css</button>
                    <button className="btn-sec">JS</button>
                    <button className="btn-sec">React</button>
                    <button className="btn-sec">Node</button>
                    <button className="btn-sec">Mongo</button>
                </div>

                <div className="topic-discrip">
                    <p ref={referncepara}>
                        {data[0].discription}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Tab;
