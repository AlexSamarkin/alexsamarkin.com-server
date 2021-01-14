import {GetCvQuery} from "../ports/in/get-cv.query";
import {LoadCvPort} from "../ports/out/load-cv.port";
import {File} from "../entities/file";

export const LoadCvServiceSymbol = Symbol('LoadCvService');

export class LoadCvService implements GetCvQuery {
    constructor(
        private readonly _loadCVPort: LoadCvPort
    ) {}

    async getCV(): Promise<File> {
        return await this._loadCVPort.loadCV();
    }
}