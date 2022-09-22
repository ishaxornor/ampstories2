fetch("products.json")
.then(function(response){
    return response.json();
})

.then(function(products){
    let placeholder = document.querySelector("#data-output");

    let out = "";

    for(let product of products){
        out += `
            <tr>
                <td><img src ='${product.image}'></td>
            </tr>
        `;
    }

    placeholder.innerHTML = out;
})