function suporteN1 (chamado){
    console.log("N1 recebeu o chamado");
    if(chamado.prioridade === "normal"){
        console.log("N1 assumiu o chamado");
        return "suporte N1 atendeu";
    }
    console.log ("N1 não consegiu resolver");
    console.log ("encaminhou para N2...")
    return suporteN2 (chamado);
};

function suporteN2 (chamado){
    console.log("N2 recebeu o chamado");
    if(chamado.prioridade === "media"){
        console.log("N2 assumiu o chamado");
        return "suporte N2 atendeu";
    }
    console.log ("N2 não consegiu resolver");
    console.log ("encaminhou para especialista")
    return especialista (chamado);
};

function especialista (chamado){
    console.log("especialista recebeu o chamado");
    if(chamado.prioridade === "alta"){
        console.log("especialista assumiu o chamado");
        return "suporte especialista atendeu";
    }

   throw new error ("nenhum responsavel respondeu")
};

module.exports = {
    suporteN1
}