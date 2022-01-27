const formValidation = (objectToValidate, handleSetErrors) => {
	let errors = {};
	let messages = [];

	for (const propName in objectToValidate) {
		const propValue = objectToValidate[propName];

		if (propName === 'paymentDue') continue;

		if (propName === 'clientEmail') {
			if (!emailValidation(propValue)) {
				errors = { ...errors, [propName]: true };
				messages.push('- The email must be valid');
			}
			continue;
		}

		if (propValue === '') {
			errors = { ...errors, [propName]: true };
			messages.push('- All fields must be added');
		}

		// Checking items array

		if (Array.isArray(propValue)) {
			let arr = [];
			let obj = {};

			if (propValue.length === 0) {
				errors = { ...errors, items: true };
				messages.push('- An item must be added');
			} else {
				propValue.forEach((object) => {
					for (let property in object) {
						if (object[property] === '') {
							obj = { ...obj, [property]: true };
							messages.push('- All fields must be added');
						} else {
							obj = { ...obj, [property]: false };
						}
					}
				});

				if (Object.keys(obj).length !== 0) {
					arr.push(obj);
					errors = { ...errors, [propName]: arr };
				}
			}
		}

		if (typeof propValue === 'object' && !Array.isArray(propValue)) {
			for (let property in propValue) {
				if (propValue[property] === '') {
					errors = {
						...errors,
						[propName]: {
							...errors[propName],
							[property]: true,
						},
					};
					messages.push('- All fields must be added');
				}
			}
		}
	}

	if (Object.keys(errors).length === 0) {
		return true;
	} else if (
		Object.keys(errors).length === 1 &&
		Object.keys(errors)[0] === 'items'
	) {
		if (!Array.isArray(errors.items)) {
			handleSetErrors(errors, [...new Set(messages)]);
			return false;
		}

		let arr = [];

		errors.items.forEach((obj) => {
			for (let prop in obj) {
				arr.push(obj[prop]);
			}
		});

		if (arr.includes(true)) {
			handleSetErrors(errors, [...new Set(messages)]);
			return false;
		} else {
			return true;
		}
	} else {
		handleSetErrors(errors, [...new Set(messages)]);
		return false;
	}
};

const emailValidation = (email) => {
	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(email);
};

export default formValidation;
