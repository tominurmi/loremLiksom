export default function () {
	figma.ui.onmessage = async (msg) => {
		if (msg.type === 'replace-text') {
		  const selection = figma.currentPage.selection;
		  if (selection.length === 1 && selection[0].type === 'TEXT') {
			const textNode = selection[0] as TextNode;
	  
			try {
				// Load all fonts used in the text node
				const fontNames = textNode.getRangeAllFontNames(0, textNode.characters.length);
				for (const font of fontNames) {
				  await figma.loadFontAsync(font);
				}
		
				// Update the text content
				textNode.characters = msg.text;
				//figma.notify('Text replaced successfully!');
			  } catch (error) {
				// Type guard to check if error has a message property
				if (error instanceof Error) {
				  figma.notify('Failed to load font: ' + error.message);
				} else {
				  figma.notify('Failed to load font: An unknown error occurred.');
				}
			  }
			} else {
			  figma.notify('Velg et tekstfelt i ditt design som du ønsker å erstatte med Lorem Liksom.');
			  figma.ui.postMessage({ type: 'no-text-selected' });	
			}
		  }
	}

	figma.showUI(__html__, { width: 261, height: 470, themeColors: false });
}
