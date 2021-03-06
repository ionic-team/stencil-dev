"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example: const rReadFile = promisify<Buffer, string>(fs.readFile);
 *
 */
exports.promisify = function (func) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            func(...args, (err, response) => {
                if (err) {
                    return reject(err);
                }
                if (response) {
                    return resolve(response);
                }
                resolve();
            });
        });
    };
};
exports.promisifyNr = function (func) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            func(...args, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    };
};
