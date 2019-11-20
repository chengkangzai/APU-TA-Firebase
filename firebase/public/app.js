const pclist = document.querySelector('#pc-list');

//Render the PC list 
function renderPC(doc) {
    let li = document.createElement('tr');
    let pc_name = document.createElement('td');
    let cpu = document.createElement('td');
    let model = document.createElement('td');

    //Set the data-id tag fot the li
    li.setAttribute('data-id', doc.id);
    //Put the value into the variable 
    pc_name.textContent = doc.id;
    cpu.textContent = doc.data().CPU;
    model.textContent = doc.data().Model;


    //Append all of the span tag into li tag
    li.appendChild(pc_name);
    li.appendChild(cpu);
    li.appendChild(model);
    //Append all of the li tag to the ul tag
    pclist.appendChild(li);
}


db.collection('labs').doc('TL04-01').collection('computers').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderPC(doc);
    })
})