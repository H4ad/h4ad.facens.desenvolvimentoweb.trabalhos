//#region Imports

import bodyparser from 'body-parser';
import express from 'express';
import { setupDefaultRoutes } from './controllers/default.controller';
import { Logger } from './utils/logger';

//#endregion

//#region Declarations

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const logger = new Logger('Express');

//#endregion

//#region Routes

const server = app.listen(port, () => {
	logger.log('Listening on port: ' + port);
});

(async () => {
	// const connection = await getDatabaseConnection();

	setupDefaultRoutes(app/*, connection*/);
})().catch((error) => {
	logger.error(error);

	server.close();
});

//#endregion
