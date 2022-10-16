# Usando o TypeScript

### Configurações

Criar o tsconfig.json e colocar essas linhas nele:


        {
            "extends": "expo/tsconfig.base",
            "compilerOptions": {
            "experimentalDecorators": true,
            "forceConsistentCasingInFileNames": true,
            "isolatedModules": true,
            "lib": ["ESNext"],
            "noEmitHelpers": true,
            "noFallthroughCasesInSwitch": true,
            "noImplicitReturns": true,
            "noUnusedLocals": true,
            "noUnusedParameters": true,
            "strict": true
            }
        }

### Instalando dependencias

        yarn add @types/react -D
        yarn add  @types/react-native -D
        yarn add ts-node -D
        yarn add typescript -D
       
        ou

        yarn add @types/react @types/react-native ts-node typescript -D

        
        yarn add expo-updates
        yarn add @expo/webpack-config

        ou 

        yarn add expo-updates @expo/webpack-config

### Usando o styled-components

        yarn add styled-components
        yarn add @types/styled-components-react-native


### OBS:. packege.json 
No packege.json do projeto altere o main de "main":"index.js" para "main": "./src/index.tsx"


### Executar 

        expo start --tunnel # executa