let mainFolder;
let subFolders;
let finalCodeFolders;
let finalCodeVeeva;
let copyCodeFolders;
let copyCodeVeeva;

function reload() {
	document
		.querySelector("#generateCode")
		.addEventListener("click", generateStructureCLM);
	document
		.querySelector("#resetForm")
		.addEventListener("click", resetForm);
	mainFolder = document.querySelector("#mainFolder");
	subFolders = document.querySelector("#subFolders");
	finalCodeFolders = document.querySelector("#finalCodeFolders");
	finalCodeVeeva = document.querySelector("#finalCodeVeeva");
}

function generateStructureCLM(e) {
	e.preventDefault();
	reload();
	createFolders();
	createStructureVeeva();
	document.querySelector("#generateCode").style.display = "none";
}

function createFolders() {
	let keyMessagesModified;
	mainFolder = mainFolder.value;
	subFolders = subFolders.value;
	//Remove linebreaks and replace for commas & Remove the last comma.
	keyMessagesModified = subFolders
		.split("\n")
		.join(",")
		.slice(0, -1);
	//Generate the final code to create Folders
	finalCodeFolders.value = `mkdir -p ${mainFolder}/{${keyMessagesModified}}`;
}

function createStructureVeeva() {
	let keyMessagesArray;
	let order = 0;
	//subFolders in Array
	keyMessagesArray = subFolders.split("\n");
	//Remove the empty last item.
	keyMessagesArray.pop();

	//Print the code...
	for (let i = 0; i < keyMessagesArray.length; i++) {
		finalCodeVeeva.value += `{file:'${
			keyMessagesArray[i]
		}',order:${(order += 10)}},\n`;
	}

	//Remove the last comma
	finalCodeVeeva.value = finalCodeVeeva.value.replace(/,\s*$/, "");
}

function resetForm(){
    document.querySelector('form').reset();
    document.querySelector("#generateCode").style.display = "inline-block";
}

function copyToClipboard() {
	copyCodeFolders = document.querySelector("#copyCodeFolders");
	copyCodeFolders.setAttribute("data-clipboard-text", finalCodeFolders.value);
	copyCodeFolders.textContent = "COPIED! :)";
	setTimeout(() => {
		copyCodeFolders.textContent = "Copy to Clipboard!";
	}, 1000);
}

function copyToClipboard2() {
	copyCodeVeeva = document.querySelector("#copyCodeVeeva");
	copyCodeVeeva.setAttribute("data-clipboard-text", finalCodeVeeva.value);
	copyCodeVeeva.textContent = "COPIED! :)";
	setTimeout(() => {
		copyCodeVeeva.textContent = "Copy to Clipboard!";
	}, 1000);
}

reload();
