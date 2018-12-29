/* eslint-disable */
const sync = (url) => {
  return (async() => {
    var arr = [];
    for (var i = 0; i < url.length; i++){
      	await url[i].then(res => {
          arr.push(res)
        })
    }
    return arr
  })()
}

export default sync
