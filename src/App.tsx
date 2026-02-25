import ArticleCard from "./components/ui/ArticleCard.tsx";

const articles = [
    {
        title: "Story 1",
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, libero.",
        image: "https://picsum.photos/seed/1/300/300",
    },
    {
        title: "Story 2",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam libero sequi enim?",
        image: "https://picsum.photos/seed/2/300/300",
    },
    {
        title: "Story 3",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihilexercitationem modi natus suscipit quod.",
        image: "https://picsum.photos/seed/3/300/300",
    },
    {
        title: "Story 4",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihilexercitationem modi natus suscipit quod.",
        image: "https://picsum.photos/seed/4/300/300",
    },
    {
        title: "Story 5",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihilexercitationem modi natus suscipit quod.",
        image: "https://picsum.photos/seed/5/300/300",
    },
    {
        title: "Story 6",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihilexercitationem modi natus suscipit quod.",
        image: "https://picsum.photos/seed/6/300/300",
    },
];

function App() {
    return (
        <>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-200">
                {articles.map(
                    (article) => (
                        <ArticleCard
                            key={article.title}
                            title={article.title}
                            text={article.text}
                            image={article.image}
                        />
                    ),
                )}
            </div>
        </>
    );
}

export default App;
