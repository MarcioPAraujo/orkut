"use client";

import { DefaultButton } from "@/components/buttons/DefaultButton/DefaultButton";
import React, { useRef, useState } from "react";
import { RxCaretUp } from "react-icons/rx";
import styles from "./newtestimonial.module.css";

interface ITestimonial {
    userName: string;
    text: string;
    photoSrc?: string;
}

const testmonials: ITestimonial[] = [
    {
        photoSrc:
            "https://images.unsplash.com/photo-1786677772080-f908094ea342?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
        userName: "Helena",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis suscipit accusantium voluptas aspernatur eum beatae, ex sequi! Quo nemo perferendis voluptatum dolores, veniam quia libero voluptates ut, cumque, qui hic?",
    },
    {
        photoSrc:
            "https://images.unsplash.com/photo-1787647560650-3d6c82618cea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis suscipit accusantium voluptas aspernatur eum beatae, ex sequi! Quo nemo perferendis voluptatum dolores, veniam quia libero voluptates ut, cumque, qui hic?",
        userName: "Elias",
    },
];

function NewTestimonials() {
    const [open, setOpen] = useState<string>(styles.contentvisible);
    const onRefuse = (id: string) => {
        console.log("refuse testimonial", id);
    };
    const onAccept = (id: string) => {
        console.log("accept testimonial", id);
    };
    const toggleArea = () => {
        if (open === styles.contentvisible) {
            setOpen(styles.contenthidden);
            return;
        }
        setOpen(styles.contentvisible);
    };
    const getInlineStyle = () => {
        if (open === styles.contentvisible) {
            return {
                height: `${testmonials.length * 195}px`,
            };
        }
        return {
            height: "0rem",
        };
    };
    return (
        <div>
            <div className={styles.titlewrapper}>
                <h3 className={styles.title}>Novos depoimentos (2)</h3>
                <button
                    type="button"
                    className={styles.caretbutton}
                    onClick={toggleArea}
                >
                    <RxCaretUp />
                </button>
            </div>

            <div className={open} style={getInlineStyle()}>
                {testmonials.map((testmonial) => (
                    // use testimonial id, later
                    <div
                        key={testmonial.userName}
                        className={styles.testimonialcontainer}
                    >
                        <div className={styles.testimonial}>
                            {testmonial.photoSrc && (
                                <img
                                    className={styles.photo}
                                    src={testmonial.photoSrc}
                                    alt={`profile photo of ${testmonial.userName}`}
                                />
                            )}
                            {!testmonial.photoSrc && <div />}
                            <div>
                                <h4 className={styles.username}>
                                    {testmonial.userName}
                                </h4>
                                <p className={styles.text}>{testmonial.text}</p>
                            </div>
                        </div>
                        <div className={styles.buttonscontainer}>
                            <DefaultButton
                                label="Recusar"
                                variant="redOutlined"
                                onClick={() => onRefuse("123")}
                                width="10rem"
                            />
                            <DefaultButton
                                label="Aceitar"
                                onClick={() => onAccept("789")}
                                width="10rem"
                            />
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewTestimonials;
