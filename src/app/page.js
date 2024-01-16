"use client"
import { useState } from "react";
import MultiSelect from "./components/MultiSelect";
import styles from "./page.module.css"
import Link from "next/link";
export default function Home() {
	const myGithubURl = "https://github.com/taufeeq-ahmed"

	const [values, setValues] = useState([]);

	const options = [
		{
			label: 'Harry Potter',
			value: 'harry.potter@example.com',
			image: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg'
		},

		{
			label: 'Hermoine Granger',
			value: 'hermione.granger@example.com',
			image: "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg"
		},
		{
			label: 'Ron Weasly',
			value: 'ron.weasley@example.com',
			image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg'
		},
		{
			label: 'Albus Dumbledore',
			value: 'albus.dumbledore@example.com',
			image: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Dumbledore_-_Prisoner_of_Azkaban.jpg'
		},
		{
			label: 'Severus Snape',
			value: 'severus.snape@example.com',
			image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Ootp076.jpg'
		},
		{
			label: 'Luna Lovegood',
			value: 'luna.lovegood@example.com',
			image: "https://upload.wikimedia.org/wikipedia/en/c/c2/LunaLovegood.jpeg"
		},
		{
			label: 'Ginny Weasly',
			value: 'ginny.weasley@example.com',
			image: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Ginny_Weasley_poster.jpg'

		},
		{
			label: 'Neville Longbottom',
			value: 'neville.longbottom@example.com',
			image: 'https://upload.wikimedia.org/wikipedia/en/7/75/Neville_Longbottom.jpeg'
		},
		{
			label: 'Draco Malfoy',
			value: 'draco.malfoy@example.com',
			image: 'https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG'
		},
	]

	const handleSelectChange = (newOption) => {
		setValues([...values, newOption])
	}

	const handleSendEmail = () => {
		let resultString = "The email will be sent to : ";
		values.forEach((value) => {
			console.log(value)
			resultString += value.value;
			resultString += "\n"
		})
		alert(resultString)

	}
	return (
		<main className={styles.main}>
			<div className={styles.page_heading}>
				<h1 className={styles.heading}>MultiSelect Component !</h1>
				<p className={styles.dev_name}>
					--- by Taufeeq Ahmed
					{' '}
					<Link href={myGithubURl} target="_blank">
						Github (1600+ Contributions )
					</Link>
				</p>
			</div>
			<div className={styles.component_container}>
				<MultiSelect
					options={options}
					values={values}
					onChange={handleSelectChange}
				/>
			</div>

			{values.length > 0 && (
				<div className={styles.send_invite_button_container} onClick={handleSendEmail}>
					<button className={styles.send_invite_button}>
						Send Invite Email
					</button>
				</div>
			)}

		</main>
	)
}
