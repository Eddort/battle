
const React = require("react");
const QAPI = require("./qapi").default;

export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    }
) => {
  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    <link rel="shortcut icon" href="http://uploads.quarkly.io/readme/cra/favicon-32x32.ico" />,
//     <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />,
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap" />,
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open%20Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" />,
  ]);

  setPostBodyComponents([
        <script
            key="QAPI"
            dangerouslySetInnerHTML={{
                __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
            }}
        />,
  ]);
}
