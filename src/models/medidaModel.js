var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {
    instrucaoSql = `select 
                        temperatura, 
                        umidade, 
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {
    instrucaoSql = `select top 1 temperaturaAtual from registros where
    fkSensor = ${idSensor};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticarRefrigerador(empresa) {
    instrucaoSql = `select idSensor from sensor join refrigerador on fkRefrigerador = idRefrigerador
    where fkEmpresa = ${empresa};`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    autenticarRefrigerador,
    buscarMedidasEmTempoReal
}