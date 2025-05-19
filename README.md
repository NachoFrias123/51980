# Analizador Léxico y Sintáctico - Lenguaje tipo C (ANTLR4 + Node.js)

Repositorio del alumno **Ignacio Frías** — Legajo: `51980`  
URL del repositorio: https://github.com/NachoFrias123/51980

---

# Descripción

Este proyecto implementa un analizador léxico y sintáctico de un subconjunto del lenguaje C utilizando **ANTLR4**, en entorno **Node.js**.


# Estructura

- `grammar/LenguajeC.g4`: Gramática en formato ANTLR.
- `gramatica.txt`: Versión textual original de la gramática asignada.
- `input/`: Ejemplos de entrada válidos e inválidos.
- `index.js`: Script para ejecutar el analizador.
- `package.json`: Configuración del proyecto Node.js.
- `output/`: Carpeta de salida para archivos generados por ANTLR.

# Requisitos

- Node.js instalado (v14+)
- ANTLR4 instalado globalmente
- Git


# Pasos para ejecutar

### 1. Clonar el repositorio

    git clone https://github.com/NachoFrias123/51980.git
    cd 51980

Cambia al directorio del proyecto:

    cd 51980/Analizador de 0

Para abrir el proyecto en VS Code escribe esto en la terminal:

    code .


### 2. Instalar dependencias
1. Abrir una nueva terminal dentro de VSC

![image](https://github.com/user-attachments/assets/10d87028-78c1-4cee-ba38-ef24d0be4664)

![image](https://github.com/user-attachments/assets/b170c251-6240-43cd-aae5-91a90a219cbd)

2. Luego escribir:

       npm install antlr4

  ![image](https://github.com/user-attachments/assets/356aa9e1-32a9-4d90-9909-87d2c482c8e3)

### 3. Elegir un ejemplo y copiar y pegar en input.txt
 
![image](https://github.com/user-attachments/assets/3c7c372b-2fe7-4d81-9dab-63c64e5b4013)


### 4. Ejecutar el analizador con
    npm start
    
![image](https://github.com/user-attachments/assets/d6798548-813c-46b4-9dc4-b59b73ff0264)

Si el ejmplo ingresado es correcto, le deberia aperecer debajo de la tabla de tokens y lexemas:

![image](https://github.com/user-attachments/assets/bb60136e-74fc-4062-a23b-2e674d121808)

En caso de querer generar un arbol, presione (FN + F5)

![image](https://github.com/user-attachments/assets/a1d9e3cb-b197-4f81-80d9-6c3537289b52)

