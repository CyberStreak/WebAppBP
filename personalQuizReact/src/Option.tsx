interface Props {
    onSelect: (isCorrect: boolean) => void
}

export const Options = ({onSelect}: Props) => {

    const handleClick = (answer: boolean) => {
        onSelect(answer)
    }

    return (
            <div>
                <label>
                    <input
                        type={"radio"}
                        name={"things"}
                        onClick={() => handleClick(false)}
                    />
                    Ich spielte Fussball in der 2. Liga inter
                </label>
                <div>
                    <label>
                        <input
                            type={"radio"}
                            name={"things"}
                            onClick={() => handleClick(false)}
                        />
                        Ich habe ein Aquarium zu Hause
                    </label></div>
                <div>
                    <label>
                        <input
                            type={"radio"}
                            name={"things"}
                            onClick={() => handleClick(true)}
                        />
                        Ich trage gerne sportliche Kleidung
                    </label></div>
            </div>
    )
}