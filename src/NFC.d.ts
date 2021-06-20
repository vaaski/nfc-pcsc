import type { TypedEmitter } from './TypedEmitter';

import { Reader } from './Reader';

interface NFCEmitter {
	reader: (reader: Reader) => void;
	error: (error: Error) => void;
}

export default class NFC extends TypedEmitter<NFCEmitter> {}
