import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ReactElement } from "react"
import { ChevronRight } from "@mui/icons-material";
import styles from "../styles/Explorer.module.css"


const Explorer: React.FC = (): ReactElement => {

    const [isShown, setIsShown] = useState(true)
    return (
        <>
        <div className={styles.explorer}>
            <p>Explorer</p>
            <div>
                <input type="checkbox"
                className={styles.checkBox}
                id="files-chechbox"
                onChange={()=> setIsShown(!isShown)}
                checked={isShown}
                />
                <label htmlFor="files-checkbox" className={styles.heading}>
                <ChevronRight className={styles.chevron} style={isShown ? {transform: 'rotate(90deg)'} : {}} />
                Portfolio
                </label>
                <div className={styles.files} 
                    style={isShown ? {display: 'block'} : {display: 'none'}}></div>
            </div>
        </div>
        </>
    )
}