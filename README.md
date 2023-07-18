# Popups


## Popup custom

In this example the content of the popup shall be implemented in the method `PopupCustom.#fillPopupContent()`.

Thus the popup can be attached to any element through the `attachPopupToElement()` method.


## Popup based on a web component

### Description
In this example the content of the popup comes from an independant web component. The `PopupContainer` class is itself a web component. The contained web component shall previously be created (either through contructor in JS or by creating the web component in HTML DOM), then the container shall be created in JS : `new PopupContainer(myWebComponent)`.

### TODO 

For the web component version, directly specify which web component the popup shall contain through HTML declaration:

    <popup-container component="my-component"></popup-container>