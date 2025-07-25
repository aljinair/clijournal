import { configChecker } from './utils/configChecker.ts';

// Punto entrada de la aplicación
// TODO: Comprobar si hay alguna partida/journal creada
// 	TODO: Si no hay partida creada, entrar en el creador de partida.
// 	TODO: Si hay partidas creadas, ofrecer crear partida o cargar partida existente.
//	TODO: Si se va a crear una partida, hay que elegir al menos un nombre y un archivo de configuración.
//
//
// TODO: Comprobar si es la primera vez que se inicia o de si no hay archivo de configuración.
configChecker();
// TODO: Si no hay un archivo de configuración, crear default.
// TODO: Comprobar si hay un diario
// TODO: Si no hay diario, proponer crear uno -> Seguir los pasos para crear un primer diario.
