import $ from 'jquery';
import './style.css';
import imagegalery from './images/sass.svg';

$(function(){
    $ ('#botao').on('click',function(){
        $('h1').html('Olá mundo ALTERADO');
        
        $(this).addClass('botao');

    //importar camera galery ao clicar no botão
        $('#imagem').attr('src',imagegalery)

    });
});