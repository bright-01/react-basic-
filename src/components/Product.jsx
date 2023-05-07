import react, {useEffect, useState} from 'react';

export default function Product(){
    const [isSale, setIsSale] = useState(false);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`data/${isSale ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
                setProducts(data);
            });
        return () => {
            console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
        };
    }, [isSale]);

    const changeHandle = () => setIsSale((prev) => !prev  )

    return <div>
        <input id = "checkbox" type="checkbox" forvalue={isSale} onChange={changeHandle}/>
        <label htmlFor="checkbox">세일만 나옴</label>
        <ul>
            {products.map((product, i) => (
                <li key={product.id}>
                    <article>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </article>
                </li>
            ))}
        </ul>
    </div>;
}