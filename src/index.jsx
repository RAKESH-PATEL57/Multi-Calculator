import App from "./Components/App";

import { createRoot } from 'react-dom/client';
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// ReactDom.render(<App />,document.getElementById("root"));  // react17