import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["う"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      <div class="incomplete-area">
        <p class="title">未完了TODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} class="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div class="complete-area">
        <p class="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} class="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
