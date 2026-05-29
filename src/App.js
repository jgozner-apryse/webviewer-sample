import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebViewer from '@pdftron/webviewer';

function App() {
  const viewer1 = useRef(null);
  const viewer2 = useRef(null);
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/files/WebviewerDemoDoc.pdf',
        licenseKey: "demo:1688745488452:7c640dad0300000000ff98c75e9e3a6477a0d966fddd63ac8543da906b",
      },
      viewer1.current,
    ).then((instance) => {
    });

    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/files/Legal.docx',
        enableOfficeEditing: true,
        licenseKey: "demo:1688745488452:7c640dad0300000000ff98c75e9e3a6477a0d966fddd63ac8543da906b",
      },
      viewer2.current,
    ).then((instance) => {
    });
    }, []);

    return (
      <div className="App">
        <Tabs forceRenderTabPanel={true}>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>
          <TabPanel>
            <div className="webviewer" ref={viewer1}></div>
          </TabPanel>
          <TabPanel>
            <div className="webviewer" ref={viewer2}></div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }

export default App;
