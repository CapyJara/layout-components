import styles from './style.css';

const root = document.getElementById('root');
const newList = document.createElement('ul');
root.appendChild(newList);

newList.className = styles.dogs;

['spot', 'rover', 'bingo', 'joe']
  .forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    newList.appendChild(li);
  });

