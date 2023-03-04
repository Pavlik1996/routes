export const dataState: DataStateType = {
    page: [
        {
            heading: 'Цикл while',
            about: 'Цикл while имеет следующий синтаксис'
        },
        {
            heading: 'Цикл for',
            about: 'Цикл for имеет следующий синтаксис'
        },
        {
            heading: 'Цикл switch',
            about: 'Цикл switch имеет следующий синтаксис'
        },
    ]
}

export type DataStateType = {
    page: PagesType[]
}

export type PagesType = {
    heading: string,
    about: string
}