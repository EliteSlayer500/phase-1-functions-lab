function distanceFromHqInBlocks(blockNum) {
    if (blockNum < 42) {
      return 42 - blockNum
    } else {
      return  blockNum - 42
    }
}
function distanceFromHqInFeet(blockNum) {
    return distanceFromHqInBlocks(blockNum) * 264
}
function distanceTravelledInFeet(blockNum2, blocknum3){
    
}