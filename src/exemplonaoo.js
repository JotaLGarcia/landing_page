//regex (expressões regulares)
//vai definir quantos caracteres senha ou email pode ter
//vai definir se eles podem ter espaço ou não
//vai definir se terão letras maísculas ou minúsculas,
//se terão numeros e caracteres especiais 
//vai definir se serao ocultos ou nao

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$

//^ -> Significa inicio da string
//[^\s@] -> 
// \s -> significa inicio da string
//caracteres não tem espaço
//e que eles não sejam @
//aqui fica a parte do email antes do @

//@ -> o carctere obrigatório

// -> o ponto (obrigatório tambem) literal
//a barra antes serve para não ter outro significado no regex

//$ -> fim da string
//esse ultimo [^\s@] chamamos de sufixo (.com, .br, .net...)