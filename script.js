const container = document.querySelector(".container");
let firstImage = "";
let secondImage = "";
let thirdImage = "";

const cards = [
    {
        row:1,
        images:[
            {
                name:"cherry",
                image:'./img/cherry.png'
            },
            {
                name:"melon",
                image:'./img/melon.png',
            },
            {
                name:"strawberry",
                image:'./img/strawberry.png',
            },
        ]
    },
    {
        row:2,
        images:[      
            {
                name:"melon",
                image:'./img/melon.png',
            },
            {
                name:"cherry",
                image:'./img/cherry.png'
            },
            {
                name:"strawberry",
                image:'./img/strawberry.png',
            },
        ]
    },
    {
        row:3,
        images:[
            {
                name:"strawberry",
                image:'./img/strawberry.png',
            },
            {
                name:"cherry",
                image:'./img/cherry.png'
            },
            {
                name:"melon",
                image:'./img/melon.png',
            },
        ]
    }
]

const handleVerify = () => {
    if(firstImage.alt !== secondImage.alt || secondImage.alt !== thirdImage.alt || firstImage.alt !== thirdImage.alt){
        setTimeout(()=>{
            firstImage.style.visibility = 'hidden'; 
            secondImage.style.visibility = 'hidden';
            thirdImage.style.visibility = 'hidden';
             firstImage = "";
             secondImage = "";
             thirdImage = "";
        },500)
    }else{
        firstImage = "";
        secondImage = "";
        thirdImage = "";
    }
}


cards.forEach((card) => {
    let row = document.createElement("div");
    row.classList.add(`row${card.row}`);

    card?.images.forEach((image, index) => {
        let imageRow = document.createElement("div");
        imageRow.classList.add(`row${card.row}-col-${index+1}`)
        imageRow.classList.add("col")

        let currentImage = document.createElement("img");
        currentImage.src=image.image;
        currentImage.alt=image.name;

        imageRow.addEventListener("click", ()=>{
            if(firstImage === "" && currentImage.style.visibility !== "visible"){
                firstImage = currentImage;
                currentImage.style.visibility="visible";
            }else if(secondImage === "" && currentImage.style.visibility !== "visible"){
                secondImage = currentImage;
                currentImage.style.visibility="visible";
            }else if(thirdImage === "" && currentImage.style.visibility !== "visible"){
                thirdImage = currentImage;
                currentImage.style.visibility="visible";
                handleVerify();
            }
               
        })
        
        imageRow.appendChild(currentImage)
        row.appendChild(imageRow);
    })
    container.appendChild(row)
})



