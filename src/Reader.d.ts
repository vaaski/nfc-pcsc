import type { TypedEmitter } from './TypedEmitter';

type Type = 'TAG_ISO_14443_3' | 'TAG_ISO_14443_4';

interface Card {
	type: Type;
	standard: Type;
	uid?: string;
	data?: Buffer;
}

interface ReaderEmitter {
	card: (x: Card) => void;
	'card.off': (x: Card) => void;
	error: (x: Error) => void;
	end: () => void;
}

export class Reader extends TypedEmitter<ReaderEmitter> {
	get name(): string;
}
