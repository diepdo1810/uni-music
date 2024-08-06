import ZAudio from "./zaudio.js"
import {getCache} from '../../utils/cache.js'

const audio = new ZAudio({
	continuePlay: false, //续播
	autoPlay: false, //自动播放 部分浏览器不支持
});

audio.setAudio(getCache('PLAY_LIST'))

export {
	audio
}