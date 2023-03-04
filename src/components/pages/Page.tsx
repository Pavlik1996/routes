import { useParams } from "react-router-dom"
import { dataState, PagesType } from "../../data/dataState"
import { Content } from "../Content"

type PropsType = {
    pages: PagesType[]
}

export const Page = (props: PropsType) => {

    const params = useParams()
    console.log(params);

    return (
        <div>
            <Content page={props.pages[Number(params.id)]} />
        </div>
    )
}