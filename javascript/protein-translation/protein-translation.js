//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const codons = (() => {
  let AUG, UUU, UUC, UUA, UUG, UCU, UCC, UCA, UCG, UAU, UAC, UGU, UGC, UGG, UAA, UAG, UGA;
  AUG = 'Methionine';
  UUU = UUC = 'Phenylalanine';
  UUA = UUG = 'Leucine';
  UCU = UCC = UCA = UCG = 'Serine';
  UAU = UAC = 'Tyrosine';
  UGU = UGC = 'Cysteine';
  UGG = 'Tryptophan';
  UAA = UAG = UGA = 'STOP';
  return { AUG, UUU, UUC, UUA, UUG, UCU, UCC, UCA, UCG, UAU, UAC, UGU, UGC, UGG, UAA, UAG, UGA };
})()

export const translate = (rna) => {
  if (!rna) return [];

  let proteins = [];
  for (let i = 0; i < rna.length; i += 3) {
    console.log("codons", codons)
    const protein = codons[rna.slice(i, i + 3)];
    console.log("proteins", proteins)
    if (protein === undefined)
      throw new Error('Invalid codon');
    if (protein === 'STOP')
      break;
    proteins.push(protein);
  }
  return proteins;
};
