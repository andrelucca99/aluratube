import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import { StyledTimeline } from "../src/components/Timeline";
import Menu from "../src/components/Menu";

function HomePage() {
  const [valorDoFiltro, setvalorDoFiltro] = React.useState("");
  return (
    <>
      <CSSReset />
      <div>
        <Menu valorDoFiltro={valorDoFiltro} setvalorDoFiltro={setvalorDoFiltro}/>
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>Conteúdo</Timeline>
      </div>
    </>
  );
}

export default HomePage;

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
  .icon-user {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  background-image: url(${config.banner});
  background-repeat: no-repeat;
  background-size: cover;
  height: 230px;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner />
      <section className="user-info">
        <img className="icon-user" src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({searchValue, ...propriedades}) {
  const playlistNames = Object.keys(propriedades.playlists);
  // Statement
  // Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const searchValueNormalized = searchValue.toLowerCase();
                return titleNormalized.includes(searchValueNormalized)
              }).map((video) => {
                return (
                  <a key={video.url} href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
      <div className="favorites">
        <h3>AluraTubes Favoritos</h3>
        <img className="img-favor" src={ config.favorites[0] } />
        <img className="img-favor" src={ config.favorites[1] }/>
      </div>
    </StyledTimeline>
  );
}
