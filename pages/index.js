import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import { StyledTimeline } from "../src/components/Timeline";
import Menu from "../src/components/Menu";

function HomePage() {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}>Conteúdo</Timeline>
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
  .banner-test {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .banner img{
    width: 100%;
    height: 350px;
    background: red;
    background-repeat: no-repeat;
  background-attachment: fixed;
    margin-top: 100px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className="banner">
        <img src={ config.banner } />
      </div>
      <section className="user-info">
        <img className="banner-test" src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(propriedades) {
  const playlistNames = Object.keys(propriedades.playlists);
  // Statement
  // Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
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
