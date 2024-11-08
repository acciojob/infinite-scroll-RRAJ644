document.addEventListener('DOMContentLoaded', () => {
  const infiList = document.getElementById('infi-list')

  // Function to add a specified number of items to the list
  function addItems(count) {
    const currentItemCount = infiList.getElementsByTagName('li').length
    for (let i = 1; i <= count; i++) {
      const newItem = document.createElement('li')
      newItem.textContent = `Item ${currentItemCount + i}`
      infiList.appendChild(newItem)
    }
  }

  // Initialize with 10 items
  addItems(10)

  // Event listener to detect scroll to the bottom of the list
  infiList.addEventListener('scroll', () => {
    if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
      addItems(2) // Add 2 more items
    }
  })
})
