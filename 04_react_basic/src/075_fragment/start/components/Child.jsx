import "./Child.css";

const Child = () => {
  /* POINT Fragmentがなぜ必要なのか？
    Reactのコンポーネントはルート要素が１つでなければならない（独立したツリー構造になっている）というルールがあり、
    Fragmentを使うことで、複数の要素を返すコンポーネントを余分なノードを追加することなくまとめることができる。
  */
  return (
    <>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Commodi sed dolores, 
        tenetur pariatur quas sit id tempore, 
        inventore non cum aliquam ipsum numquam sint nemo minus. 
        Hic rerum quidem modi.</p>
    </>
  );
};

export default Child;
