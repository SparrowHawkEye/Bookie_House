import React, { useEffect, useState } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { Accordion } from "flowbite-react";
import Loading from "../../Shared/Loading/Loading";

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Wait for 1.5 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return isLoading ? (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <Loading />
    </div>
  ) : (
    <div className="w-9/12 my-20 mx-auto">
      <PageTitle title="Blogs" />

      <Accordion flush={true}>
        <Accordion.Panel open={true}>
          <Accordion.Title arrowIcon={undefined}>
            Difference between Javascript and NodeJS?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              JavaScript is a popular language which runs inside website
              browsers as part of documents loaded by that browser. It gives
              behaviour to the web pages. On the other hand NodeJS usually
              represents a collection of methods and objects available to the
              JavaScript code when run in V8 or through the node interpreter.
              This is a JS library cum runtime.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Javascript is mainly used for any client side activity for the web
              application. On the other hand NodeJS is used for performing or
              accessing any non-blocking operation of operating system, like
              executing or creating a shell script or accessing the hardware
              specific information or running any job in the backend.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              JavaScript running any engine like JavaScript Core (Safari),
              Spider monkey (FireFox), V8 (Google Chrome). On the other hand
              Node.js only runs in a V8 engine that is mainly used by Google
              Chrome. And, JS program which will be written with the help of
              Node.js library will always run in the V8 Engine.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title arrowIcon={undefined}>
            Differences between SQL and NoSQL databases.
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              <span className="font-semibold my-3 text-gray-800 mr-2 text-lg">
                SQL:
              </span>
              Structured Query Language or SQL is a standard Database language
              which is used to create, maintain and retrieve the data from
              relational databases like MySQL, Oracle, SQL Server, PostGre, etc.
            </p>

            <p className="mb-2 text-gray-500 dark:text-gray-400">
              <span className="font-semibold my-3 text-gray-800 mr-2 text-lg">
                NoSQL:
              </span>
              A NoSQL originally referring to non SQL or non relational is a
              database that provides a mechanism for storage and retrieval of
              data.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              <span className="font-semibold my-3 text-gray-800 mr-2 text-lg">
                Differences:
              </span>
              Some of the main differences between these two are given below:
            </p>
            <ol className="my-3 space-y-3 text-gray-500 dark:text-gray-400 ml-4">
              <li>
                <span className="font-bold text-lg">1</span>. SQL databases are
                relational, NoSQL databases are non-relational.
              </li>
              <li>
                <span className="font-bold text-lg">2</span>. SQL databases use
                structured query language and have a predefined schema. NoSQL
                databases have dynamic schemas for unstructured data.
              </li>
              <li>
                <span className="font-bold text-lg">3</span>. SQL databases are
                vertically scalable, while NoSQL databases are horizontally
                scalable.
              </li>
              <li>
                <span className="font-bold text-lg">4</span>. SQL databases are
                table-based, while NoSQL databases are document, key-value,
                graph, or wide-column stores.
              </li>
              <li>
                <span className="font-bold text-lg">3</span>. SQL databases are
                better for multi-row transactions, while NoSQL is better for
                unstructured data like documents or JSON.
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title arrowIcon={undefined}>
            What is the purpose of jwt and how does it work?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              JSON Web Token (JWT) is a compact and self-contained way for
              securely transmitting information between parties as a JSON
              object. This information can be verified and trusted because it is
              digitally signed. JWTs can be signed using a secret or a
              public/private key
            </p>
            <h3 className="font-semibold my-3 text-lg">Purpose of JWT:</h3>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The most common scenario for using JWT is for authorization. Once
              the user is logged in, each subsequent request will include the
              JWT, allowing the user to access routes, services, and resources
              that are permitted with that token.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              JSON Web Tokens are a good way of securely transmitting
              information between parties. Because JWTs can be signed using a
              secret or a public/private key pairs. You can be sure the senders
              are who they say they are. Additionally, as the signature is
              calculated using the header and the payload, you can also verify
              that the content hasn't been tampered with.
            </p>
            <h3 className="font-semibold my-3 text-lg">How JWT works:</h3>
           
            <ol className="mb-2 space-y-3 text-gray-500 dark:text-gray-400">
              <li>
                <span className="font-bold text-lg">1</span>. The application or
                client requests authorization to the authorization server. This
                is performed through one of the different authorization flows.
                For example, a typical OpenID Connect compliant web application
                will go through the /oauth/authorize endpoint using the
                authorization code flow.
              </li>
              <li>
                <span className="font-bold text-lg">2</span>. When the
                authorization is granted, the authorization server returns an
                access token to the application.
              </li>
              <li>
                <span className="font-bold text-lg">3</span>. The application
                uses the access token to access a protected resource (like an
                API).
              </li>
            </ol>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blogs;
