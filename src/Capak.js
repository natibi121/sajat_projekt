import styled from "styled-components"
//import { useQuerySubscription } from "react-datocms";

const Capak = () => {
    return(
        <>
        {capak ?
            capak.map((capa, index) => (
            <Capa capa={capa} key={index}/>
        )): null}
        </>
    )
}

const Capa = (props) => {
    const {capa} = props
    return(
        <Keret>
            <Title>{capa.alfaj}</Title>
            <Capanevek>
                {capa.capanev.name} , {capa.capanev.alfaj}
                <div>
                <img src={capa.capanev.photo.url} alt={capa.capanev.name}/>
                </div>
                {capa.leiras}
            </Capanevek>
        </Keret>
    )
}
const Capanevek = styled.div`
    font-size: 25px;
    font-weight: 400px;
    color: rgb(150, 150, 150);
    img {
        width: 120px;
        border-radius: 80%;
        padding-top: 10px;
    }
`
const Keret = styled.div`
    padding: 15px;
    border-bottom: solid 1px black;
`
const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
`
export default Capak

const capak = [
    {
        faj: "Cápa",
        capanev: {
            alfaj: "Kékcápa",
            photo: {
                url: "./szirticapa.jpg"
            },
            name: 'Feketeúszójú szirticápa',
        },
        leiras: 'Kis méretű cápafaj, melynek pofája lekerekített. Mindegyik úszójának a végén fekete vagy sötétbarna folt látható.'
    },
    {
        faj: "Cápa",
        capanev: {
            alfaj: "Heringcápa",
            photo: {
                url: "./fehercapa.jpg"
            },
            name: 'Fehér cápa',
        },
        leiras: 'Ennek a porcos halnak nagy, tompa, kúp alakú orra van, és a szemei feltűnően feketék. Egyértelműen felismerhető arányos testéről, magas elülső hátúszójáról és nagy, holdsarló alakú farokúszójáról.  Háti része sötétebb színű, általában barnás vagy kékes árnyalatú, míg alsó, hasi része fehér, innen kapta nevét.'
    },
    {
        faj: "Rája",
        capanev: {
            alfaj: "Porcos hal",
            photo: {
                url: "./tovisesraja.jpg"
            },
            name: 'Tövises rája',
        },
        leiras: 'A tompa, rövid fejű fajok közé tartozik, a szeme előtt és mögött egy-egy sarló alakú tüske van. Hátbőrén tövisszerű bőrfogak találhatók.'
    },
    {
        faj: "Rája",
        capanev: {
            alfaj: "Porcos hal",
            photo: {
                url: "./ordograja.jpg"
            },
            name: 'Atlanti ördögrája',
        },
        leiras: 'Az atlanti ördögrája hossza 3–5 méter, úszófesztávolsága 4,5–7 méter, de akár 9,1 méter is lehet. A rája fejének két oldalán két óriási úszó van, amelyek úgy néznek ki, mint két hatalmas, puha szárny. Arra használja őket, hogy táplálékát közvetlenül széles pofájába terelje.'
    },
    {
        faj: "Cápa",
        capanev: {
            alfaj: "Kékcápa",
            photo: {
                url: "./tigriscapa.jpg"
            },
            name: 'Tigriscápa',
        },
        leiras: 'A ma élő nagytestű cápák közt, az átlagos méretet véve, a tigriscápa az egyik legnagyobb; nála csak a cetcápa (Rhincodon typus), az óriáscápa (Cetorhinus maximus) és a fehér cápa (Carcharodon carcharias) nagyobb. A fiatal cápa testén számos függőleges csík és folt található, innen jön a neve is'
    },
    {
        faj: "Rája",
        capanev: {
            alfaj: "Porcos hal",
            photo: {
                url: "./sasraja.jpg"
            },
            name: 'Sasrája',
        },
        leiras: 'Teste lapított, a hosszánál csaknem kétszer szélesebb. Az alakját meghatározó mellúszók nagyok, szélesek, hegyesek, szárny formájúak, a hátsó szélük öblösen bemetszett. A patkó alakú fej szélesebb, mint amilyen hosszú, és a testtől kifejezetten elkülönül.  '
    }
]