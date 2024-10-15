interface TranscriptionMap {
  [key: string]: string;
}

const transcriptionMap: TranscriptionMap = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

export function toRna(input: string): string {
  let transcription: string = '';

  for (const char of input) {
    const rna: string | undefined = transcriptionMap[char];

    if (! rna) {
      throw new Error('Invalid input DNA.');
    }

    transcription += rna;
  }

  return transcription;
}
