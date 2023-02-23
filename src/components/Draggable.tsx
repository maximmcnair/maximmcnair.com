import Draggable from 'react-draggable';
import styles from './Draggable.module.css'

interface Props {
  children: any;
  x: number;
  y: number;
  title: string;
  href?: string;
}

const DragComp: React.FC<Props> = ({ children, x: defaultX, y: defaultY, title, href }) => {
  return (
    <>
      <div className={styles.desktop}>
        <Draggable defaultPosition={{x: defaultX, y: defaultY}}>
          <div className={styles.content}>
            <header className={styles.header}>
              <div className={styles.close} />
              <div className={styles.minimise} />
              <div className={styles.maximise} />
              {href ? 
                <a href={href} target="_blank" className={styles.link}>{title}</a>:
                <span>{title}</span>
              }
            </header>
            {children}
          </div>
        </Draggable>
      </div>

      <div className={styles.mobile}>
        <div className={styles.content}>
          <header className={styles.header}>
            <div className={styles.close} />
            <div className={styles.minimise} />
            <div className={styles.maximise} />
            {href ? 
              <a href={href} target="_blank" className={styles.link}>{title}</a>:
              <span>{title}</span>
            }
          </header>
          {children}
        </div>
      </div>
    </>
  )
}

export default  DragComp;
