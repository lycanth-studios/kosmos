/**
 * Asserts the specified value is not undefined.
 * @param value
 */
export function assertDefined<T>(value: T | undefined): asserts value is T {
	if (value === undefined) {
		throw new Error("Value is undefined");
	}
}
