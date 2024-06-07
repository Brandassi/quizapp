let tema = "claro";

export function trocarTema( body, botaoTema) {
    if (localStorage.getItem("tema")){
        tema = localStorage.getItem("tema");
    }

  if (tema === "claro") {
    body.classlist.add("escuro");
    localStorage.setItem("tema", "escuro");
    botaoTema.style.justifyContent = "flex-start"
  } else{
    body.classList.remove("escuro")
    localStorage.setItem("tema", "claro")
  }
}

export function verificarTema( body, botaoTema){
    if (localStorage.getItem("tema")){
        tema = localStorage.getItem("tema")
    }

    if (tema === "escuro"){
        body.classList.add("escuro")
        botaoTema.style.justifyContent = "flex-end"
    }
}