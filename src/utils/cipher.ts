/**
 * Class implementing a Caesar Cipher for encryption and decryption of text.
 */
export class CaesarCipher {
    /**
     * Shifts a given character by a specified amount within the provided alphabet.
     *
     * @param char - The character to be shifted.
     * @param shift - The amount to shift the character by.
     * @param alphabet - The alphabet to be used for the cipher (default is the English alphabet).
     * @param decrypt - If true, performs decryption by shifting in the opposite direction.
     * @returns The shifted character.
     */
    private static shiftChar(
        char: string,
        shift: number,
        alphabet: string = "abcdefghijklmnopqrstuvwxyz",
        decrypt: boolean = false
    ): string {
        const alphabetLength = alphabet.length;
        // Check if the character is in the provided alphabet (both uppercase and lowercase)
        const charIndex = alphabet.indexOf(char.toLowerCase());

        if (charIndex !== -1) {
            // Apply the Caesar Cipher shift while maintaining the case
            const isUpperCase = char === char.toUpperCase();
            const effectiveShift = decrypt ? -shift : shift;
            const shiftedIndex = (charIndex + effectiveShift) % alphabetLength;
            const shiftedChar = isUpperCase
                ? alphabet.charAt(shiftedIndex < 0 ? shiftedIndex + alphabetLength : shiftedIndex).toUpperCase()
                : alphabet.charAt(shiftedIndex < 0 ? shiftedIndex + alphabetLength : shiftedIndex);

            return shiftedChar;
        }

        // If the character is not in the alphabet, return it unchanged
        return char;
    }

    /**
     * Encrypts a given input string.
     *
     * @param input - The text to be encrypted.
     * @param shift - The amount to shift each character by.
     * @param alphabet - The alphabet to be used for the cipher (default is the English alphabet).
     * @returns The encrypted string.
     */
    static encrypt(input: string, shift: number, alphabet?: string): string {
        return input
            .split("")
            .map((char) => this.shiftChar(char, shift, alphabet, false))
            .join("");
    }

    /**
     * Decrypts a given input string.
     *
     * @param input - The text to be decrypted.
     * @param shift - The amount to shift each character by.
     * @param alphabet - The alphabet to be used for the cipher (default is the English alphabet).
     * @returns The decrypted string.
     */
    static decrypt(input: string, shift: number, alphabet?: string): string {
        return input
            .split("")
            .map((char) => this.shiftChar(char, shift, alphabet, true))
            .join("");
    }
}
