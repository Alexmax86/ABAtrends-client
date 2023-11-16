/*
      console.log("graphData function")
      const patientList:number[] = []

      const tempGraphData = {datasets:[]}      
      
              
        //Count how many patients in the data and store in patientList
        for (const element of apiData){
          !patientList.includes(element.patient_id)
          && patientList.push(element.patient_id)
        }
      
        if (patientList.length === 0){setGraphData({datasets:[]})}
        else {          
          patientList.forEach((element) =>{
            const line = {
              label: element,
              data: [],          
              tension: 0.2
            }
            apiData.forEach((apiElement) =>{
              if (apiElement.patient_id === element){
                const dataPiece = {x: apiElement.date, y: apiElement.responses}
                line.data.push(dataPiece)            
              }
            })
            
            tempGraphData.datasets.push(line)        
            console.log("Tempgraphdata:" + JSON.stringify(tempGraphData))
            setGraphData(tempGraphData)
          })
        }
        */