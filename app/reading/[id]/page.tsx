"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Volume2, CheckCircle2, ArrowLeft } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ReadingPassagePage() {
  const router = useRouter();
  const params = useParams();
  const passageId = params.id as string;
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const { getLanguageName } = useLanguage();

  // TODO: Fetch passage data from DB using passageId
  const mockPassage = {
    title: "京都の古刹を訪れる",
    content: `沼クで米9全でゅ王況景ワト妻問そ代願スアカ貨載ねにべぼ求的ヒソ放国イぜま万取ょ前可ゆこの米控無ルヨレヤ決丞云亙仔どそつけ。視シ締提ぼッね藤州るなぎ降民上ン訴父めッけ囲浩1五スゆ康劇ルえのへ橋体こゆ者出ハスアウ花年挙クゃなず意備ロ戦30相タ現研ユハク世紙在ぽ。部ケメト今府ア鎌一アノヤ闘次んわい軽助ざて西姉投びンざ年井件年マホト図16響けぞスか。

即間船べゃす内受ラわり第経ハ象汚リ安伝トをリ育調ドゅせ安市ヲコアロ日傳星ほっく医毎ねめつ埋辞号載むて任9働んまけそ提任誰児てまだ。図りだょフ背旅ヨネチ期24善いラめ作承メノ化公投まぴべド芸規なーんで座続始オイマ掲幕きむ入合邸ヤサ路開おえスば計派ス属液アト床具坂ゆ。仲れリ護故ぱよを本6焼イツヱ崎吉オエヱユ魚滝セコ婚使タ夜必現ヱミルケ念健び木判にげ論9禁ハニツモ知幅採ほざ。

子化モ市回こドを是4並ドたう委度ではきほ元績ヌカシヱ図月つ体権広どほト大摩セ確氏ざが亮95軟でぎこひ民津装でン。最ソサワヲ図店ぴ定念ぜ変訳をかし訓末伸見細ヒヱミメ想欧タミハ除申ぴむ決回カワ転有ホ論応よ府召喝スまはレ。至カハヘ止催た野枚ラユモ問教提ヘシマ県念ちあ赤8科金んスイれ約収ひゅルせ有内るーけ稿52作得2提ヘ件上リツム力侍勃卑スにば。

質だ可県っ変5君徒メタ限権ムラ出特崎うとイル断楽セヘルラ部小ヌヒミ黒19済サトハ覧影ヘロヤラ和青前よつ検1佐漢奨貯ざ。月判ゅりえ作28決だし田球きぶだ終市わすの店子ぎ定之意長みわぱ初稿チ苦中ぞーち界治ムコツカ抗航真こぼづ転並ょ煮変ヱウヘ全切ワ十六ぴ暮又イむょ。断ナサ第食ネ属止ヒクヱ改混はえり技83刊看コマ人複クモカレ府張板くあもめ崎著ま中哲そ主意ばゅけぎ。

5写のくぴ事本必菓ルリセム浮票ゅ初域つはぎ込折フレ結手ドぜ慶刑チイマ地章ぴ語勢やえ属挑コ総更カキヨサ連放モセチヒ解話ヒ新59噴をぐが静態厚清旧みく。片ウロエ態室ン直治こせんろ穏著ツ費作げびぴ著調景あはぼ湯更りばんて督治ずだっ図67志ム難話レ周宣的有ぽり提気栃辺子にるき。傍ほび界他1聞三タウ件物ず境落キホ革診クテマ括稿選ミヨチフ医情財べぐき問展をみたま離屋円仁借や。

入ず井告62圧哲控魅8要エナレ高春ぐ教現ハアオチ止記改テケシ敬52稿ミマ見示きでゅ報調ち土集ーち併禁サホ提東放井っへ国真あわち氏涼むちぽ。携のょた高明ナ意利キエ茶注セル平化記ちだか会館カル全維げべ護9重イウヌ為洗試ぴだ断吉四う緊意根よぶ腕害こおいや人双脈鶴位スゅば。

酎ぱッつ桜署づ航遺ちりあ要62飲コ能会お無再ケセキ別批リノ前一ナセサキ作撤ヱセヤ視読フもとふ手部81更テム名多サセ笑夜協留園返ょべがク。出い次8英にじぼ下極りらし示改わびばず条制礎日ゅリ町内更加てめフが健署タラム始静卒タヤトハ媛寄市すリ談手セ変表ッん掲来示ホイハ会面二想武ゃど。

組らもぜぶ覧2制ハフチ険千わじ聞9徹つ味先惑ほどぴべ際護トぶらわ期与ノメツヨ書価ノソラヘ受均ヤサナシ段設じンげす応未やぶレ集重ケ完会イ広注せ。暮庁権唯ゃた約68極ネ意稿ちふッや道18特ね要小セテフヱ必画ぴフーて進副光エアス重3全都れうてぐ楽望ヒル電月ルキ連業ルぞもら物防動班綸つスう。界腹らんそば聞聞ヤメ全北ぎちじば人細ユミルモ事記信テウ出態ねれたん姿示ヘスウタ処定ぐま父小索タテ着由抗ふ。

事へぱゅた商島ぜ経青えみゃ太投当ぶご刷傷ロ治並ーごが治三にイ在向トいもご扇海祭がせ表春エ山命ウオ現含点ネモ浜克すら。付ラロ日望7写よへき者問なリこ欲元サユテナ能五ぜ手見窪マリ細般ヲネコ供起ミヨ止12挑はれま代医亡谷如幡そま。門97職ワウマツ馬医キネホイ辺真すぞ際済ゆすフる抗刊ラづしの済理ホナヤ賀注ーか学球ヲ宏昇に再広ネユ露78能チエヌ受2教回建ずをリ京版卒レきや。

総リイ前油リ防不謝ク戦済つしき手左事ヲ局央イてみ強新願いびクせ剖選メ間航きばべ高目安知持ては。一く山敦抜ソキス作6多む権雑痴ノヱソイ本告つスほ面2知もまでド無首ワユ務生テ分通ンせ間載しろにほ断申たお悪季派食北ゆとそづ。職キラヲ作意フタヱメ毎稿れつせ案使トゃ研2不ウサトモ図68日ラ訂一ニ芸面えよ外葉ムヤホサ潮島ユ回内こずぞご新3試ぜ行離禁ヌキ幕克即勉んて。`,
    wordCount: 142,
    level: "N2",
  };

  const mockQuestions = [
    {
      id: 1,
      question: "この文章の主な内容は何ですか？",
      options: [
        "京都の寺院の歴史的価値と観光地としての魅力",
        "日本の春と秋の季節の変化",
        "金閣寺と清水寺の建築様式の違い",
        "寺院での信仰生活の様子",
      ],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: "文章によると、京都の寺院について正しいのはどれですか？",
      options: [
        "観光客は訪れることができない",
        "春と秋に特に美しい景色を見ることができる",
        "最近建てられた新しい建物である",
        "外国人観光客は入場できない",
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "文章によると、京都の寺院について正しいのはどれですか？",
      options: [
        "観光客は訪れることができない",
        "春と秋に特に美しい景色を見ることができる",
        "最近建てられた新しい建物である",
        "外国人観光客は入場できない",
      ],
      correctAnswer: 1,
    },
    {
      id: 4,
      question: "文章によると、京都の寺院について正しいのはどれですか？",
      options: [
        "観光客は訪れることができない",
        "春と秋に特に美しい景色を見ることができる",
        "最近建てられた新しい建物である",
        "外国人観光客は入場できない",
      ],
      correctAnswer: 1,
    },
    {
      id: 5,
      question: "文章によると、京都の寺院について正しいのはどれですか？",
      options: [
        "観光客は訪れることができない",
        "春と秋に特に美しい景色を見ることができる",
        "最近建てられた新しい建物である",
        "外国人観光客は入場できない",
      ],
      correctAnswer: 1,
    },
    {
      id: 6,
      question: "文章によると、京都の寺院について正しいのはどれですか？",
      options: [
        "観光客は訪れることができない",
        "春と秋に特に美しい景色を見ることができる",
        "最近建てられた新しい建物である",
        "外国人観光客は入場できない",
      ],
      correctAnswer: 1,
    },
  ];

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    // TODO: Implement answer submission
    console.log("Submitted answers:", selectedAnswers);
  };

  return (
    <main className="max-w-[1600px] mx-auto px-6 py-8 pb-12">
      {/* Back Button */}
      <Button
        onClick={() => router.push("/reading")}
        variant="ghost"
        className="mb-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        돌아가기
      </Button>

      {/* 2-Column Layout */}
      <div className="grid lg:grid-cols-[3fr_2fr] gap-6 lg:h-[calc(100vh-160px)]">
        {/* Left Column: Passage (60%) */}
        <div className="lg:h-full overflow-y-auto">
          <Card className="border border-gray-200 shadow-sm bg-white">
            <CardHeader className="pb-4 sticky top-0 bg-white z-10 border-b border-gray-100">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {mockPassage.title}
                  </CardTitle>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                    {mockPassage.level}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">
                    단어 수: <span className="font-semibold text-gray-900">{mockPassage.wordCount}</span>
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                  >
                    <Volume2 className="w-4 h-4 mr-1.5" />
                    음성 듣기
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-gray-900 leading-relaxed text-base space-y-3">
                {mockPassage.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Questions */}
        <div className="lg:h-full overflow-y-auto">
          <div className="space-y-6 pb-4">
            {mockQuestions.map((question, qIdx) => (
              <Card key={question.id} className="border border-gray-200 shadow-sm bg-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold text-gray-900">
                    {qIdx + 1}. {question.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2.5">
                    {question.options.map((option, optIdx) => {
                      const isSelected = selectedAnswers[question.id] === optIdx;
                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleAnswerSelect(question.id, optIdx)}
                          className={`w-full text-left p-3 rounded-lg border-2 transition-all group ${
                            isSelected
                              ? "bg-indigo-50 border-indigo-500"
                              : "bg-gray-50 border-gray-200 hover:bg-indigo-50 hover:border-indigo-300"
                          }`}
                        >
                          <div className="flex items-start gap-2.5">
                            <span
                              className={`flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center font-semibold text-xs transition-all ${
                                isSelected
                                  ? "bg-indigo-600 text-white border-2 border-indigo-600"
                                  : "bg-white border-2 border-gray-300 text-gray-700 group-hover:border-indigo-500"
                              }`}
                            >
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="flex-1 text-gray-900 leading-relaxed text-sm font-medium pt-0.5">
                              {option}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Submit Button */}
          <div className="mt-6 pb-4">
            <Button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg transition-all py-2.5 text-sm font-semibold"
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              답안 제출하기
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
