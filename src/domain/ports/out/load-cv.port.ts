import {File} from "../../entities/file";

export interface LoadCvPort {
    loadCV(): Promise<File>;
}