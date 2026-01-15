/********** ПРОБНИЙ ВАРІАНТ **********/
const TRIAL_VARIANT = {
  id: "T",
  name: "Пробний варіант",
  tasks: [
    { cation: "Na⁺",  anion: "Cl⁻",    correctFormula: "NaCl",          correctName: "Натрій хлорид" },
    { cation: "Na⁺",  anion: "OH⁻",    correctFormula: "NaOH",          correctName: "Натрій гідроксид" },
    { cation: "Ba²⁺", anion: "SO₃²⁻",  correctFormula: "BaSO₃",         correctName: "Барій сульфіт" },
    { cation: "Mg²⁺", anion: "SiO₃²⁻", correctFormula: "MgSiO₃",        correctName: "Магній силікат" },
    { cation: "Al³⁺", anion: "SiO₃²⁻", correctFormula: "Al₂(SiO₃)₃",    correctName: "Алюміній силікат" },
    { cation: "Ca²⁺", anion: "PO₄³⁻",  correctFormula: "Ca₃(PO₄)₂",     correctName: "Кальцій фосфат" },
    { cation: "Fe³⁺", anion: "CO₃²⁻",  correctFormula: "Fe₂(CO₃)₃",     correctName: "Ферум (ІІІ) карбонат" },
    { cation: "Mg²⁺", anion: "Br⁻",    correctFormula: "MgBr₂",         correctName: "Магній бромід" },
    { cation: "NH₄⁺", anion: "SO₄²⁻",  correctFormula: "(NH₄)₂SO₄",     correctName: "Амоній сульфат" },
    { cation: "Cu²⁺", anion: "PO₄³⁻",  correctFormula: "Cu₃(PO₄)₂",     correctName: "Купрум (ІІ) фосфат" }
  ]
};

