const getDataForm = () => {
    const txtName = document.getElementById("txtName").value
    const txtEmail = document.getElementById("txtEmail").value
    const txtDescription = document.getElementById("txtTask").value
    const txtConditions = document.getElementById("txtConditions").checked
    const activityType = document.getElementById("activityType").value
    const taskType = document.getElementById("taskType").value
    const period = document.getElementById("semester").value
    
    // Create JSON
    const data = {
        name: txtName,
        email: txtEmail,
        description: txtDescription,
        condition: txtConditions,
        activityType,
        taskType,
        period

    }

    console.log(data)
}