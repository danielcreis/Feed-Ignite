import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({content, onDeleteComment}) {
const [ likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
      onDeleteComment(content)
      console.log()
  }

  function handleLikeComment(){
    setLikeCount((state) =>{
      return state + 1;
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/75449506?v=4"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Daniel Reis</strong>
              <time title="12 de Dezembro ás 21:06" dateTime="">
                Cerca de Uma hora atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
