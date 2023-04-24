import 'express-async-errors';
import 'dotenv/config';
import swaggerUI from 'swagger-ui-express';
import express, { Response } from 'express';
import cors from 'cors';
import routerUser from './routes/userRoutes';
import routerCategory from './routes/categoryRoutes';
import routerLogin from './routes/authUserRoutes';
import errorMiddleware from './middlewares/errors';
import swaggerDocument from '../swagger.json';
import { getPathPackageJson } from './utils/getPathPackageJson';

const app = express();

app.use(cors());
app.use(express.json());

const swaggerUiOptions = {
	cors: true,
	swaggerOptions: {}
};

app.use(
	'/api-docs',
	swaggerUI.serve,
	swaggerUI.setup(swaggerDocument, swaggerUiOptions)
);
app.get('/swagger', (_, res: Response) => {
	return res.sendFile(process.cwd() + '/swagger.json');
});

app.get('/', async (_, res: Response) => {
	const caminho = await getPathPackageJson();

	res.json({
		version: require(caminho).version,
		authors: require(caminho).author
	});
});

app.use('/categoria', routerCategory);
app.use('/usuario', routerUser);
app.use('/login', routerLogin);

app.use((_, res: Response) => {
	res.status(404).json({ error: 'Page Not Found' });
});
app.use(errorMiddleware);

export default app;
