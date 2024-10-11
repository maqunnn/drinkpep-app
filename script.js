// ドリンクデータの定義
const drinks = [
    {
        name: '紅茶カクテル',
        ingredients: [
            '紅茶ウォッカ 30ml',
            'FGFJ 45ml',
            'トニックウォーター 適量',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            '紅茶ウォッカを30ml注ぐ。',
            'FGFJを45ml注ぐ。',
            'トニックウォーターを適量加える。',
            '軽くステアして提供する。'
        ]
    },
    {
        name: '梨カクテル',
        ingredients: [
            'レモンカット 1枚',
            '梨リキュール 45ml',
            'ジンジャーシロップ 30ml',
            'ガムシロップ 15ml',
            'ソーダ 適量',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            '梨リキュールを45ml注ぐ。',
            'ジンジャーシロップを30ml加える。',
            'ガムシロップを15ml加える。',
            'ソーダを適量注ぐ。',
            'レモンカットを添えて提供する。'
        ]
    },
    {
        name: 'レモンカクテル',
        ingredients: [
            'レモンカット 1枚',
            'レモンリキュール 30ml',
            'ソーダ 90ml',
            'トニックウォーター 90ml',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            'レモンリキュールを30ml注ぐ。',
            'ソーダを90ml加える。',
            'トニックウォーターを90ml加える。',
            'レモンカットを添えて提供する。'
        ]
    },
    {
        name: 'チャイナブルー',
        ingredients: [
            'ライチリキュール 40ml',
            'グレープフルーツジュース 60ml',
            'トニックウォーター 適量',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            'ライチリキュールを40ml注ぐ。',
            'グレープフルーツジュースを60ml加える。',
            'トニックウォーターを適量注ぐ。',
            '軽くステアして提供する。'
        ]
    },
    {
        name: 'Sジントニック',
        ingredients: [
            'ライムカット 1枚',
            'スパイシージン 30ml',
            'トニックウォーター 適量',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            'スパイシージンを30ml注ぐ。',
            'トニックウォーターを適量注ぐ。',
            'ライムカットを添えて提供する。'
        ]
    },
    {
        name: 'カシスみかん',
        ingredients: [
            'カシスリキュール 30ml',
            'みかんジュース 適量',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            'カシスリキュールを30ml注ぐ。',
            'みかんジュースを適量注ぐ。',
            '軽くステアして提供する。'
        ]
    },
    {
        name: 'ピーチクランベリー',
        ingredients: [
            'レモンカット 1枚',
            'ピーチリキュール 30ml',
            'クランベリージュース 適量',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            'ピーチリキュールを30ml注ぐ。',
            'クランベリージュースを適量注ぐ。',
            'レモンカットを添えて提供する。'
        ]
    },
    {
        name: 'スプモーニ',
        ingredients: [
            'レモンカット 1枚',
            'カンパリ 30ml',
            'グレープフルーツジュース 60ml',
            'トニックウォーター 適量',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            'カンパリを30ml注ぐ。',
            'グレープフルーツジュースを60ml加える。',
            'トニックウォーターを適量注ぐ。',
            'レモンカットを添えて提供する。'
        ]
    },
    {
        name: 'アマレットジンジャー',
        ingredients: [
            'レモンカット 1枚',
            'アマレット 30ml',
            'ジンジャーシロップ 30ml',
            'ソーダ 適量',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            'アマレットを30ml注ぐ。',
            'ジンジャーシロップを30ml加える。',
            'ソーダを適量注ぐ。',
            'レモンカットを添えて提供する。'
        ]
    },
    {
        name: 'ハイボール',
        ingredients: [
            'レモンカット 1枚',
            'ウイスキー 30ml',
            'ソーダ 適量',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            'ウイスキーを30ml注ぐ。',
            'ソーダを適量注ぐ。',
            'レモンカットを添えて提供する。'
        ]
    },
    {
        name: 'ジンジャーハイボール',
        ingredients: [
            'レモンカット 1枚',
            'ジンジャーシロップ 30ml',
            'ウイスキー 30ml',
            'ソーダ 適量',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            'ウイスキーを30ml注ぐ。',
            'ジンジャーシロップを30ml加える。',
            'ソーダを適量注ぐ。',
            'レモンカットを添えて提供する。'
        ]
    },
    {
        name: 'いちごのハイボール',
        ingredients: [
            'ストロベリーダイス 小さじ1杯',
            'いちごリキュール 40ml',
            'ソーダ 適量',
            '氷 適量'
        ],
        steps: [
            'グラスにストロベリーダイスを入れる。',
            '氷を加える。',
            'いちごリキュールを40ml注ぐ。',
            'ソーダを適量注ぐ。',
            '軽くステアして提供する。'
        ]
    },
    {
        name: 'レモンサワー',
        ingredients: [
            'レモンカット 1枚',
            'レモンサワーの素 45ml',
            'ソーダ 適量',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            'レモンサワーの素を45ml注ぐ。',
            'ソーダを適量注ぐ。',
            'レモンカットを添えて提供する。'
        ]
    },
    {
        name: 'ウーロンハイ',
        ingredients: [
            '焼酎 45ml',
            'ウーロン茶 適量',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            '焼酎を45ml注ぐ。',
            'ウーロン茶を適量注ぐ。',
            '軽くステアして提供する。'
        ]
    },
    {
        name: '抹茶割り',
        ingredients: [
            '焼酎 45ml',
            '抹茶リキュール 適量',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            '焼酎を45ml注ぐ。',
            '抹茶リキュールを適量注ぐ。',
            '軽くステアして提供する。'
        ]
    },
    {
        name: 'アップルジンジャー',
        ingredients: [
            'シードル 45ml',
            'ジンジャーシロップ 30ml',
            'ソーダ 適量',
            'アップルダイス 適量',
            '氷 適量'
        ],
        steps: [
            'グラスにアップルダイスと氷を入れる。',
            'シードルを45ml注ぐ。',
            'ジンジャーシロップを30ml加える。',
            'ソーダを適量注ぐ。',
            '軽くステアして提供する。'
        ]
    },
    {
        name: 'クランベリーモネ',
        ingredients: [
            'レモネード 30ml',
            'クランベリージュース 適量',
            'レモンスライス 1枚',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            'レモネードを30ml注ぐ。',
            'クランベリージュースを適量注ぐ。',
            'レモンスライスを添えて提供する。'
        ]
    },
    {
        name: 'トロピカルココ',
        ingredients: [
            'ライムカット 1枚',
            'ココナッツシロップ 30ml',
            'マンゴージュース 30ml',
            'パインジュース 適量',
            '氷 適量'
        ],
        steps: [
            'グラスに氷を入れる。',
            'ココナッツシロップを30ml注ぐ。',
            'マンゴージュースを30ml加える。',
            'パインジュースを適量注ぐ。',
            'ライムカットを添えて提供する。'
        ]
    }
];

