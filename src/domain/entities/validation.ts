export interface Validation<T> {
    validate(value: T): boolean
}