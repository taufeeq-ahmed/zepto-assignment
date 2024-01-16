"use client"
import React, { useState } from 'react'
import styles from "./styles.module.css"
import Image from 'next/image';

function MultiSelect({ options, values, onChange }) {
    const [showOptions, setShowOptions] = useState(false);

    const filterdOptions = options.filter((option) => {
        const foundObject = values.find(obj => {
            console.log(obj, option)
            return obj.label === option.label && obj.value === option.value
        });
        console.log(foundObject);
        return !foundObject;
    });


    return (
        <div className={styles.container}>
            <div className={styles.input_container}>
                <div className={styles.selected_values}>
                    {values?.map((option) => {
                        return (
                            <div className={styles.selected_pill} key={option.value}>
                                <Image
                                    className={styles.character_image}
                                    src={option.image}
                                    width={20}
                                    height={20}
                                />
                                {option.value}
                            </div>
                        )
                    })}
                    <input
                        type='text'
                        className={styles.input}
                        placeholder='Please select characters'
                        onClick={() => setShowOptions(!showOptions)}
                    />
                </div>


            </div>
            {showOptions && filterdOptions.length > 0 && (
                <div className={styles.options_list}>
                    {filterdOptions?.map((option) => {
                        return (
                            <div
                                className={styles.option}
                                onClick={() => { onChange(option) }}
                                index={option.value}
                            >
                                <Image
                                    className={styles.character_image}
                                    src={option.image}
                                    width={40}
                                    height={40}

                                />
                                <p className={styles.option_value}>{option.label}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div >
    )
}

export default MultiSelect