import * as yup from 'yup';
import { pt } from 'yup-locale-pt';

yup.setLocale(pt);

export const userSchema = yup.object().shape({
	nome: yup.string().required(),
	email: yup
		.string()
		.email()
		.required()
		.matches(
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'email deve ser um e-mail válido'
		),
	senha: yup.string().required().min(6)
});
