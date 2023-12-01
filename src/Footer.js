
// Footer Page
function Footer({number}) {
    return (
        <footer>
           <h3
           style={{textAlign: 'center'}}>
            {number}List {number > 1 ? 'Items': 'item'} 
           </h3>
        </footer>
    )
}

export default Footer;