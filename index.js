const wordCount = document.getElementById('word-count');
const characterCount = document.getElementById('character-count');
const uniqueWord = document.getElementById('unique-words');
const textArea = document.getElementById('input-text');

window.addEventListener('DOMContentLoaded', ()=>{

    textArea.addEventListener('input', ()=>{
        const text = textArea.value.trim();
        const word = text === '' ? (0) : (text.split(/\s+/).length)
        const character = text.length
        const uniqueWords = new Set(text.match(/\b\w+b/g)).size;

        wordCount.innerHTML = `word count ${word}`
        characterCount.innerHTML = `Characters Count (including spaces): ${character}`
        uniqueWord.innerHTML = `Unique Words: ${uniqueWords}`
        
    });
});

