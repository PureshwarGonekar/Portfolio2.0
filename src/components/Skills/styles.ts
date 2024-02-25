import styled from "styled-components";


export const Container = styled.section`
    .skills {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 60vh;
    padding: 2.5rem 2rem 2rem 2rem;
}

.skillsHeader {
    display: flex;
    align-items: center;
    justify-content: center; 
}

.skillsHeader h2 {
    font-family: var(--primaryFont);
    font-style: normal;
    font-weight: bold;
    font-size: 3.5rem;
    text-align: center;
}

.skillsContainer {
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 100%;
    margin-top: 3.5rem;
    padding: 0 2rem;
}

.skill--scroll {
    width: 100%;
    margin: 0 2rem;
}


.skill--box {
    background: #FAFAFA;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    width: 160px;
    height: 160px;
    margin: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    transition: 300ms ease-in-out;
}

.skill--box:hover  {
    transform: scale(1.15);
}


.skill--box > img {
    height: 50px;
    pointer-events: none;
}


.skill--box h3 {
    font-family: Big Shoulders Text;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    margin-top: 1rem;
}


.marquee {
    padding: 3rem 0;
}


@media (min-width: 992px) and (max-width: 1380px) {
    .skills {
        padding: 2rem 1rem 1rem 1rem;
    }
    .skillsContainer {
        padding: 1.5rem;
        margin-top: 1.5rem;
    }
}


@media screen and (max-width: 992px) {
    .skills {
        padding: 1rem;
        min-height: 100%;
    }
    .skillsContainer {
        padding: 1rem;
        margin: 1rem 0;
    }
    .skillsHeader h2 {
        font-size: 3.2rem;
    }
    .skill--box {
        width: 150px;
        height: 150px;
        margin: 1.2rem;
        padding: 2rem 1rem;
    }

    .skill--box > img {
        height: 45px;
    }


    .skill--box h3 {
        font-size: 20px;
        margin-top: 1rem;
    }

}

@media screen and (max-width: 800px) {
    .skills {
        padding: 0.5rem;
    }
    .skillsContainer {
        padding: 0.5rem;
    }
    .skillsHeader h2 {
        font-size: 3rem;
    }

    .skill--scroll {
        width: 100%;
        margin: 0;
    }
}

@media screen and (max-width: 600px) {
    .skill--box {
        width: 135px;
        height: 135px;
        margin: 1.2rem;
        padding: 2rem 1rem;
    }

    .skill--box > img {
        height: 40px;
    }

    .skillsHeader h2 {
        font-size: 2.5rem;
    }

    .skill--box h3 {
        font-size: 18px;
        margin-top: 1rem;
    }
}

@media screen and (max-width: 400px) {

}
  
@media only screen and (min-device-width: 320px) and (max-device-width: 
  480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {

}


@media only screen and (device-width: 768px) {

}
`