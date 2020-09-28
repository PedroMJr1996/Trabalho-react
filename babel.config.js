module.exports = {
    presets: [ //vamos exportae os seguintes presets instalados anteriormente
        "@babel/preset-env",  //Responável por hailitar as responsabilidades do Java Script que o navegador não entende
                              //como o import, export, arrow  function (possui sintaxe mais curta) e classes.
        "@babel/preset-react" //Vai habilitar do react como o JSK entre outras funcionalidades expecificas
    ],
    plugins:[
        "@babel/plugin-proposal-class-properties" //Instalamos este plungin para podermos utilizar uma sintaxe
                                                  // mais simples do 'state' no componente TechList
    ]
};