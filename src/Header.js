
// Header Page
function Header( {title} ) {
    // Apply Some Styles
    const myStyle = {
    color: '#fff', 
    backgroundColor: '#000',
    textAlign: 'center',
    }



    return (
        <header style={myStyle}>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    // The default title will be used if there is no title passed.
    title: "Default Title" 
}

export default Header;

