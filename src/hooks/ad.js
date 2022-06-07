

  const handleCaptureClick = useCallback(async () => {
    const canvas = await html2canvas(document.getElementById('canvas'))
    const dataURL = canvas.toDataURL('image/png')
    downloadjs(dataURL, 'mySpotifyColor.png', 'image/png')
  }, [])





document.getElementById("download").addEventListener("click", function() {
    
    let window_width = window.innerWidth
    if (window_width >= 1024){
        html2canvas(document.getElementById('canvas'),{logging: true, letterRendering: 1, allowTaint: true, useCORS: true, backgroundColor: 'black', height: 792}).then(function(canvas) {
            saveAs(canvas.toDataURL(), 'file-name.png');
        })
    } else{
        html2canvas(document.getElementById('canvas'),{logging: true, letterRendering: 1, allowTaint: true, useCORS: true, backgroundColor: 'black', height: 1000}).then(function(canvas) {
        saveAs(canvas.toDataURL(), 'file-name.png')
        })
    }
})