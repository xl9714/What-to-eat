class home {
    constructor() {
        this.leftSide();
        this.rightSide();
    }

    leftSide() {
        <div class="column left">
            <div class="logo">
                <img src="./images/logo.png" alt="logo"/>
            </div>
            <div class="slogan">
                Food is symbolic of love when worlds are inadequate.
            </div>
            <div class="login">
                Login / Register
            </div>
        </div>
    } 

    rightSide() {
        <div class="column right">
            <div class="select_list">
                <div class="selection"><a href="recipes.html">Recipes</a></div>
                <div class="selection"><a href="menu.html">Menu</a></div>
                <div class="selection"><a href="fridge.html">Fridge</a></div>
                <div class="selection"><a href="shoppingList.html">Shopping List</a></div>
            </div>
        </div>
    }
}