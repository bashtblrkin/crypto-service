import {ReactNode} from "react";

export interface DropDownWrapperProps {
    clickableElement: (toggleShow: () => void) => ReactNode | undefined
}