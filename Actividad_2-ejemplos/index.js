const getDataForm = () => {
    const txtName = document.getElementById("txtName").value
    const txtEmail = document.getElementById("txtEmail").value
    const txtDescription = document.getElementById("txtDescription").value
    const txtConditions = document.getElementById("txtConditions").checked
    const activityType = document.getElementById("activityType").checked
    const taskType = document.getElementById("taskType").checked
    
    // Create JSON
    const data = {
        name: txtName,
        email: txtEmail,
        description: txtDescription,
        condition: txtConditions,
        activityType,
        taskType

    }

    console.log(txtName)
}