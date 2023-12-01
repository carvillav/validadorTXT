
// Función para manejar eventos de cambio en el input
function handleInputChange(input, files, dropArea, dragText, tipo) {
    files = input.files;
    dropArea.classList.add("active");
    showFiles(files, tipo);
    dropArea.classList.remove("active");
}

function handleDragEvents(e, files, dropArea, dragText, tipo) {
    e.preventDefault();
    if (e.type === "dragover") {
        dropArea.classList.add("active");
        dragText.textContent = `Suelta el/los archivo/s ${tipo}`;
    } else {
        dropArea.classList.remove("active");
        dragText.textContent = `Arrastra y suelta el/los archivo/s ${tipo}`;
    }
    if (e.type === "drop") {
        files = e.dataTransfer.files;
        showFiles(files, tipo);
        dropArea.classList.remove("active");
        dragText.textContent = `Arrastra y suelta el/los archivo/s ${tipo}`;
    }
}

function handleButtonClick(input) {
    input.click();
}

function processFilesCommon(file, tipo, isUnico = false) {
    const docType = file.type;

    if (docType === "text/plain") {
        const fileReader = new FileReader();
        const id = isUnico ? 0 : `file-${Math.random().toString(32).substring(7)}`;

        fileReader.addEventListener('load', e => {
            const nameArch = file.name;
            const image = validatorNameFile(id, nameArch, tipo);
            const html = document.querySelector(`#preview-${tipo}`).innerHTML;
            document.querySelector(`#preview-${tipo}`).innerHTML = isUnico ? image : image + html;
        });

        fileReader.readAsDataURL(file);
    } else {
        swal("Oops!", "¡El tipo de archivo que intentaste subir no es un archivo de texto!", "error");
        return;
    }
}

function showFiles(files, tipo) {
    if (!files.length) return;

    if (tipo === 'TXSTA' || tipo === 'TXTA') {
        const firstFile = files[0];
        processFilesCommon(firstFile, tipo, true);
    } else {
        for (const file of files) {
            processFilesCommon(file, tipo);
        }
    }
}


// Asignación de eventos y elementos para PLMC
const dropAreaPLMC = document.querySelector(".drop-area-PLMC");
const dragTextPLMC = dropAreaPLMC.querySelector("h2");
const buttonPLMC = dropAreaPLMC.querySelector("button");
const inputPLMC = dropAreaPLMC.querySelector("#input-file-PLMC");
let filesPLMC;

buttonPLMC.addEventListener("click", (e) => handleButtonClick(inputPLMC));
inputPLMC.addEventListener("change", (e) => handleInputChange(inputPLMC, filesPLMC, dropAreaPLMC, 'PLMC'));
dropAreaPLMC.addEventListener("dragover", (e) => handleDragEvents(e, filesPLMC, dropAreaPLMC, dragTextPLMC, 'PLMC'));
dropAreaPLMC.addEventListener("dragleave", (e) => handleDragEvents(e, filesPLMC, dropAreaPLMC, dragTextPLMC, 'PLMC'));
dropAreaPLMC.addEventListener("drop", (e) => handleDragEvents(e, filesPLMC, dropAreaPLMC, dragTextPLMC, 'PLMC'));

// Asignación de eventos y elementos para OGPR
const dropAreaOGPR = document.querySelector(".drop-area-OGPR");
const dragTextOGPR = dropAreaOGPR.querySelector("h2");
const buttonOGPR = dropAreaOGPR.querySelector("button");
const inputOGPR = dropAreaOGPR.querySelector("#input-file-OGPR");
let filesOGPR;

buttonOGPR.addEventListener("click", (e) => handleButtonClick(inputOGPR));
inputOGPR.addEventListener("change", (e) => handleInputChange(inputOGPR, filesOGPR, dropAreaOGPR, 'OGPR'));
dropAreaOGPR.addEventListener("dragover", (e) => handleDragEvents(e, filesOGPR, dropAreaOGPR, dragTextOGPR, 'OGPR'));
dropAreaOGPR.addEventListener("dragleave", (e) => handleDragEvents(e, filesOGPR, dropAreaOGPR, dragTextOGPR, 'OGPR'));
dropAreaOGPR.addEventListener("drop", (e) => handleDragEvents(e, filesOGPR, dropAreaOGPR, dragTextOGPR, 'OGPR'));

// Asignación de eventos y elementos para TXSTA
const dropAreaTXSTA = document.querySelector(".drop-area-TXSTA");
const dragTextTXSTA = dropAreaTXSTA.querySelector("h2");
const buttonTXSTA = dropAreaTXSTA.querySelector("button");
const inputTXSTA = dropAreaTXSTA.querySelector("#input-file-TXSTA");
let filesTXSTA;

