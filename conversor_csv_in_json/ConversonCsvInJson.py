import csv;
import json

def conversorCsvInJson(arquivoCsv,arquivoJson, chaveFiltro, filtro, listaDeChaves):
    dados = []
    contador = 0
    
    with open(arquivoCsv, newline = '',encoding='latin-1') as csvFile:
        reader = csv.DictReader(csvFile, delimiter=';')
        for row in reader:
            dic ={}
            if row[chaveFiltro].startswith(filtro):
                for c in listaDeChaves:
                    dic[c] = row[c]
                    
                dados.append(dic)
                contador+=1

    with open(arquivoJson, 'w',encoding='utf-8') as jsonFile:
        json.dump(dados, jsonFile,indent=4, ensure_ascii=False)
    
    print('Conversão concluída!')
    print("Foram criados {} objetos json".format(contador))
    
            
chaves=['NO_REGIAO','NO_UF','NO_MUNICIPIO','NO_MESORREGIAO','NO_MICRORREGIAO','NO_ENTIDADE',
        'QT_MAT_BAS','QT_MAT_INF','QT_MAT_FUND','QT_MAT_MED','QT_MAT_MED_CT','QT_MAT_MED_NM',
        'QT_MAT_PROF','QT_MAT_PROF_TEC','QT_MAT_EJA','QT_MAT_EJA_FUND','QT_MAT_EJA_MED','QT_MAT_ESP']

conversorCsvInJson('microdados_ed_basica_2023.csv','dados_ed_basico.json','SG_UF','PB',chaves)
