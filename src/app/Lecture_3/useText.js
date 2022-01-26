import { useEffect, useState } from "react"

const useText = () => {
    const [text, setText] = useState("");


    useEffect(() => {
        document.body.append(text);
    }, [text]);

    return {
        setText
    }
}

export default useText;