import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from '../hooks/useLocalStorage';
import SignIn from './SignIn/SignIn'
// import {useStateValue} from './ServiceProvider';
// import * from './firebase'
import 'bootstrap/dist/css/bootstrap.css';


function App()  {
  const [route,setroute] = useState('signin');
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');
  // const [{user},dispatch] = useStateValue();
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `)
    }, 250)
    return () => clearTimeout(timeout);
  }, [html, css, js]);


  const OnRouteChange = (route) => {
    console.log("route : ",route);
    if(route === 'home'){
      setroute('home');
    }
  }

    return (
      <>
        {(route === 'home')
          ?
          <div>
            <div className="pane top-pane">
              <Editor
                language="xml"
                displayName="HTML"
                value={html}
                onChange={setHtml}
              />
              <Editor
                language="css"
                displayName="CSS"
                value={css}
                onChange={setCss}
              />
              <Editor
                language="js"
                displayName="JS"
                value={js}
                onChange={setJs}
              />
            </div>
            <div className="pane">
              <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          : <SignIn  OnRouteChange={OnRouteChange}/>
        }
      </>
    )
}

export default App;
