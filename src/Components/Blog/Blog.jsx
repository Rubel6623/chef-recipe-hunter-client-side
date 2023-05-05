import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div className="bg-red-50 h-full  text-end">
      <Pdf className="" targetRef={ref} filename="Blog.pdf">
        {({ toPdf }) => (
          <button className="btn btn-outline btn-info" onClick={toPdf}>
            Generate Pdf
          </button>
        )}
      </Pdf>
      <div className="mt-12" ref={ref}>
        <div className="grid md:grid-cols-3">
          <div className="card-body border-2 shadow-xl mb-24 ms-12 rounded-lg">
            <h2 className="card-title text-start">
              Differences between uncontrolled and controlled components.
            </h2>
            <p className="text-start">
              Uncontrolled components are not directly managed or controlled by
              the application, while controlled components are. Uncontrolled
              components are typically simple inputs that do not require any
              complex validation or data management, while controlled components
              are often used for more complex inputs that require validation and
              manipulation.
            </p>
          </div>

          <div className="card-body border-2 shadow-xl mb-24 ms-12 rounded-lg">
            <h2 className="card-title text-start">
              How to validate React props using PropTypes?
            </h2>
            <p className="text-start">
              Props validation is a tool that will help the developers to avoid
              future bugs and problems. It is a useful way to force the correct
              usage of your components.App.propTypes is used for props
              validation in react component. When some of the props are passed
              with an invalid type, you will get the warnings on JavaScript
              console. After specifying the validation patterns, you will set
              the App.defaultProps.
            </p>
          </div>

          <div className="card-body border-2 shadow-xl mb-24 ms-12 rounded-lg">
            <h2 className="card-title text-start">
              The difference between nodejs and express js.
            </h2>
            <p className="text-start">
              Node.js is a runtime environment for executing JavaScript code
              outside of a web browser, while Express.js is a web framework
              built on top of Node.js. Node.js provides an environment for
              running JavaScript code on the server-side, while Express.js
              provides a set of features and tools for building web applications
              and APIs quickly and easily. Node.js comes with a rich set of
              built-in modules, while Express.js provides a middleware
              architecture and a routing system for building web applications
              and APIs.
            </p>
          </div>

          <div className="card-body border-2 shadow-xl mb-24 ms-12 rounded-lg">
            <h2 className="card-title text-start">What is a custom hook, and why will you create a custom hook?</h2>
            <p className="text-start">
            A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic (say a “setState” or localStorage logic), you can put that code inside a custom hook and reuse it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
