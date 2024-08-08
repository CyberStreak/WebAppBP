export type ResultType = 'pending' | 'correct' | 'wrong'

interface Props {
    result: ResultType
}

export const Result = ({result}: Props) => {

    switch (result) {
        case 'pending':
            return <h2>Rate mal..</h2>
        case 'correct':
            return <h2 className={"right"}>Super, das war richtig!</h2>
        case 'wrong':
            return <h2 className={"wrong"}>Nope, leider falsch...</h2>
    }
}