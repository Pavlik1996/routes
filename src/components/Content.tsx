import { PagesType } from "../data/dataState"

type PropsType = {
    page : PagesType
}

export const Content = (props: PropsType) => {
    return (
        <div>
            {props.page.heading}
            {props.page.about}
        </div>
    )
}