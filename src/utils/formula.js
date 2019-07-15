// Totaal aan euro's in miljarden dat de overheid te besteden heeft
const totalBudget2018 = 295;

// Departementen en het geld (in miljarden) dat zij ontvangen
const allDepartments = {
  landbouwnatuur: 0.8,
  financien: 1.7,
  overig: 1.8,
  ecoklimaat: 4,
  biza: 4.9,
  rentelasten: 5.5,
  infrawaterstaat: 9.5,
  defensie: 10,
  justitie: 11.1,
  buza: 13.2,
  gemeenteprovincie: 32.5,
  ocw: 38.5,
  zorg: 79.7,
  socialezekerheid: 81.8,
};

// Het aantal blokjes dat voor dit departement gegenereerd moet worden,
// en hoeveel procent 1 departement ontvangt ten opzichte van het hele budget
const getTotalBlocksForDepartments = (nameDept, budgetDept) => {
  const sum = (budgetDept / totalBudget2018) * 1000;
  const roundedSum = Math.round(sum);
  const percentage = Math.round((budgetDept / totalBudget2018) * 100);
  return `--------------------------------
  ➡️  ${nameDept} krijgt ${roundedSum} blokjes, en ${percentage}% van de bar chart. Totaal: ${budgetDept} miljard`;
};

// node formula.js
for (const department in allDepartments) {
  console.log(
    getTotalBlocksForDepartments(department, allDepartments[department])
  );
}

// #FF8585, #A1E1E4, #FFACAC ,#14B4C0 ,#FFE0E0 ,#5ACBD3
