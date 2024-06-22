import styles from './MenuItem.module.css'

const MenuItem = ({item = {
    title: "Pizza",
    desc: "Very Delicious, Very Tasty",
    isAvailable: true,
    price: 249,
    img: '/images/defaultFoodIcon.jpeg'
}}) => {
  return (
    <div className={`${styles.card}`}>
        <div className={`${styles.left}`} style={{background: `url(${item.img}) no-repeat center center/cover`}}></div>
        <div className={`${styles.right}`}>
            <div className={`${styles.title}`}>{item.title}</div>
            <div className={`${styles.desc}`}>{item.desc}</div>
            <div className={`${styles.price}`}>{item.price}</div>
            <div className={`${styles.buttons}`}>
                <button className={`${styles.remove}`}></button>
                <button className={`${styles.add}`}></button>
            </div>
        </div>
    </div>
  )
}

export default MenuItem