buttonTXSTA.addEventListener("click", (e) => handleButtonClick(inputTXSTA));
inputTXSTA.addEventListener("change", (e) => handleInputChange(inputTXSTA, filesTXSTA, dropAreaTXSTA, dragTextTXSTA, 'TXSTA'));
dropAreaTXSTA.addEventListener("dragover", (e) => handleDragEvents(e, filesTXSTA, dropAreaTXSTA, dragTextTXSTA, 'TXSTA'));
dropAreaTXSTA.addEventListener("dragleave", (e) => handleDragEvents(e, filesTXSTA, dropAreaTXSTA, dragTextTXSTA, 'TXSTA'));
dropAreaTXSTA.addEventListener("drop", (e) => handleDragEvents(e, filesTXSTA, dropAreaTXSTA, dragTextTXSTA, 'TXSTA'));

// Asignación de eventos y elementos para TXTA
const dropAreaTXTA = document.querySelector(".drop-area-TXTA");
const dragTextTXTA = dropAreaTXTA.querySelector("h2");
const buttonTXTA = dropAreaTXTA.querySelector("button");
const inputTXTA = dropAreaTXTA.querySelector("#input-file-TXTA");
let filesTXTA;

buttonTXTA.addEventListener("click", (e) => handleButtonClick(inputTXTA));
inputTXTA.addEventListener("change", (e) => handleInputChange(inputTXTA, filesTXTA, dropAreaTXTA, dragTextTXTA, 'TXTA'));
dropAreaTXTA.addEventListener("dragover", (e) => handleDragEvents(e, filesTXTA, dropAreaTXTA, dragTextTXTA, 'TXTA'));
dropAreaTXTA.addEventListener("dragleave", (e) => handleDragEvents(e, filesTXTA, dropAreaTXTA, dragTextTXTA, 'TXTA'));
dropAreaTXTA.addEventListener("drop", (e) => handleDragEvents(e, filesTXTA, dropAreaTXTA, dragTextTXTA, 'TXTA'));

// Valida el nombre del archivo txt
function validatorNameFile(unId, arch, tipoText){
    // Valido nombres
    var regexNoTenerEnCuenta = /[^A-Za-z0-9_.]/; // \W. No se debe tener en cuenta lo que está entre corchetes
    var regexEspacio = /\s/; //Toma en cuenta los espacios

    if(arch.startsWith('DTVL') || arch.startsWith('DTVA')){
        if(!arch.startsWith(tipoText,5)){ //evalúa si coincide a partir de la posición 5 con el contenido tipoText o sea si empieza con esa palabra a partir de la posición 5
            return result(unId, arch, tipoText, "#ff0000", "¡Este archivo no es "+tipoText+"!");
        }else{
            if(regexEspacio.test(arch) ) {
                return result(unId, arch, tipoText, "#ff0000", "¡El nombre del archivo contiene espacios!");
            }else{
                if(regexNoTenerEnCuenta.test(arch)){
                    return result(unId, arch, tipoText, "#ff0000", "¡El nombre del archivo contiene caracteres especiales no permitidos, sólo se admite guión bajo!");
                }else{
                    return result(unId, arch, tipoText, "#52ad5a", "¡El nombre del archivo es correcto!");
                }
            }
        }    
    }else{
        return result(unId, arch, tipoText, "#ff0000", "¡Este archivo no es un DTVL o DTVA!");
    }
}

function result(idDiv, unArch, unTipo, color, estado) {
    return  `<div id="${idDiv}" class="file-container">
                    <div class="status">
                        <span id="nombre-${unTipo}">${unArch}</span>
                        <span class="status-text" style="color: ${color};">${estado}</span>
                    </div>
                </div>
            `;
}

// Validar nombres 
function ValidarIgualdadNombreArchivos(){

    var nameArchTXSTA = document.querySelector("#preview-TXSTA").innerText;
    var nameArchTXTA = document.querySelector('#preview-TXTA').innerText;

    if(nameArchTXTA !== "" &&  nameArchTXSTA !== "" ){//&& nameArchTXTA !== undefined && nameArchTXSTA !== undefined
        if(nameArchTXTA.substring(9) == nameArchTXSTA.substring(10) && nameArchTXTA.substring(0, 4) == nameArchTXSTA.substring(0, 4)){
                swal("¡Muy bien!","¡Los nombres de los archivo coindiden!", "success");
                return;
            }else{
                swal("Oops!", "¡Los nombres de los archivos NO coinciden!", "error");
                return;
            }
    }else{
        swal("Oops!", "¡Por favor verifica si aparecen los nombres de los dos archivos!", "error");
            return;
    }
}