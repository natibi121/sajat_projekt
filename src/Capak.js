import styled from "styled-components"
import { useQuerySubscription } from "react-datocms";

const Capak = () => {
    const {data} = useQuerySubscription({
        enabled: true,
        query:`
        {
            allCapak {
                faj
                capanev{
                    name
                    alfaj
                    photo{
                        url
                    }
                }
            }
        }
        `,
        token: 'YOUR-API-TOKEN',
    });
    const capak = data?.allCapak
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
            </Capanevek>
        </Keret>
    )
}
const Capanevek = styled.div`
    font-size: 14px;
    font-weight: 400px;
    color: rgb(150, 150, 150);
    img {
        width: 80px;
        border-radius: 50%;
        padding-top: 10px;
    }
`
const Keret = styled.div`
    padding: 15px;
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
                url: ""
            },
            name: 'Feketeúszójú szirticápa',
        }
    },
    {
        faj: "Cápa",
        capanev: {
            alfaj: "Heringcápa",
            photo: {
                url: ""
            },
            name: 'Fehér cápa',
        }
    },
    {
        faj: "Rája",
        capanev: {
            alfaj: "Porcos hal",
            photo: {
                url: ""
            },
            name: 'Tövises rája',
        }
    }
]