// 以下、既存のコード（変更なし）

// 要素の取得
const drinkListDiv = document.getElementById('drink-list');
const recipeDiv = document.getElementById('recipe');
const drinkNameH2 = document.getElementById('drink-name');
const ingredientsUl = document.getElementById('ingredients');
const stepsOl = document.getElementById('steps');
const backButton = document.getElementById('back-button');
const searchBar = document.getElementById('search-bar');
const quizButton = document.getElementById('quiz-button');
const quizDiv = document.getElementById('quiz');
const quizQuestionP = document.getElementById('quiz-question');
const quizAnswerInput = document.getElementById('quiz-answer');
const submitAnswerButton = document.getElementById('submit-answer');
const quizResultP = document.getElementById('quiz-result');
const quizBackButton = document.getElementById('quiz-back-button');

let currentDrinkIndex = null;

// ドリンクのリストを表示する関数
function displayDrinkList(drinkArray) {
    drinkListDiv.innerHTML = '';
    drinkArray.forEach((drink, index) => {
        const drinkItemDiv = document.createElement('div');
        drinkItemDiv.className = 'drink-item';
        drinkItemDiv.textContent = drink.name;
        drinkItemDiv.addEventListener('click', () => showRecipe(index));
        drinkListDiv.appendChild(drinkItemDiv);
    });
}

// 初期表示
displayDrinkList(drinks);

// レシピを表示する関数
function showRecipe(index) {
    currentDrinkIndex = index;
    const drink = drinks[index];
    drinkNameH2.textContent = drink.name;

    // 材料のリストを表示
    ingredientsUl.innerHTML = '';
    drink.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsUl.appendChild(li);
    });

    // 作成手順を表示
    stepsOl.innerHTML = '';
    drink.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsOl.appendChild(li);
    });

    // 表示の切り替え
    drinkListDiv.style.display = 'none';
    recipeDiv.style.display = 'block';
    quizDiv.style.display = 'none';
}

// 戻るボタンの処理
backButton.addEventListener('click', () => {
    recipeDiv.style.display = 'none';
    drinkListDiv.style.display = 'flex';
    searchBar.style.display = 'block';
});

// 検索機能の処理
searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const filteredDrinks = drinks.filter(drink => {
        return (
            drink.name.toLowerCase().includes(query) ||
            drink.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
        );
    });
    displayDrinkList(filteredDrinks);
});

// クイズモードへの切り替え
quizButton.addEventListener('click', () => {
    recipeDiv.style.display = 'none';
    quizDiv.style.display = 'block';
    startQuiz();
});

// クイズを開始する関数
function startQuiz() {
    quizResultP.textContent = '';
    quizAnswerInput.value = '';
    const drink = drinks[currentDrinkIndex];
    quizQuestionP.textContent = `${drink.name}の最初の手順は何ですか？`;
}

// クイズの回答を確認する処理
submitAnswerButton.addEventListener('click', () => {
    const userAnswer = quizAnswerInput.value.trim();
    const drink = drinks[currentDrinkIndex];
    const correctAnswer = drink.steps[0];
    if (userAnswer === correctAnswer) {
        quizResultP.textContent = '正解です！';
        quizResultP.style.color = 'green';
    } else {
        quizResultP.textContent = `不正解です。正しい答え：${correctAnswer}`;
        quizResultP.style.color = 'red';
    }
});

// クイズモードから戻るボタンの処理
quizBackButton.addEventListener('click', () => {
    quizDiv.style.display = 'none';
    recipeDiv.style.display = 'block';
});
