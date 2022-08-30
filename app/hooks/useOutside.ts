import {RefObject, useEffect, useRef, useState} from "react";

interface TypeOut {
    ref: RefObject<HTMLElement>
    isShow: boolean
    setIsShow: (isShow: boolean) => void
}

export const useOutside = (initialIsVisible: boolean): TypeOut => {
    const [isShow, setIsShow] = useState(initialIsVisible)
    const ref = useRef<HTMLElement>(null)

    const handleSetIsShow = (value: boolean) => {
        setIsShow(value)
    }

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {}
        handleSetIsShow(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    })

    return {ref, isShow, setIsShow: handleSetIsShow}
}