const VARIANTS = [
  {
    id: 1, name: "Варіант 1",
    tasks: [
      { cation:"Na⁺",  anion:"Cl⁻",   correctFormula:"NaCl",      correctName:"Натрій хлорид" },
      { cation:"Ca²⁺", anion:"Cl⁻",   correctFormula:"CaCl₂",     correctName:"Кальцій хлорид" },
      { cation:"Mg²⁺", anion:"Br⁻",   correctFormula:"MgBr₂",     correctName:"Магній бромід" },
      { cation:"Al³⁺", anion:"O²⁻",   correctFormula:"Al₂O₃",     correctName:"Алюміній оксид" },
      { cation:"K⁺",   anion:"NO₃⁻",  correctFormula:"KNO₃",      correctName:"Калій нітрат" },
      { cation:"Fe³⁺", anion:"Cl⁻",   correctFormula:"FeCl₃",     correctName:"Ферум (ІІІ) хлорид" },
      { cation:"NH₄⁺", anion:"SO₄²⁻", correctFormula:"(NH₄)₂SO₄",correctName:"Амоній сульфат" },
      { cation:"Ba²⁺", anion:"NO₃⁻",  correctFormula:"Ba(NO₃)₂",  correctName:"Барій нітрат" },
      { cation:"Cu²⁺", anion:"S²⁻",   correctFormula:"CuS",       correctName:"Купрум (ІІ) сульфід" },
      { cation:"Zn²⁺", anion:"Cl⁻",   correctFormula:"ZnCl₂",     correctName:"Цинк хлорид" }
    ]
  },
  {
    id: 2, name: "Варіант 2",
    tasks: [
      { cation:"Li⁺",  anion:"F⁻",    correctFormula:"LiF",        correctName:"Літій фторид" },
      { cation:"Ca²⁺", anion:"O²⁻",   correctFormula:"CaO",        correctName:"Кальцій оксид" },
      { cation:"Al³⁺", anion:"Cl⁻",   correctFormula:"AlCl₃",      correctName:"Алюміній хлорид" },
      { cation:"K⁺",   anion:"SO₄²⁻", correctFormula:"K₂SO₄",      correctName:"Калій сульфат" },
      { cation:"Na⁺",  anion:"CO₃²⁻", correctFormula:"Na₂CO₃",     correctName:"Натрій карбонат" },
      { cation:"Mg²⁺", anion:"OH⁻",   correctFormula:"Mg(OH)₂",    correctName:"Магній гідроксид" },
      { cation:"NH₄⁺", anion:"Cl⁻",   correctFormula:"NH₄Cl",      correctName:"Амоній хлорид" },
      { cation:"Fe²⁺", anion:"O²⁻",   correctFormula:"FeO",        correctName:"Ферум (ІІ) оксид" },
      { cation:"Cu²⁺", anion:"NO₃⁻",  correctFormula:"Cu(NO₃)₂",   correctName:"Купрум (ІІ) нітрат" },
      { cation:"Ba²⁺", anion:"SO₄²⁻", correctFormula:"BaSO₄",      correctName:"Барій сульфат" }
    ]
  },
  {
    id: 3, name: "Варіант 3",
    tasks: [
      { cation:"Na⁺",  anion:"PO₄³⁻", correctFormula:"Na₃PO₄",      correctName:"Натрій фосфат" },
      { cation:"Fe³⁺", anion:"OH⁻",   correctFormula:"Fe(OH)₃",     correctName:"Ферум (ІІІ) гідроксид" },
      { cation:"Ca²⁺", anion:"CO₃²⁻", correctFormula:"CaCO₃",       correctName:"Кальцій карбонат" },
      { cation:"Pb²⁺", anion:"I⁻",    correctFormula:"PbI₂",        correctName:"Плюмбум (ІІ) йодид" },
      { cation:"Zn²⁺", anion:"S²⁻",   correctFormula:"ZnS",         correctName:"Цинк сульфід" },
      { cation:"Ag⁺",  anion:"NO₃⁻",  correctFormula:"AgNO₃",       correctName:"Срібло нітрат" },
      { cation:"K⁺",   anion:"MnO₄⁻", correctFormula:"KMnO₄",       correctName:"Калій перманганат" },
      { cation:"Al³⁺", anion:"SO₄²⁻", correctFormula:"Al₂(SO₄)₃",   correctName:"Алюміній сульфат" },
      { cation:"Cu⁺",  anion:"Cl⁻",   correctFormula:"CuCl",        correctName:"Купрум (І) хлорид" },
      { cation:"Sr²⁺", anion:"Br⁻",   correctFormula:"SrBr₂",       correctName:"Стронцій бромід" }
    ]
  },
  {
    id: 4, name: "Варіант 4",
    tasks: [
      { cation: "Al³⁺",  anion: "OH⁻",      correctFormula: "Al(OH)₃",       correctName: "Алюміній гідроксид" },
      { cation: "Ba²⁺",  anion: "NO₃⁻",    correctFormula: "Ba(NO₃)₂",      correctName: "Барій нітрат" },
      { cation: "Ca²⁺",  anion: "SO₃²⁻",   correctFormula: "CaSO₃",         correctName: "Кальцій сульфіт" },
      { cation: "NH₄⁺",  anion: "SO₄²⁻",   correctFormula: "(NH₄)₂SO₄",     correctName: "Амоній сульфат" },
      { cation: "Mg²⁺",  anion: "PO₄³⁻",   correctFormula: "Mg₃(PO₄)₂",     correctName: "Магній фосфат" },
      { cation: "Na⁺",   anion: "SO₄²⁻",   correctFormula: "Na₂SO₄",        correctName: "Натрій сульфат" },
      { cation: "Na⁺",   anion: "SiO₃²⁻",  correctFormula: "Na₂SiO₃",       correctName: "Натрій силікат" },
      { cation: "Ca²⁺",  anion: "PO₄³⁻",   correctFormula: "Ca₃(PO₄)₂",     correctName: "Кальцій фосфат" },
      { cation: "K⁺",    anion: "NO₃⁻",    correctFormula: "KNO₃",          correctName: "Калій нітрат" },
      { cation: "Ba²⁺",  anion: "Br⁻",     correctFormula: "BaBr₂",         correctName: "Барій бромід" }
    ]
  },
  {
    id: 5, name: "Варіант 5",
    tasks: [
      { cation: "Mg²⁺",  anion: "NO₃⁻",    correctFormula: "Mg(NO₃)₂",      correctName: "Магній нітрат" },
      { cation: "NH₄⁺",  anion: "CO₃²⁻",   correctFormula: "(NH₄)₂CO₃",     correctName: "Амоній карбонат" },
      { cation: "Ca²⁺",  anion: "OH⁻",     correctFormula: "Ca(OH)₂",       correctName: "Кальцій гідроксид" },
      { cation: "Al³⁺",  anion: "NO₃⁻",    correctFormula: "Al(NO₃)₃",      correctName: "Алюміній нітрат" },
      { cation: "K⁺",    anion: "SiO₃²⁻",  correctFormula: "K₂SiO₃",        correctName: "Калій силікат" },
      { cation: "Al³⁺",  anion: "SiO₃²⁻",  correctFormula: "Al₂(SiO₃)₃",    correctName: "Алюміній силікат" },
      { cation: "K⁺",    anion: "PO₄³⁻",   correctFormula: "K₃PO₄",        correctName: "Калій фосфат" },
      { cation: "Ba²⁺",  anion: "SO₃²⁻",   correctFormula: "BaSO₃",         correctName: "Барій сульфіт" },
      { cation: "Ca²⁺",  anion: "NO₃⁻",    correctFormula: "Ca(NO₃)₂",      correctName: "Кальцій нітрат" },
      { cation: "Na⁺",   anion: "OH⁻",     correctFormula: "NaOH",          correctName: "Натрій гідроксид" }
    ]
  },
  {
    id: 6, name: "Варіант 6",
    tasks: [
      { cation: "Mg²⁺",  anion: "Br⁻",     correctFormula: "MgBr₂",         correctName: "Магній бромід" },
      { cation: "Na⁺",   anion: "NO₃⁻",    correctFormula: "NaNO₃",         correctName: "Натрій нітрат" },
      { cation: "Na⁺",   anion: "CO₃²⁻",   correctFormula: "Na₂CO₃",        correctName: "Натрій карбонат" },
      { cation: "Ba²⁺",  anion: "SO₄²⁻",   correctFormula: "BaSO₄",         correctName: "Барій сульфат" },
      { cation: "Mg²⁺",  anion: "SiO₃²⁻",  correctFormula: "MgSiO₃",        correctName: "Магній силікат" },
      { cation: "K⁺",    anion: "SO₃²⁻",   correctFormula: "K₂SO₃",         correctName: "Калій сульфіт" },
      { cation: "Mg²⁺",  anion: "OH⁻",     correctFormula: "Mg(OH)₂",       correctName: "Магній гідроксид" },
      { cation: "Ca²⁺",  anion: "HCO₃⁻",   correctFormula: "Ca(HCO₃)₂",     correctName: "Кальцій гідрогенкарбонат" },
      { cation: "Na⁺",   anion: "HCO₃⁻",   correctFormula: "NaHCO₃",        correctName: "Натрій гідрогенкарбонат" },
      { cation: "Ba²⁺",  anion: "PO₄³⁻",   correctFormula: "Ba₃(PO₄)₂",     correctName: "Барій фосфат" }
    ]
  },
  {
    id: 7, name: "Варіант 7",
    tasks: [
      { cation: "K⁺",    anion: "Cl⁻",     correctFormula: "KCl",           correctName: "Калій хлорид" },
      { cation: "K⁺",    anion: "CO₃²⁻",   correctFormula: "K₂CO₃",         correctName: "Калій карбонат" },
      { cation: "K⁺",    anion: "PO₄³⁻",   correctFormula: "K₃PO₄",         correctName: "Калій фосфат" },
      { cation: "Ca²⁺",  anion: "Cl⁻",     correctFormula: "CaCl₂",         correctName: "Кальцій хлорид" },
      { cation: "Ca²⁺",  anion: "CO₃²⁻",   correctFormula: "CaCO₃",         correctName: "Кальцій карбонат" },
      { cation: "Ca²⁺",  anion: "PO₄³⁻",   correctFormula: "Ca₃(PO₄)₂",     correctName: "Кальцій фосфат" },
      { cation: "Fe³⁺",  anion: "Cl⁻",     correctFormula: "FeCl₃",         correctName: "Ферум (ІІІ) хлорид" },
      { cation: "Fe³⁺",  anion: "CO₃²⁻",   correctFormula: "Fe₂(CO₃)₃",     correctName: "Ферум (ІІІ) карбонат" },
      { cation: "Fe³⁺",  anion: "PO₄³⁻",   correctFormula: "FePO₄",         correctName: "Ферум (ІІІ) фосфат" },
      { cation: "Ba²⁺",  anion: "OH⁻",     correctFormula: "Ba(OH)₂",       correctName: "Барій гідроксид" }
    ]
  },
  {
    id: 8, name: "Варіант 8",
    tasks: [
      { cation: "Na⁺",   anion: "OH⁻",     correctFormula: "NaOH",          correctName: "Натрій гідроксид" },
      { cation: "Na⁺",   anion: "SO₄²⁻",   correctFormula: "Na₂SO₄",        correctName: "Натрій сульфат" },
      { cation: "Na⁺",   anion: "PO₄³⁻",   correctFormula: "Na₃PO₄",        correctName: "Натрій фосфат" },
      { cation: "Ba²⁺",  anion: "OH⁻",     correctFormula: "Ba(OH)₂",       correctName: "Барій гідроксид" },
      { cation: "Ba²⁺",  anion: "SO₄²⁻",   correctFormula: "BaSO₄",         correctName: "Барій сульфат" },
      { cation: "Ba²⁺",  anion: "PO₄³⁻",   correctFormula: "Ba₃(PO₄)₂",     correctName: "Барій фосфат" },
      { cation: "Al³⁺",  anion: "OH⁻",     correctFormula: "Al(OH)₃",       correctName: "Алюміній гідроксид" },
      { cation: "Al³⁺",  anion: "SO₄²⁻",   correctFormula: "Al₂(SO₄)₃",     correctName: "Алюміній сульфат" },
      { cation: "NH₄⁺",  anion: "SO₄²⁻",   correctFormula: "(NH₄)₂SO₄",     correctName: "Амоній сульфат" },
      { cation: "Al³⁺",  anion: "NO₃⁻",    correctFormula: "Al(NO₃)₃",      correctName: "Алюміній нітрат" }
    ]
  },
  {
    id: 9, name: "Варіант 9",
    tasks: [
      { cation: "Mg²⁺",  anion: "CO₃²⁻",   correctFormula: "Mg(HCO₃)₂",     correctName: "Магній гідрогенкарбонат" },
      { cation: "Na⁺",   anion: "NO₃⁻",    correctFormula: "NaNO₃",         correctName: "Натрій нітрат" },
      { cation: "Al³⁺",  anion: "NO₃⁻",    correctFormula: "Al(NO₃)₃",      correctName: "Алюміній нітрат" },
      { cation: "K⁺",    anion: "CO₃²⁻",   correctFormula: "K₂CO₃",         correctName: "Калій карбонат" },
      { cation: "Fe²⁺",  anion: "Cl⁻",     correctFormula: "FeCl₂",         correctName: "Ферум (ІІ) хлорид" },
      { cation: "Mg²⁺",  anion: "SiO₃²⁻",  correctFormula: "MgSiO₃",        correctName: "Магній силікат" },
      { cation: "Fe²⁺",  anion: "CO₃²⁻",   correctFormula: "FeCO₃",         correctName: "Ферум (ІІ) карбонат" },
      { cation: "Ba²⁺",  anion: "PO₄³⁻",   correctFormula: "Ba₃(PO₄)₂",     correctName: "Барій фосфат" },
      { cation: "Na⁺",   anion: "SO₄²⁻",   correctFormula: "Na₂SO₄",        correctName: "Натрій сульфат" },
      { cation: "K⁺",    anion: "HCO₃⁻",   correctFormula: "KHCO₃",         correctName: "Калій гідрогенкарбонат" }
    ]
  },
  {
    id: 10, name: "Варіант 10",
    tasks: [
      { cation: "Al³⁺",  anion: "OH⁻",     correctFormula: "Al(OH)₃",       correctName: "Алюміній гідроксид" },
      { cation: "Mg²⁺",  anion: "NO₃⁻",    correctFormula: "Mg(NO₃)₂",      correctName: "Магній нітрат" },
      { cation: "Mg²⁺",  anion: "Br⁻",     correctFormula: "MgBr₂",         correctName: "Магній бромід" },
      { cation: "K⁺",    anion: "Cl⁻",     correctFormula: "KCl",           correctName: "Калій хлорид" },
      { cation: "Ba²⁺",  anion: "SO₄²⁻",   correctFormula: "BaSO₄",         correctName: "Барій сульфат" },
      { cation: "Mg²⁺",  anion: "HCO₃⁻",   correctFormula: "Mg(HCO₃)₂",     correctName: "Магній гідрогенкарбонат" },
      { cation: "Ba²⁺",  anion: "NO₃⁻",    correctFormula: "Ba(NO₃)₂",      correctName: "Барій нітрат" },
      { cation: "NH₄⁺",  anion: "SO₄²⁻",   correctFormula: "(NH₄)₂SO₄",     correctName: "Амоній сульфат" },
      { cation: "NH₄⁺",  anion: "NO₃⁻",    correctFormula: "NH₄NO₃",        correctName: "Амоній нітрат" },
      { cation: "Ca²⁺",  anion: "SO₃²⁻",   correctFormula: "CaSO₃",         correctName: "Кальцій сульфіт" }
    ]
  },
  {
    id: 11, name: "Варіант 11",
    tasks: [
      { cation: "K⁺",    anion: "CO₃²⁻",   correctFormula: "K₂CO₃",         correctName: "Калій карбонат" },
      { cation: "Na⁺",   anion: "OH⁻",     correctFormula: "NaOH",          correctName: "Натрій гідроксид" },
      { cation: "Na⁺",   anion: "NO₃⁻",    correctFormula: "NaNO₃",         correctName: "Натрій нітрат" },
      { cation: "Ca²⁺",  anion: "SO₄²⁻",   correctFormula: "CaSO₄",         correctName: "Кальцій сульфат" },
      { cation: "Ca²⁺",  anion: "OH⁻",     correctFormula: "Ca(OH)₂",       correctName: "Кальцій гідроксид" },
      { cation: "Na⁺",   anion: "CO₃²⁻",   correctFormula: "Na₂CO₃",        correctName: "Натрій карбонат" },
      { cation: "K⁺",    anion: "PO₄³⁻",   correctFormula: "K₃PO₄",         correctName: "Калій фосфат" },
      { cation: "Ba²⁺",  anion: "OH⁻",     correctFormula: "Ba(OH)₂",       correctName: "Барій гідроксид" },
      { cation: "Al³⁺",  anion: "NO₃⁻",    correctFormula: "Al(NO₃)₃",      correctName: "Алюміній нітрат" },
      { cation: "NH₄⁺",  anion: "SO₄²⁻",   correctFormula: "(NH₄)₂SO₄",     correctName: "Амоній сульфат" }
    ]
  },
  {
    id: 12, name: "Варіант 12",
    tasks: [
      { cation: "K⁺",    anion: "SiO₃²⁻",  correctFormula: "K₂SiO₃",        correctName: "Калій силікат" },
      { cation: "Al³⁺",  anion: "NO₃⁻",    correctFormula: "Al(NO₃)₃",      correctName: "Алюміній нітрат" },
      { cation: "Ba²⁺",  anion: "SO₄²⁻",   correctFormula: "BaSO₄",         correctName: "Барій сульфат" },
      { cation: "Ca²⁺",  anion: "Cl⁻",     correctFormula: "CaCl₂",         correctName: "Кальцій хлорид" },
      { cation: "Ca²⁺",  anion: "CO₃²⁻",   correctFormula: "CaCO₃",         correctName: "Кальцій карбонат" },
      { cation: "Na⁺",   anion: "SO₄²⁻",   correctFormula: "Na₂SO₄",        correctName: "Натрій сульфат" },
      { cation: "Al³⁺",  anion: "SiO₃²⁻",  correctFormula: "Al₂(SiO₃)₃",    correctName: "Алюміній силікат" },
      { cation: "K⁺",    anion: "SO₃²⁻",   correctFormula: "K₂SO₃",         correctName: "Калій сульфіт" },
      { cation: "Fe³⁺",  anion: "Cl⁻",     correctFormula: "FeCl₃",         correctName: "Ферум (ІІІ) хлорид" },
      { cation: "Al³⁺",  anion: "OH⁻",     correctFormula: "Al(OH)₃",       correctName: "Алюміній гідроксид" }
    ]
  },
  {
    id: 13, name: "Варіант 13",
    tasks: [
      { cation: "Ba²⁺",  anion: "SO₄²⁻",   correctFormula: "BaSO₄",         correctName: "Барій сульфат" },
      { cation: "Ca²⁺",  anion: "CO₃²⁻",   correctFormula: "CaCO₃",         correctName: "Кальцій карбонат" },
      { cation: "Fe²⁺",  anion: "CO₃²⁻",   correctFormula: "FeCO₃",         correctName: "Ферум (ІІ) карбонат" },
      { cation: "Na⁺",   anion: "SiO₃²⁻",  correctFormula: "Na₂SiO₃",       correctName: "Натрій силікат" },
      { cation: "Ba²⁺",  anion: "PO₄³⁻",   correctFormula: "Ba₃(PO₄)₂",     correctName: "Барій фосфат" },
      { cation: "Mg²⁺",  anion: "OH⁻",     correctFormula: "Mg(OH)₂",       correctName: "Магній гідроксид" },
      { cation: "Fe³⁺",  anion: "Cl⁻",     correctFormula: "FeCl₃",         correctName: "Ферум (ІІІ) хлорид" },
      { cation: "Al³⁺",  anion: "OH⁻",     correctFormula: "Al(OH)₃",       correctName: "Алюміній гідроксид" },
      { cation: "Al³⁺",  anion: "SiO₃²⁻",  correctFormula: "Al₂(SiO₃)₃",    correctName: "Алюміній силікат" },
      { cation: "Fe²⁺",  anion: "CO₃²⁻",   correctFormula: "FeCO₃",         correctName: "Ферум (ІІ) карбонат" }
    ]
  },
  {
    id: 14, name: "Варіант 14",
    tasks: [
      { cation: "Ca²⁺",  anion: "PO₄³⁻",   correctFormula: "Ca₃(PO₄)₂",     correctName: "Кальцій фосфат" },
      { cation: "Ba²⁺",  anion: "SO₃²⁻",   correctFormula: "BaSO₃",         correctName: "Барій сульфіт" },
      { cation: "Ca²⁺",  anion: "HCO₃⁻",   correctFormula: "Ca(HCO₃)₂",     correctName: "Кальцій гідрогенкарбонат" },
      { cation: "Fe³⁺",  anion: "CO₃²⁻",   correctFormula: "Fe₂(CO₃)₃",     correctName: "Ферум (ІІІ) карбонат" },
      { cation: "Al³⁺",  anion: "SO₄²⁻",   correctFormula: "Al₂(SO₄)₃",     correctName: "Алюміній сульфат" },
      { cation: "Mg²⁺",  anion: "SiO₃²⁻",  correctFormula: "MgSiO₃",        correctName: "Магній силікат" },
      { cation: "K⁺",    anion: "NO₃⁻",    correctFormula: "KNO₃",          correctName: "Калій нітрат" },
      { cation: "Ca²⁺",  anion: "NO₃⁻",    correctFormula: "Ca(NO₃)₂",      correctName: "Кальцій нітрат" },
      { cation: "Mg²⁺",  anion: "PO₄³⁻",   correctFormula: "Mg₃(PO₄)₂",     correctName: "Магній фосфат" },
      { cation: "Fe³⁺",  anion: "PO₄³⁻",   correctFormula: "FePO₄",         correctName: "Ферум (ІІІ) фосфат" }
    ]
  },
  {
    id: 15, name: "Варіант 15",
    tasks: [
      { cation: "Ba²⁺",  anion: "PO₄³⁻",   correctFormula: "Ba₃(PO₄)₂",     correctName: "Барій фосфат" },
      { cation: "NH₄⁺",  anion: "SO₄²⁻",   correctFormula: "(NH₄)₂SO₄",     correctName: "Амоній сульфат" },
      { cation: "Na⁺",   anion: "SO₄²⁻",   correctFormula: "Na₂SO₄",        correctName: "Натрій сульфат" },
      { cation: "Ba²⁺",  anion: "SO₄²⁻",   correctFormula: "BaSO₄",         correctName: "Барій сульфат" },
      { cation: "Ba²⁺",  anion: "Br⁻",     correctFormula: "BaBr₂",         correctName: "Барій бромід" },
      { cation: "Na⁺",   anion: "OH⁻",     correctFormula: "NaOH",          correctName: "Натрій гідроксид" },
      { cation: "Ca²⁺",  anion: "NO₃⁻",    correctFormula: "Ca(NO₃)₂",      correctName: "Кальцій нітрат" },
      { cation: "Fe³⁺",  anion: "CO₃²⁻",   correctFormula: "Fe₂(CO₃)₃",     correctName: "Ферум (ІІІ) карбонат" },
      { cation: "Ca²⁺",  anion: "CO₃²⁻",   correctFormula: "CaCO₃",         correctName: "Кальцій карбонат" },
      { cation: "Al³⁺",  anion: "SO₄²⁻",   correctFormula: "Al₂(SO₄)₃",     correctName: "Алюміній сульфат" }
    ]
  },
  {
    id: 16, name: "Варіант 16",
    tasks: [
      { cation: "NH₄⁺",  anion: "CO₃²⁻",   correctFormula: "(NH₄)₂CO₃",    correctName: "Амоній карбонат" },
      { cation: "Fe²⁺",  anion: "Cl⁻",     correctFormula: "FeCl₂",        correctName: "Ферум (ІІ) хлорид" },
      { cation: "Ag⁺",   anion: "NO₃⁻",    correctFormula: "AgNO₃",        correctName: "Аргентум нітрат" },
      { cation: "Pb²⁺",  anion: "SO₄²⁻",   correctFormula: "PbSO₄",        correctName: "Плюмбум (ІІ) сульфат" },
      { cation: "H⁺",    anion: "CO₃²⁻",   correctFormula: "H₂CO₃",        correctName: "Гідроген карбонат" },
      { cation: "Zn²⁺",  anion: "Br⁻",     correctFormula: "ZnBr₂",        correctName: "Цинк бромід" },
      { cation: "Mg²⁺",  anion: "PO₄³⁻",   correctFormula: "Mg₃(PO₄)₂",    correctName: "Магній фосфат" },
      { cation: "Fe³⁺",  anion: "OH⁻",     correctFormula: "Fe(OH)₃",      correctName: "Ферум (ІІІ) гідроксид" },
      { cation: "Na⁺",   anion: "Cl⁻",     correctFormula: "NaCl",         correctName: "Натрій хлорид" },
      { cation: "Al³⁺",  anion: "SO₄²⁻",   correctFormula: "Al₂(SO₄)₃",    correctName: "Алюміній сульфат" }
    ]
  },
  {
    id: 17, name: "Варіант 17",
    tasks: [
      { cation: "Ag⁺",   anion: "PO₄³⁻",   correctFormula: "Ag₃PO₄",       correctName: "Аргентум фосфат" },
      { cation: "NH₄⁺",  anion: "Cl⁻",     correctFormula: "NH₄Cl",        correctName: "Амоній хлорид" },
      { cation: "Zn²⁺",  anion: "I⁻",      correctFormula: "ZnI₂",         correctName: "Цинк йодид" },
      { cation: "K⁺",    anion: "NO₃⁻",    correctFormula: "KNO₃",         correctName: "Калій нітрат" },
      { cation: "Pb²⁺",  anion: "Cl⁻",     correctFormula: "PbCl₂",        correctName: "Плюмбум (ІІ) хлорид" },
      { cation: "Ca²⁺",  anion: "CO₃²⁻",   correctFormula: "CaCO₃",        correctName: "Кальцій карбонат" },
      { cation: "Mg²⁺",  anion: "HCO₃⁻",   correctFormula: "Mg(HCO₃)₂",    correctName: "Магній гідрогенкарбонат" },
      { cation: "Mg²⁺",  anion: "SO₄²⁻",   correctFormula: "MgSO₄",        correctName: "Магній сульфат" },
      { cation: "Fe²⁺",  anion: "OH⁻",     correctFormula: "Fe(OH)₂",      correctName: "Ферум (ІІ) гідроксид" },
      { cation: "Ca²⁺",  anion: "HCO₃⁻",   correctFormula: "Ca(HCO₃)₂",    correctName: "Кальцій гідрогенкарбонат" }
    ]
  },
  {
    id: 18, name: "Варіант 18",
    tasks: [
      { cation: "Mg²⁺",  anion: "Cl⁻",     correctFormula: "MgCl₂",        correctName: "Магній хлорид" },
      { cation: "Mg²⁺",  anion: "PO₄³⁻",   correctFormula: "Mg₃(PO₄)₂",    correctName: "Магній фосфат" },
      { cation: "Ag⁺",   anion: "Cl⁻",     correctFormula: "AgCl",         correctName: "Аргентум хлорид" },
      { cation: "Ag⁺",   anion: "SO₄²⁻",   correctFormula: "Ag₂SO₄",       correctName: "Аргентум сульфат" },
      { cation: "H⁺",    anion: "NO₃⁻",    correctFormula: "HNO₃",         correctName: "Гідроген нітрат" },
      { cation: "H⁺",    anion: "SO₃²⁻",   correctFormula: "H₂SO₃",        correctName: "Гідроген сульфіт" },
      { cation: "Zn²⁺",  anion: "CO₃²⁻",   correctFormula: "ZnCO₃",        correctName: "Цинк карбонат" },
      { cation: "Zn²⁺",  anion: "NO₃⁻",    correctFormula: "Zn(NO₃)₂",     correctName: "Цинк нітрат" },
      { cation: "Pb²⁺",  anion: "NO₃⁻",    correctFormula: "Pb(NO₃)₂",     correctName: "Плюмбум (ІІ) нітрат" },
      { cation: "Pb²⁺",  anion: "PO₄³⁻",   correctFormula: "Pb₃(PO₄)₂",    correctName: "Плюмбум (ІІ) фосфат" }
    ]
  },
  {
    id: 19, name: "Варіант 19",
    tasks: [
      { cation: "Fe²⁺",  anion: "Cl⁻",     correctFormula: "FeCl₂",        correctName: "Ферум (ІІ) хлорид" },
      { cation: "NH₄⁺",  anion: "Cl⁻",     correctFormula: "NH₄Cl",        correctName: "Амоній хлорид" },
      { cation: "H⁺",    anion: "SO₄²⁻",   correctFormula: "H₂SO₄",        correctName: "Гідроген сульфат" },
      { cation: "NH₄⁺",  anion: "CO₃²⁻",   correctFormula: "(NH₄)₂CO₃",    correctName: "Амоній карбонат" },
      { cation: "Zn²⁺",  anion: "NO₃⁻",    correctFormula: "Zn(NO₃)₂",     correctName: "Цинк нітрат" },
      { cation: "Ag⁺",   anion: "PO₄³⁻",   correctFormula: "Ag₃PO₄",       correctName: "Аргентум фосфат" },
      { cation: "Ag⁺",   anion: "S²⁻",     correctFormula: "Ag₂S",         correctName: "Аргентум сульфід" },
      { cation: "Mg²⁺",  anion: "Cl⁻",     correctFormula: "MgCl₂",        correctName: "Магній хлорид" },
      { cation: "Mg²⁺",  anion: "PO₄³⁻",   correctFormula: "Mg₃(PO₄)₂",    correctName: "Магній фосфат" },
      { cation: "Mg²⁺",  anion: "SiO₃²⁻",  correctFormula: "MgSiO₃",       correctName: "Магній силікат" }
    ]
  },
  {
    id: 20, name: "Варіант 20",
    tasks: [
      { cation: "Ag⁺",   anion: "NO₃⁻",    correctFormula: "AgNO₃",        correctName: "Аргентум нітрат" },
      { cation: "H⁺",    anion: "SO₃²⁻",   correctFormula: "H₂SO₃",        correctName: "Гідроген сульфіт" },
      { cation: "Zn²⁺",  anion: "I⁻",      correctFormula: "ZnI₂",         correctName: "Цинк йодид" },
      { cation: "Ag⁺",   anion: "Cl⁻",     correctFormula: "AgCl",         correctName: "Аргентум хлорид" },
      { cation: "Cu²⁺",  anion: "SO₄²⁻",   correctFormula: "CuSO₄",        correctName: "Купрум (ІІ) сульфат" },
      { cation: "Pb²⁺",  anion: "SO₄²⁻",   correctFormula: "PbSO₄",        correctName: "Плюмбум (ІІ) сульфат" },
      { cation: "K⁺",    anion: "NO₃⁻",    correctFormula: "KNO₃",         correctName: "Калій нітрат" },
      { cation: "Ag⁺",   anion: "SO₄²⁻",   correctFormula: "Ag₂SO₄",       correctName: "Аргентум сульфат" },
      { cation: "Zn²⁺",  anion: "SO₄²⁻",   correctFormula: "ZnSO₄",        correctName: "Цинк сульфат" },
      { cation: "Zn²⁺",  anion: "Cl⁻",     correctFormula: "ZnCl₂",        correctName: "Цинк хлорид" }
    ]
  },
  {
    id: 21, name: "Варіант 21",
    tasks: [
      { cation: "H⁺",    anion: "CO₃²⁻",   correctFormula: "H₂CO₃",        correctName: "Гідроген карбонат" },
      { cation: "Pb²⁺",  anion: "Cl⁻",     correctFormula: "PbCl₂",        correctName: "Плюмбум (ІІ) хлорид" },
      { cation: "H⁺",    anion: "NO₃⁻",    correctFormula: "HNO₃",         correctName: "Гідроген нітрат" },
      { cation: "Zn²⁺",  anion: "Br⁻",     correctFormula: "ZnBr₂",        correctName: "Цинк бромід" },
      { cation: "H⁺",    anion: "S²⁻",     correctFormula: "H₂S",          correctName: "Гідроген сульфід" },
      { cation: "Ca²⁺",  anion: "CO₃²⁻",   correctFormula: "CaCO₃",        correctName: "Кальцій карбонат" },
      { cation: "Zn²⁺",  anion: "Cl⁻",     correctFormula: "ZnCl₂",        correctName: "Цинк хлорид" },
      { cation: "H⁺",    anion: "SO₃²⁻",   correctFormula: "H₂SO₃",        correctName: "Гідроген сульфіт" },
      { cation: "Mg²⁺",  anion: "PO₄³⁻",   correctFormula: "Mg₃(PO₄)₂",    correctName: "Магній фосфат" },
      { cation: "Cu²⁺",  anion: "PO₄³⁻",   correctFormula: "Cu₃(PO₄)₂",    correctName: "Купрум (ІІ) фосфат" }
    ]
  },
  {
    id: 22, name: "Варіант 22",
    tasks: [
      { cation: "Mg²⁺",  anion: "HCO₃⁻",   correctFormula: "Mg(HCO₃)₂",    correctName: "Магній гідрогенкарбонат" },
      { cation: "Zn²⁺",  anion: "CO₃²⁻",   correctFormula: "ZnCO₃",        correctName: "Цинк карбонат" },
      { cation: "Fe³⁺",  anion: "OH⁻",     correctFormula: "Fe(OH)₃",      correctName: "Ферум (ІІІ) гідроксид" },
      { cation: "H⁺",    anion: "SiO₃²⁻",  correctFormula: "H₂SiO₃",       correctName: "Гідроген силікат" },
      { cation: "Ag⁺",   anion: "SO₄²⁻",   correctFormula: "Ag₂SO₄",       correctName: "Аргентум сульфат" },
      { cation: "Zn²⁺",  anion: "NO₃⁻",    correctFormula: "Zn(NO₃)₂",     correctName: "Цинк нітрат" },
      { cation: "Na⁺",   anion: "Cl⁻",     correctFormula: "NaCl",         correctName: "Натрій хлорид" },
      { cation: "Cu²⁺",  anion: "SO₄²⁻",   correctFormula: "CuSO₄",        correctName: "Купрум (ІІ) сульфат" },
      { cation: "Fe²⁺",  anion: "OH⁻",     correctFormula: "Fe(OH)₂",      correctName: "Ферум (ІІ) гідроксид" },
      { cation: "Pb²⁺",  anion: "NO₃⁻",    correctFormula: "Pb(NO₃)₂",     correctName: "Плюмбум (ІІ) нітрат" }
    ]
  },
  {
    id: 23, name: "Варіант 23",
    tasks: [
      { cation: "Al³⁺",  anion: "SO₄²⁻",   correctFormula: "Al₂(SO₄)₃",    correctName: "Алюміній сульфат" },
      { cation: "H⁺",    anion: "CO₃²⁻",   correctFormula: "H₂CO₃",        correctName: "Гідроген карбонат" },
      { cation: "Pb²⁺",  anion: "SO₄²⁻",   correctFormula: "PbSO₄",        correctName: "Плюмбум (ІІ) сульфат" },
      { cation: "Ba²⁺",  anion: "SO₄²⁻",   correctFormula: "BaSO₄",        correctName: "Барій сульфат" },
      { cation: "Cu²⁺",  anion: "NO₃⁻",    correctFormula: "Cu(NO₃)₂",     correctName: "Купрум (ІІ) нітрат" },
      { cation: "Ca²⁺",  anion: "PO₄³⁻",   correctFormula: "Ca₃(PO₄)₂",    correctName: "Кальцій фосфат" },
      { cation: "Ba²⁺",  anion: "PO₄³⁻",   correctFormula: "Ba₃(PO₄)₂",    correctName: "Барій фосфат" },
      { cation: "NH₄⁺",  anion: "SO₄²⁻",   correctFormula: "(NH₄)₂SO₄",    correctName: "Амоній сульфат" },
      { cation: "Ca²⁺",  anion: "HCO₃⁻",   correctFormula: "Ca(HCO₃)₂",    correctName: "Кальцій гідрогенкарбонат" },
      { cation: "Ca²⁺",  anion: "CO₃²⁻",   correctFormula: "CaCO₃",        correctName: "Кальцій карбонат" }
    ]
  },
  {
    id: 24, name: "Варіант 24",
    tasks: [
      { cation: "Fe²⁺",  anion: "CO₃²⁻",   correctFormula: "FeCO₃",        correctName: "Ферум (ІІ) карбонат" },
      { cation: "Fe³⁺",  anion: "CO₃²⁻",   correctFormula: "Fe₂(CO₃)₃",    correctName: "Ферум (ІІІ) карбонат" },
      { cation: "Na⁺",   anion: "SO₄²⁻",   correctFormula: "Na₂SO₄",       correctName: "Натрій сульфат" },
      { cation: "Na⁺",   anion: "SiO₃²⁻",  correctFormula: "Na₂SiO₃",      correctName: "Натрій силікат" },
      { cation: "Ba²⁺",  anion: "SO₄²⁻",   correctFormula: "BaSO₄",        correctName: "Барій сульфат" },
      { cation: "Ba²⁺",  anion: "Br⁻",     correctFormula: "BaBr₂",        correctName: "Барій бромід" },
      { cation: "Mg²⁺",  anion: "SiO₃²⁻",  correctFormula: "MgSiO₃",       correctName: "Магній силікат" },
      { cation: "Cu²⁺",  anion: "Cl⁻",     correctFormula: "CuCl₂",        correctName: "Купрум (ІІ) хлорид" },
      { cation: "Mg²⁺",  anion: "OH⁻",     correctFormula: "Mg(OH)₂",      correctName: "Магній гідроксид" },
      { cation: "Ca²⁺",  anion: "NO₃⁻",    correctFormula: "Ca(NO₃)₂",     correctName: "Кальцій нітрат" }
    ]
  },
  {
    id: 25, name: "Варіант 25",
    tasks: [
      { cation: "Fe³⁺",  anion: "CO₃²⁻",   correctFormula: "Fe₂(CO₃)₃",    correctName: "Ферум (ІІІ) карбонат" },
      { cation: "NH₄⁺",  anion: "OH⁻",     correctFormula: "NH₄OH",         correctName: "Амоній гідроксид" },
      { cation: "K⁺",    anion: "Br⁻",     correctFormula: "KBr",           correctName: "Калій бромід" },
      { cation: "Mg²⁺",  anion: "Cl⁻",     correctFormula: "MgCl₂",         correctName: "Магній хлорид" },
      { cation: "Ca²⁺",  anion: "I⁻",      correctFormula: "CaI₂",          correctName: "Кальцій йодид" },
      { cation: "Ba²⁺",  anion: "S²⁻",     correctFormula: "BaS",           correctName: "Барій сульфід" },
      { cation: "Zn²⁺",  anion: "OH⁻",     correctFormula: "Zn(OH)₂",       correctName: "Цинк гідроксид" },
      { cation: "Fe²⁺",  anion: "NO₃⁻",    correctFormula: "Fe(NO₃)₂",      correctName: "Ферум (ІІ) нітрат" },
      { cation: "Ag⁺",   anion: "SO₄²⁻",   correctFormula: "Ag₂SO₄",        correctName: "Аргентум сульфат" },
      { cation: "Al³⁺",  anion: "SiO₃²⁻",  correctFormula: "Al₂(SiO₃)₃",    correctName: "Алюміній силікат" }
    ]
  },

  {
    id: 26, name: "Варіант 26",
    tasks: [
      { cation: "Fe³⁺",  anion: "PO₄³⁻",   correctFormula: "FePO₄",         correctName: "Ферум (ІІІ) фосфат" },
      { cation: "Mg²⁺",  anion: "S²⁻",     correctFormula: "MgS",           correctName: "Магній сульфід" },
      { cation: "Zn²⁺",  anion: "SO₃²⁻",   correctFormula: "ZnSO₃",         correctName: "Цинк сульфіт" },
      { cation: "Ca²⁺",  anion: "NO₃⁻",    correctFormula: "Ca(NO₃)₂",      correctName: "Кальцій нітрат" },
      { cation: "K⁺",    anion: "NO₃⁻",    correctFormula: "KNO₃",          correctName: "Калій нітрат" },
      { cation: "K⁺",    anion: "SO₄²⁻",   correctFormula: "K₂SO₄",         correctName: "Калій сульфат" },
      { cation: "Ba²⁺",  anion: "PO₄³⁻",   correctFormula: "Ba₃(PO₄)₂",    correctName: "Барій фосфат" },
      { cation: "Fe³⁺",  anion: "NO₃⁻",    correctFormula: "Fe(NO₃)₃",      correctName: "Ферум (ІІІ) нітрат" },
      { cation: "Zn²⁺",  anion: "CO₃²⁻",   correctFormula: "ZnCO₃",         correctName: "Цинк карбонат" },
      { cation: "Cu²⁺",  anion: "OH⁻",     correctFormula: "Cu(OH)₂",       correctName: "Купрум (ІІ) гідроксид" }
    ]
  },

  {
    id: 27, name: "Варіант 27",
    tasks: [
      { cation: "NH₄⁺",  anion: "CO₃²⁻",   correctFormula: "(NH₄)₂CO₃",     correctName: "Амоній карбонат" },
      { cation: "Na⁺",   anion: "NO₃⁻",    correctFormula: "NaNO₃",         correctName: "Натрій нітрат" },
      { cation: "Ca²⁺",  anion: "PO₄³⁻",   correctFormula: "Ca₃(PO₄)₂",     correctName: "Кальцій фосфат" },
      { cation: "Al³⁺",  anion: "PO₄³⁻",   correctFormula: "AlPO₄",         correctName: "Алюміній фосфат" },
      { cation: "Al³⁺",  anion: "NO₃⁻",    correctFormula: "Al(NO₃)₃",      correctName: "Алюміній нітрат" },
      { cation: "Cu²⁺",  anion: "Cl⁻",     correctFormula: "CuCl₂",         correctName: "Купрум (ІІ) хлорид" },
      { cation: "Pb²⁺",  anion: "OH⁻",     correctFormula: "Pb(OH)₂",       correctName: "Плюмбум (ІІ) гідроксид" },
      { cation: "Zn²⁺",  anion: "CO₃²⁻",   correctFormula: "ZnCO₃",         correctName: "Цинк карбонат" },
      { cation: "Na⁺",   anion: "HCO₃⁻",   correctFormula: "NaHCO₃",        correctName: "Натрій гідрогенкарбонат" },
      { cation: "Ca²⁺",  anion: "SiO₃²⁻",  correctFormula: "CaSiO₃",        correctName: "Кальцій силікат" }
    ]
  },

  {
    id: 28, name: "Варіант 28",
    tasks: [
      { cation: "Pb²⁺",  anion: "NO₃⁻",    correctFormula: "Pb(NO₃)₂",      correctName: "Плюмбум (ІІ) нітрат" },
      { cation: "Ca²⁺",  anion: "CO₃²⁻",   correctFormula: "CaCO₃",         correctName: "Кальцій карбонат" },
      { cation: "Ca²⁺",  anion: "NO₃⁻",    correctFormula: "Ca(NO₃)₂",      correctName: "Кальцій нітрат" },
      { cation: "Mg²⁺",  anion: "HCO₃⁻",   correctFormula: "Mg(HCO₃)₂",     correctName: "Магній гідрогенкарбонат" },
      { cation: "Fe³⁺",  anion: "CO₃²⁻",   correctFormula: "Fe₂(CO₃)₃",     correctName: "Ферум (ІІІ) карбонат" },
      { cation: "NH₄⁺",  anion: "CO₃²⁻",   correctFormula: "(NH₄)₂CO₃",     correctName: "Амоній карбонат" },
      { cation: "Zn²⁺",  anion: "CO₃²⁻",   correctFormula: "ZnCO₃",         correctName: "Цинк карбонат" },
      { cation: "H⁺",    anion: "CO₃²⁻",   correctFormula: "H₂CO₃",         correctName: "Гідроген карбонат" },
      { cation: "Na⁺",   anion: "NO₃⁻",    correctFormula: "NaNO₃",         correctName: "Натрій нітрат" },
      { cation: "Ag⁺",   anion: "SO₄²⁻",   correctFormula: "Ag₂SO₄",        correctName: "Аргентум сульфат" }
    ]
  },

  {
    id: 29, name: "Варіант 29",
    tasks: [
      { cation: "Zn²⁺",  anion: "NO₃⁻",    correctFormula: "Zn(NO₃)₂",      correctName: "Цинк нітрат" },
      { cation: "Ca²⁺",  anion: "PO₄³⁻",   correctFormula: "Ca₃(PO₄)₂",     correctName: "Кальцій фосфат" },
      { cation: "Ba²⁺",  anion: "Br⁻",     correctFormula: "BaBr₂",         correctName: "Барій бромід" },
      { cation: "Mg²⁺",  anion: "SiO₃²⁻",  correctFormula: "MgSiO₃",        correctName: "Магній силікат" },
      { cation: "Ba²⁺",  anion: "PO₄³⁻",   correctFormula: "Ba₃(PO₄)₂",     correctName: "Барій фосфат" },
      { cation: "Fe³⁺",  anion: "CO₃²⁻",   correctFormula: "Fe₂(CO₃)₃",     correctName: "Ферум (ІІІ) карбонат" },
      { cation: "K⁺",    anion: "HCO₃⁻",   correctFormula: "KHCO₃",        correctName: "Калій гідрогенкарбонат" },
      { cation: "Na⁺",   anion: "Cl⁻",     correctFormula: "NaCl",          correctName: "Натрій хлорид" },
      { cation: "Cu²⁺",  anion: "Cl⁻",     correctFormula: "CuCl₂",         correctName: "Купрум (ІІ) хлорид" },
      { cation: "NH₄⁺",  anion: "SO₄²⁻",   correctFormula: "(NH₄)₂SO₄",     correctName: "Амоній сульфат" }
    ]
  },

  {
    id: 30, name: "Варіант 30",
    tasks: [
      { cation: "Cu²⁺",  anion: "SO₄²⁻",   correctFormula: "CuSO₄",         correctName: "Купрум (ІІ) сульфат" },
      { cation: "Na⁺",   anion: "HCO₃⁻",   correctFormula: "NaHCO₃",        correctName: "Натрій гідрогенкарбонат" },
      { cation: "Zn²⁺",  anion: "CO₃²⁻",   correctFormula: "ZnCO₃",         correctName: "Цинк карбонат" },
      { cation: "Ag⁺",   anion: "SO₄²⁻",   correctFormula: "Ag₂SO₄",        correctName: "Аргентум сульфат" },
      { cation: "Mg²⁺",  anion: "OH⁻",     correctFormula: "Mg(OH)₂",       correctName: "Магній гідроксид" },
      { cation: "Ca²⁺",  anion: "HCO₃⁻",   correctFormula: "Ca(HCO₃)₂",     correctName: "Кальцій гідрогенкарбонат" },
      { cation: "Fe²⁺",  anion: "OH⁻",     correctFormula: "Fe(OH)₂",       correctName: "Ферум (ІІ) гідроксид" },
      { cation: "Ca²⁺",  anion: "NO₃⁻",    correctFormula: "Ca(NO₃)₂",      correctName: "Кальцій нітрат" },
      { cation: "Ca²⁺",  anion: "CO₃²⁻",   correctFormula: "CaCO₃",         correctName: "Кальцій карбонат" },
      { cation: "Fe³⁺",  anion: "SiO₃²⁻",  correctFormula: "Fe₂(SiO₃)₃",    correctName: "Ферум (ІІІ) силікат" }
    ]
  }
];

