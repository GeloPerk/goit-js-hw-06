const ulList = document.querySelector('#categories');
const ulItems = ulList.querySelectorAll('.item');

console.log(`Number of categories: ${ulItems.length}`);

ulItems.forEach(item => {
  const ulTitle = item.querySelector('h2').textContent;
  const ulElements = item.querySelectorAll('ul li').length;
  console.log(`Category: ${ulTitle}\nElements: ${ulElements}`);
});