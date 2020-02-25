import styles from '@antenando/flexboxgrid2/dist/flexboxgrid2.css';

export default function getClass(className) {
  return (styles && styles[className]) ? styles[className] : className;
}
