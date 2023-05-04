import React from "react";
import { FaFileDownload } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <div className="py-10 bg-orange-100 bg-opacity-30 flex gap-4 items-center justify-center">
        <h2 className="text-3xl text-center ">
          blog <span className="font-semibold ">Download</span> here
        </h2>
        <button className="btn btn-circle">
          <FaFileDownload></FaFileDownload>
        </button>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 w-10/12 mx-auto  gap-3 p-2">
        <div className="mt-8 border p-2 bg-slate-200 bg-opacity-20 shadow-md rounded-md">
          <h2 className="text-4xl font-semibold">
            What is the differences between uncontrolled and controlled
            components ?
          </h2>
          <p className="text-lg mt-4 ">
            Controlled components require external control to manage their state
            and receive updates via props, while uncontrolled components manage
            their state internally without relying on external entities.
            Controlled components offer more fine-grained control over behavior
            and state, making them suitable for complex user interfaces, but
            require more setup and management. Uncontrolled components, on the
            other hand, are easier to use but offer less control over their
            behavior and are best suited for simpler UI elements. Ultimately,
            the choice between the two depends on the specific needs and
            complexity of the application's user interface.
          </p>
        </div>
        <div className="mt-8 border p-2 bg-slate-200 bg-opacity-20 shadow-md rounded-md">
          <h2 className="text-4xl font-semibold">
            How to validate React props using PropTypes ?
          </h2>
          <p className="text-lg mt-4 ">
            To validate React props using PropTypes, you need to import the
            PropTypes module from the 'prop-types' package. Then, define a
            propTypes object for your component, which specifies the expected
            data types and if they are required or not. You can add this
            propTypes object as a static property of your component. When a
            component receives props that do not match the expected types,
            PropTypes will throw a warning in the console, making it easier to
            debug potential issues.
          </p>
        </div>
        <div className="mt-8 border p-2 bg-slate-200 bg-opacity-20 shadow-md rounded-md">
          <h2 className="text-4xl font-semibold">
            What is the difference between nodejs and express js.?
          </h2>
          <p className="text-lg mt-4 ">
            Node.js is a runtime environment for executing JavaScript code
            outside of a web browser. It provides the ability to use JavaScript
            on the server-side, enabling developers to build scalable and
            high-performance applications using JavaScript.
            <br />
            Express.js, on the other hand, is a framework built on top of
            Node.js that simplifies the process of building web applications
            using Node.js. It provides a set of features and tools that make it
            easier to handle HTTP requests, routing, middleware, and other
            common web development tasks.
            <br />
            In short, Node.js is the runtime environment that allows you to
            execute JavaScript on the server, while Express.js is a framework
            that provides a set of tools and features for building web
            applications using Node.js.
          </p>
        </div>
        <div className="mt-8 border p-2 bg-slate-200 bg-opacity-20 shadow-md rounded-md">
          <h2 className="text-4xl font-semibold">
            What is a custom hook, and why will you create a custom hook??
          </h2>
          <p className="text-lg mt-4 ">
            A custom hook is a reusable function in React that contains stateful
            logic, such as fetching data or managing form inputs, that can be
            shared across different components in a React application. Custom
            hooks enable developers to abstract and encapsulate complex logic
            and share it across components, improving code reusability and
            reducing code duplication.
            <br />
            You would create a custom hook to abstract away repetitive or
            complex logic from components and keep the code more organized and
            maintainable. Custom hooks can also help to reduce the size of
            components and simplify the testing of the application.
            <br />
            In short, custom hooks are reusable functions that contain stateful
            logic and can be shared across different components in a React
            application. You would create a custom hook to improve code
            reusability, reduce code duplication, and keep the code more
            organized and maintainable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
