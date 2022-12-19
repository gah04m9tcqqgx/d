/* eslint @typescript-eslint/no-explicit-any: 0 */

import Card from "src/components/Card";
import dollNihonNingyou from "src/imgs/doll_nihon_ningyou.png";
import food_paitan_soup from "src/imgs/food_paitan_soup.png";
import manner_door_open_ashi from "src/imgs/manner_door_open_ashi.png";
import nekonote_karitai_woman from "src/imgs/nekonote_karitai_woman.png";
import smartphone2_girl from "src/imgs/smartphone2_girl.png";
import train_door_hasamaru from "src/imgs/train_door_hasamaru.png";

const cardsInfo = [
  {
    link: "about",
    img: dollNihonNingyou.src,
    imgAlt: "市松人形のイラスト",
    title: "市松人形のイラスト",
    text: "かわいい市松人形のイラストです",
  },
  {
    link: "about",
    img: food_paitan_soup.src,
    imgAlt: "スープ",
    title: "イラストやのスープ",
    text: "今日の献立はこいつで決まり！",
  },
  {
    link: "about",
    img: manner_door_open_ashi.src,
    imgAlt: "電車のドアにカバンを挟まれた人のイラスト",
    title: "電車のドアにカバンを挟まれた人",
    text: "電車に駆け込み乗車をした男性がカバンをドアに挟まれてしまったイラストです。",
  },
  {
    link: "about",
    img: nekonote_karitai_woman.src,
    imgAlt: "猫の手も借りたい人のイラスト（女性）",
    title: "猫の手も借りたい人のイラスト（女性）",
    text: "忙しい女性が猫の助けでもいいので欲しいと思っているイラストです。",
  },
  {
    link: "about",
    img: smartphone2_girl.src,
    imgAlt: "スマートフォンを使う子供のイラスト（女の子）",
    title: "スマートフォンを使う子供のイラスト（女の子）",
    text: "スマートフォンを使う子供のイラスト（女の子）",
  },
  {
    link: "about",
    img: train_door_hasamaru.src,
    imgAlt: "足でドアを開ける人のイラスト",
    title: "足でドアを開ける人のイラスト",
    text: "両手がふさがっている荷物を運ぶ男性が足でドアの開け閉めをしているイラストです。",
  },
];

const Articles = () => {
  return (
    <section className="grid container mx-auto p-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cardsInfo.map((info, i) => {
        return (
          <Card
            link={info.link}
            img={info.img}
            imgAlt={info.imgAlt}
            title={info.title}
            text={info.text}
            num={i}
            key={info.text}
          />
        );
      })}
    </section>
  );
};

export default Articles;
