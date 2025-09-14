
export interface MajorCredits {
  credits: number;
  readonly __brand: "major";
}

export interface MinorCredits {
  credits: number;
  readonly __brand: "minor";
}


function makeMajorCredits(credits: number): MajorCredits {
  return { credits, __brand: "major" };
}

function makeMinorCredits(credits: number): MinorCredits {
  return { credits, __brand: "minor" };
}


export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return makeMajorCredits(subject1.credits + subject2.credits);
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return makeMinorCredits(subject1.credits + subject2.credits);
}


const math = makeMajorCredits(3);
const physics = makeMajorCredits(4);
console.log("Total Major:", sumMajorCredits(math, physics).credits);

const art = makeMinorCredits(2);
const music = makeMinorCredits(1);
console.log("Total Minor:", sumMinorCredits(art, music).credits);
