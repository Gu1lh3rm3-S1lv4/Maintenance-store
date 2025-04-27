//PWGA TODOS OS ELEMENTOS COM A CLASSE 'SLIDER'(OU SEJA,TODOS OS CARROSSEIS DA PAGINA)
document.querySelectorAll('.slider').forEach((slider) => {

    //DENTRO DE CADA CARROSSEL,SELECIONA O CONTAINER QUE CONTEM TODOS OS SLIDES
    const imagesContainer = slider.querySelector('.slides-skills');

    //PEGA TODOS OS SLIDES INDIVIDUAIS DENTRO DO CARROSSEL ATUAL 
    const images = slider.querySelectorAll('.slide-skills');

    //define a imagem inicial como sendo a primeira(indice 0)
    let index = 0;

    //PEGA O BOTAO DE AVANÇAR DENTRO DO CARROSSEL ATUAL
    const nextBtn = slider.querySelector('.next');

    //pega o botao de voltar no carrossel atual
    const prevBtn = slider.querySelector('.prev');

    //quando o botao next for clicado
    nextBtn.addEventListener('click', () => {
        //AVANÇA O INDICE,SE PASSAR DO ULTIMO SLIDE, VOLTA PARA O PRIMEIRO
        index = (index + 1) % images.length;

        //APLICA A TRANSIÇÃO VISUAL PARA O PROXIMO SLIDE(DESLIZA PARA ESQUERDA)
        imagesContainer.style.transform = `translateX(-${index * 100}%)`;
    });

    //quando o botao prev for clicado
    prevBtn.addEventListener('click', () => {
        //VOLTA O INDICE, SE ESTIVER NO PRIMEIRO VAI PARA O ULTIMO 
        index = (index - 1 + images.length) % images.length;
        //APLICA A TRRANSIÇÃO VISUAL PARA O SLIDE ANTEIOR(DESLIZA PARA A DIREITA)
        imagesContainer.style.transform = `translateX(-${index * 100}%)`;
    });
});
