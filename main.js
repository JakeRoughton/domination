function addStrikeThrough(){
    let argumentItem1 = document.querySelector('li');
    argumentItem1.style.textDecoration = 'line-through';
}

addStrikeThrough();


function setImage(id,url){
    let image = document.querySelector(id) //('#' + id) or (`#${id})
    image.src = url;
    image.style.height = '250px'
}

setImage('#image-1','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/422d2e28-3a0c-4884-b4f9-c0dd278a1023/dc15pmq-b5b35955-e0cb-47a1-974e-220434076cc0.jpg/v1/fill/w_1143,h_699,q_70,strp/space_bucket_t_971_by_rashedjrs_dc15pmq-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzgzIiwicGF0aCI6IlwvZlwvNDIyZDJlMjgtM2EwYy00ODg0LWI0ZjktYzBkZDI3OGExMDIzXC9kYzE1cG1xLWI1YjM1OTU1LWUwY2ItNDdhMS05NzRlLTIyMDQzNDA3NmNjMC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._aY0-QNplczqMgKo_0MGmgCv2f1LcUUNgqWv5_1tdQc');

setImage('#image-2','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/426a82a2-e7ab-45a0-9382-1b5b5065a1d5/d7hyc1x-1e716496-0ec3-4dc3-a145-4d213c3e9555.jpg/v1/fill/w_1216,h_657,q_70,strp/al_isha_environment_art_by_dreadjim_d7hyc1x-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjkyIiwicGF0aCI6IlwvZlwvNDI2YTgyYTItZTdhYi00NWEwLTkzODItMWI1YjUwNjVhMWQ1XC9kN2h5YzF4LTFlNzE2NDk2LTBlYzMtNGRjMy1hMTQ1LTRkMjEzYzNlOTU1NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.bIEkcXAwbHoyYUb27hakGkvHRVhaq7bisnXXXeJktTE');

setImage('#image-3','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b1f96af6-56a3-47a8-b7f4-406f243af3a3/d97cads-9608fa73-cf1d-44ae-ae25-a39ceb070978.jpg/v1/fill/w_1024,h_576,q_75,strp/titansgrave___sky_castle_by_hideyoshi_d97cads-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvYjFmOTZhZjYtNTZhMy00N2E4LWI3ZjQtNDA2ZjI0M2FmM2EzXC9kOTdjYWRzLTk2MDhmYTczLWNmMWQtNDRhZS1hZTI1LWEzOWNlYjA3MDk3OC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.id6TPK12m1A54ncDy9BYWEznA_GSH-AXGsQ_wa_4mFs')


function removeArgument(){
    let itemToRemove = document.querySelector('li');
    itemToRemove.remove();
}
removeArgument();
removeArgument();

function idSize(font, id){
    let fontId = document.querySelector(id);
    fontId.style.fontSize = font;
    
}

idSize('80px','#imageArea');
idSize('35px','#heading');

function addElement(element){
    let arguments = document.querySelector('#arguments');
    arguments.appendChild(element);
}

let newImage = document.createElement('img');
newImage.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135cb28c-5b2b-4d6f-8715-e938fd4de8b2/dcya99o-53d208af-e1cf-4108-bb14-0774761851c2.png/v1/fill/w_1024,h_576,q_80,strp/harrower___class_corvette_by_stingra_dcya99o-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEzNWNiMjhjLTViMmItNGQ2Zi04NzE1LWU5MzhmZDRkZThiMlwvZGN5YTk5by01M2QyMDhhZi1lMWNmLTQxMDgtYmIxNC0wNzc0NzYxODUxYzIucG5nIiwiaGVpZ2h0IjoiPD01NzYiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8xMzVjYjI4Yy01YjJiLTRkNmYtODcxNS1lOTM4ZmQ0ZGU4YjJcL3N0aW5ncmEtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.tepCHeIXNy1yYO_yAz0ROjDS6oTKfJ_HHLqHH0TktXE'
newImage.style.height = '200px'
addElement(newImage);

function reSize(image){
    image.style.height = '30px'
}
reSize(newImage)

function makeInvisible(element){
    element.className = 'invisible' 
}
let header = document.querySelector('h1');
makeInvisible(header);

function takeText(text){
    let textItem = document.createElement('li');
    textItem.innerText = text;
    return textItem
}

let newText = createElement('This is freakin cool')
addElementToList(newText)

function twoStrings(head, text){
    let newHeader = document.createElement(`h${head}`);
    newHeader.innerText = text;
    return newHeader;
}

let newHeader = createHeader(3, ' This is a new header');
appendToArguments(newHeader);