/******** Налаштування/константи ********/
const TEACHER_CODE = "AlinaVPU25";                     
const LS_RESULTS_KEY = "chem_results_demo";
const LS_QUEUE_KEY   = "chem_variant_queue";

/******** Нижні індекси при введенні ********/
const subscriptMap = { "0":"₀","1":"₁","2":"₂","3":"₃","4":"₄","5":"₅","6":"₆","7":"₇","8":"₈","9":"₉" };
function convertToSubscripts(str){ return str.replace(/\d/g, d => subscriptMap[d] || d); }
function enableSubscriptConversion(inputEl){
  inputEl.addEventListener("input", () => {
    const p = inputEl.selectionStart;
    const v = inputEl.value;
    const conv = convertToSubscripts(v);
    if (v !== conv) {
      inputEl.value = conv;
      inputEl.setSelectionRange(p, p);
    }
  });
}

/******** Черга варіантів без повторів (у межах цього ПК) ********/
function loadQueue(){
  const raw = localStorage.getItem(LS_QUEUE_KEY);
  if (raw) {
    try {
      const q = JSON.parse(raw);
      if (Array.isArray(q) && q.length) return q;
    } catch {}
  }
  const ids = VARIANTS.map(v=>v.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random()* (i+1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  localStorage.setItem(LS_QUEUE_KEY, JSON.stringify(ids));
  return ids;
}
function popVariantFromQueue(){
  const q = loadQueue();
  const id = q.pop();
  localStorage.setItem(LS_QUEUE_KEY, JSON.stringify(q));
  return VARIANTS.find(v=>v.id===id) || VARIANTS[0];
}
/******** Старт пробного й основного варіанту ********/
function startTrialVariant() {
  currentPhase = "trial";
  currentVariant = TRIAL_VARIANT;
  initGame(currentVariant);
  startTimer(25); // 15 хв на пробний
}

function startMainVariant() {
  currentPhase = "main";
  currentVariant = popVariantFromQueue();
  initGame(currentVariant);
  startTimer(20); // 15 хв на основний
}


/******** Глобальні стани ********/
let currentUser = null;
let currentVariant = null;
let scoreArr = []; // true/false для кожного завдання
let currentStartTs = null;
/******** Фаза тесту і таймер ********/
let currentPhase = null;          // "trial" або "main"
let timerInterval = null;
let remainingSeconds = 0;

function startTimer(minutes) {
  if (timerInterval) clearInterval(timerInterval);

  remainingSeconds = minutes * 60;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    remainingSeconds--;
    if (remainingSeconds <= 0) {
      remainingSeconds = 0;
      updateTimerDisplay();
      clearInterval(timerInterval);
      timerInterval = null;

      // ⏰ час вийшов — автоматично завершуємо поточний тест
      finishCurrentTest(true);
    } else {
      updateTimerDisplay();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerEl = document.getElementById("timer");
  if (!timerEl) return;

  const m = Math.floor(remainingSeconds / 60);
  const s = remainingSeconds % 60;
  timerEl.textContent = `Залишилось часу: ${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

  if (remainingSeconds <= 60) {
    timerEl.classList.add("warning");
  } else {
    timerEl.classList.remove("warning");
  }
}



/******** Посилання на вузли ********/
const secAuth   = document.getElementById("auth");
const secGame   = document.getElementById("game");
const secPanel  = document.getElementById("teacher-panel");
const startBtn  = document.getElementById("start");
const finishBtn = document.getElementById("finish");
const goMainBtn = document.getElementById("go-main-test");
const quizForm  = document.getElementById("quiz-form");
const resultEl  = document.getElementById("result");

/******** Перемикання ролей ********/
document.querySelectorAll('input[name="role"]').forEach(r=>{
  r.addEventListener("change", ()=>{
    const isTeacher = r.value === "teacher";
    document.getElementById("teacher-fields").style.display = isTeacher ? "block" : "none";
    document.getElementById("student-fields").style.display = isTeacher ? "none"  : "block";
  });
});

/******** Старт ********/
startBtn.addEventListener("click", ()=>{
  const role = document.querySelector('input[name="role"]:checked').value;

  if (role === "student") {
    const last  = document.getElementById("st-last").value.trim();
    const first = document.getElementById("st-first").value.trim();
    const group = document.getElementById("st-group").value.trim();
    if (!last || !first || !group){ alert("Заповніть: прізвище, ім’я, групу."); return; }
    currentUser = { role, last, first, group };

    // РАНІШЕ тут було: currentVariant = popVariantFromQueue(); initGame(currentVariant);
    // ТЕПЕР:
    startTrialVariant();
  }else {
    const tl = document.getElementById("t-last").value.trim();
    const tf = document.getElementById("t-first").value.trim();
    const tm = document.getElementById("t-middle").value.trim();
    const code = document.getElementById("t-code").value.trim();
    if (!tl || !tf || !tm || !code){ alert("Заповніть усі поля викладача + кодове слово."); return; }
    // перевірка кодового слова українською, нечутлива до регістру
    if (code.toLocaleLowerCase("uk-UA") !== TEACHER_CODE.toLocaleLowerCase("uk-UA")){
      alert("Кодове слово невірне."); return;
    }
    currentUser = { role, tl, tf, tm };
    openTeacherPanel();
  }
});

/******** Побудова гри ********/
function initGame(variant){
  secAuth.style.display = "none";
  secPanel.style.display = "none";
  secGame.style.display = "block";
  document.getElementById("variantTitle").textContent = `${variant.name}`;

  // очищаємо результат попереднього тесту
  resultEl.innerHTML = "";

  quizForm.innerHTML = "";

  // 1) Очистити контейнер завдань
  quizForm.innerHTML = "";

  // 2) Додати інструкцію ПЕРЕД списком завдань
  const instruction = document.createElement("p");
  instruction.className = "instruction";
  instruction.textContent = "Завдання: Для катіонів та аніонів що подано нижче, складіть відповідні формули речовин і назвіть їх.";
  quizForm.appendChild(instruction);

  // 3) Підготувати масив оцінювання
  scoreArr = new Array(variant.tasks.length).fill(false);

  // 4) Далі — як і було: рендер кожного завдання
  variant.tasks.forEach((t, i)=>{
    const wrap = document.createElement("div");
    wrap.className = "task";
    wrap.innerHTML = `
      <div class="header">
        <strong>${i+1}.</strong>
        Катіон: <span class="ion">${t.cation}</span>
        &nbsp;&nbsp; Аніон: <span class="ion">${t.anion}</span>
      </div>

      <div class="inputs">
        <input id="formula-${i}" class="formula" placeholder="Формула" />
        <input id="name-${i}" class="name" placeholder="Назва речовини" />
        <span id="emoji-${i}" class="emoji"></span>
      </div>

      <div class="task-actions">
        <button type="button" class="save-btn" data-i="${i}">Зберегти завдання</button>
      </div>
    `;
    quizForm.appendChild(wrap);

    enableSubscriptConversion(document.getElementById(`formula-${i}`));
  });

  quizForm.querySelectorAll(".save-btn").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      const i = parseInt(e.currentTarget.dataset.i, 10);
      saveTask(variant, i);
    });
  });

  variant.tasks.forEach((_, i)=>{
    document.getElementById(`formula-${i}`).addEventListener("keydown", e=>{
      if (e.key === "Enter") { e.preventDefault(); saveTask(variant, i); }
    });
    document.getElementById(`name-${i}`).addEventListener("keydown", e=>{
      if (e.key === "Enter") { e.preventDefault(); saveTask(variant, i); }
    });
  });
}


/******** Збереження окремого завдання ********/
function saveTask(variant, i){
  const f = document.getElementById(`formula-${i}`);
  const n = document.getElementById(`name-${i}`);
  const emoji = document.getElementById(`emoji-${i}`);
  const t = variant.tasks[i];

  const isCorrect = (f.value.trim() === t.correctFormula) &&
                    (n.value.trim().toLowerCase() === t.correctName.toLowerCase());

  if (isCorrect){
    emoji.innerHTML = `<img src="thumbs-up.gif" alt="Правильно" class="result-gif">`;
    f.classList.add("correct"); n.classList.add("correct");
    f.classList.remove("incorrect"); n.classList.remove("incorrect");
    scoreArr[i] = true;
    // можна заблокувати редагування після вірної відповіді (розкоментуй за бажанням):
    // f.disabled = true; n.disabled = true;
  } else {
    emoji.innerHTML = `<img src="tongue-face.gif" alt="Неправильно" class="result-gif">`;
    f.classList.add("incorrect"); n.classList.add("incorrect");
    f.classList.remove("correct"); n.classList.remove("correct");
    scoreArr[i] = false; // залишаємо можливість переробляти — студент змінює й знов натискає «Зберегти завдання»
  }
}

function finishCurrentTest(auto = false) {
  const total = scoreArr.filter(Boolean).length;
  resultEl.innerHTML = `<h3>Ваш результат: ${total} з ${scoreArr.length} балів</h3>`;

  // зупиняємо таймер
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  if (currentPhase === "main") {
    // основний тест: зберігаємо результат, як і раніше
    saveResult(total);
  }

  if (currentPhase === "trial") {
    // пробний: НЕ зберігаємо в базу, просто показуємо результат
    // і автоматично переходимо до основного тесту
    // невеличка пауза, щоб учень встиг побачити бал
    setTimeout(() => {
      startMainVariant();
    }, auto ? 1000 : 2000);
  }
}

/******** Завершити тест ********/
finishBtn.addEventListener("click", () => {
  finishCurrentTest(false);
});

goMainBtn.addEventListener("click", () => {
  goMainBtn.style.display = "none";
  startMainVariant();
});

/******** Збереження результату (локально) ********/
function saveResult(total){
  const now = new Date();
  const row = {
    ts: now.toLocaleString("uk-UA"),
    last: currentUser.last, first: currentUser.first, group: currentUser.group,
    variantId: currentVariant.id,
    score: total, max: scoreArr.length
  };
  const list = JSON.parse(localStorage.getItem(LS_RESULTS_KEY) || "[]");
  list.push(row);
  localStorage.setItem(LS_RESULTS_KEY, JSON.stringify(list));
}

function finishCurrentTest(auto = false) {
  const total = scoreArr.filter(Boolean).length;
  resultEl.innerHTML = `<h3>Ваш результат: ${total} з ${scoreArr.length} балів</h3>`;

  // зупиняємо таймер
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  // пробний варіант – НІКУДИ не зберігаємо, просто переходимо до основного
  if (currentPhase === "trial") {
    goMainBtn.style.display = "inline-block"; // показуємо кнопку переходу
    return;
  }

  // основний варіант – зберегти результат як і раніше
  if (currentPhase === "main") {
    // тут використовується твоя стара логіка збереження
    saveResult(total);

    // за бажанням можна вимкнути кнопку, щоб не тиснув ще раз:
    // finishBtn.disabled = true;
  }
}

/******** Панель викладача ********/
function openTeacherPanel(){
  secAuth.style.display = "none";
  secGame.style.display = "none";
  secPanel.style.display = "block";

  const tbody = document.querySelector("#res-table tbody");
  tbody.innerHTML = "";
  const list = JSON.parse(localStorage.getItem(LS_RESULTS_KEY) || "[]");
  list.forEach(r=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.ts}</td>
      <td>${r.last || ""}</td>
      <td>${r.first || ""}</td>
      <td>${r.group || ""}</td>
      <td>${r.variantId}</td>
      <td>${r.score}/${r.max}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("clear-results").onclick = ()=>{
    if (confirm("Стерти всі локальні результати?")) {
      localStorage.removeItem(LS_RESULTS_KEY);
      openTeacherPanel();
    }
  };
}
