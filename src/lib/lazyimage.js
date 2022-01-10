import viewportAction from '$lib/useViewportAction';

export default function lazyimage(element) {
	const viewportActionMethods = viewportAction(element);
	element.addEventListener('enterViewport', enterViewport);
	
	function enterViewport() {
		element.src = element.dataset.src;
		element.srcset = element.dataset.srcset;
		element.classList.remove('lazy');
		element.classList.add('loaded');
		element.removeEventListener('enterViewport', enterViewport);
	}
	
	return {
		destroy() {
			viewportActionMethods.destroy();
			element.removeEventListener('enterViewport', enterViewport);
		}
	}
}