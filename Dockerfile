###| Dockerfile |###
###|> Usa Docker para poder ejecutar TheMystic-Bot-MD en cualquier plataforma! <|###

FROM    --platform=$TARGETOS/$TARGETARCH node:19.1-bullseye
###|> Especificando la imagen docker a usar, incluyendo el tipo de plataforma (AMD64/ARM64) <|###

RUN     apt-get update \
        && apt-get install -y ffmpeg imagemagick webp
###|> Instalando requisitos <|###

COPY    package.json .
###|> Clonando 'package.json' al directorio actual <|###

RUN     npm i
###|> Instalando dependencias <|###

COPY    . .
###|> Clonando todos los archivos al directorio actual <|###

EXPOSE  3000
###|> Exponiendo puerto '3000' para iniciar el servidor web <|###

CMD     ["node", "index.js", "--server"]
###|> Iniciando TheMystic-Bot-MD en modo servidor <|###