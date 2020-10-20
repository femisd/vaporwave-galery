import React, { useState, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ig from 'instagram-scraping';
import {
  styleReset,
  Window,
  WindowContent,
  WindowHeader,
  Button,
  AppBar,
  Toolbar,
  List,
  ListItem,
  Divider,
  Panel
} from 'react95';
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import './App.scss';
import winLogo from './winLogo.png'


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

//update hook
// Workaround to handle the slow image scraper.
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

function App() {

  const [galleryList, setGalleryList] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
  const forceUpdate = useForceUpdate();
  const [isInfoClosed, setInfoClosed] = useState(false)

  let gallery = [];
  const artists = ["crimsondawn97", "floatingheavy", "lofi.icon", "seerlight", "depression_vaporwave", "shapesoftime", "vapor_waveart"]

  useEffect(() => {
    fetchImagesByUsernames(artists);
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
      setGalleryList(gallery);
      forceUpdate();
      console.log("gallery updated")
    }, 1);
    return () => clearInterval(interval);

  }, []);


  const fetchImagesByUsernames = (usernames) => {
    usernames.forEach(username => {
      ig.scrapeUserPage(username).then(result => {
        if (result) {
          result.medias.map(el => {
            el.username = username
            gallery.push(el);
          })
        }
      });

    })
  }

  const closeArtWindow = (index) => {
    console.log(index)
    setGalleryList(galleryList.splice(index,1));
    console.log(galleryList[index])
  }

  const closeInfo = () => {
    setInfoClosed(true);
  }


  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <>
        <div style={{minHeight: "100vh"}}>
          <Window className='window-info' style={isInfoClosed ? {display: "none"} : {}}>
            <WindowHeader className='window-header'>
              <span className="headerSpan">VaporwaveGallery.exe</span>

              <Button className="closeBtn" onClick={() => closeInfo()}>
                <div className="closeIconLeft">
                  <div className="closeIconRight"></div>
                </div>
              </Button>
            </WindowHeader>

            <WindowContent className="infoContent">
              <p>
                Welcome to Vaporwave Gallery!
             </p>
              <p>A digital art gallery with a vaporwave aesthetic.</p>
            </WindowContent>
          </Window>
          <br />

          {galleryList.map((content, index) => {
            return (
              <Window className='window' key={index}>
                <WindowHeader className='window-header'>
                  <a href={`https://www.instagram.com/${content.username}/`} target="_blank">
                    <span className="headerSpan">{content.username}.jpg</span>
                  </a>
                  <Button className="closeBtn" onClick={() => closeArtWindow(index)}>
                    <div className="closeIconLeft">
                      <div className="closeIconRight"></div>
                    </div>
                  </Button>

                </WindowHeader>

                <WindowContent>
                  <img src={content.display_url} width="100%" height="100%" />
                </WindowContent>
              </Window>

            )
          })}
          </div>
          <AppBar style={{ bottom: "0%", position: "sticky", width: "100%", zIndex: 99 }}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <Button
                  onClick={() => setOpen(!open)}
                  active={open}
                  style={{ fontWeight: 'bold' }}
                >
                  <img
                    src={winLogo}
                    alt=''
                    style={{ height: '20px', marginRight: 4 }}
                  />
            Start
          </Button>
                {open && (
                  <List
                    style={{
                      position: 'absolute',
                      left: '0',
                      bottom: '100%'
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <ListItem disabled>Check Out The Artists</ListItem>
                    <Divider />

                    {artists.map((artist, index) => {
                      return (
                        <a key={index} href={`https://www.instagram.com/${artist}/`} target="_blank">
                          <ListItem>
                            <span role='img' aria-label='📁' style={{marginRight: "2px"}}>
                            📁
                          </span>
                            {artist}
                          </ListItem>
                        </a>
                      )
                    })}
                    <Divider />
                    <a href="https://github.com/femisd" target="_blank">
                      <ListItem>
                        <span role='img' aria-label='💻'>
                        ⚙️
                          </span>
                          My Github
                        </ListItem>
                    </a>

                    <ListItem disabled>
                      <span role='img' aria-label='🖥️'>
                      🖥️
                </span>
                Logout
              </ListItem>
                  </List>
                )}
              </div>

              <Panel variant='well' style={{ padding: "5px" }}>
                {currentTime}
              </Panel>
            </Toolbar>
          </AppBar>
        </>
      </ThemeProvider>
    </div>
  );
}
export default App;
