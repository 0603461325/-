const foodNameInput = document.getElementById('food-name');
const foodQuantityInput = document.getElementById('food-quantity');
const addFoodButton = document.getElementById('add-food');
const foodItemsList = document.getElementById('food-items');
const totalCaloriesDisplay = document.getElementById('total-calories');

let totalCalories = 0;

addFoodButton.addEventListener('click', addFoodItem);

function addFoodItem() {
    const foodName = foodNameInput.value.trim();
    const foodQuantity = parseFloat(foodQuantityInput.value);

    if (foodName === '' || isNaN(foodQuantity) || foodQuantity <= 0) {
        alert('الرجاء إدخال اسم الطعام والكمية بشكل صحيح.');
        return;
    }

    // هنا يمكنك استبدال هذه القيم ببيانات حقيقية من قاعدة بيانات أو API
    const caloriesPerGram = 1.5; // مثال: 1.5 سعرة حرارية لكل جرام

    const calories = caloriesPerGram * foodQuantity;
    totalCalories += calories;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${foodName} (${foodQuantity} جرام) - ${calories.toFixed(2)} سعرة حرارية</span>
        <button onclick="removeFoodItem(this, ${calories})">حذف</button>
    `;
    foodItemsList.appendChild(listItem);

    updateTotalCalories();
    clearInputFields();
}

function removeFoodItem(button, calories) {
    const listItem = button.parentNode;
    foodItemsList.removeChild(listItem);
    totalCalories -= calories;
    updateTotalCalories();
}

function updateTotalCalories() {
    totalCaloriesDisplay.textContent = `السعرات الحرارية الإجمالية: ${totalCalories.toFixed(2)}`;
}

function clearInputFields() {
    foodNameInput.value = '';
    foodQuantityInput.value = '';
}

