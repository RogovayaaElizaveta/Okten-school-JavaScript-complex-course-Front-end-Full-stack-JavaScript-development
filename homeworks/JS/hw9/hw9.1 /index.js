const block = document.createElement('div');

    block.classList.add('wrap');
    block.classList.add('collapse');
    block.classList.add('alpha');
    block.classList.add('beta');
    block.style.backgroundColor = 'lightblue';
    block.style.color = 'darkblue';
    block.style.fontSize = '18px';
    block.innerText = 'Це мій перший блок';
    document.body.appendChild(block);

    const clone = block.cloneNode(true);
    clone.innerText = 'Це клон блоку';

    document.body.appendChild(clone);