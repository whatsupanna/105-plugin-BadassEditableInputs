Badass Editable Inputs
=======

An inputs plugin for jQuery - [VIEW DEMO]

How It Works:

Are you looking for a really cool way to get people to sign up for your newsletter? You've come to the right place. Badass Editable Inputs is a jQuery plugin that lets you add a super cool modal and input form without making it look like an input form.

### Getting started:

Start by downloading and copying the .js and .css files to your directory.

If you haven't already, link to jQuery from your HTML document. After that, link to the location of main.js and jquery.editableInputs.js into your directory.

```
<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
        
<script src='main.js'></script>
```

If you would like to use the styles in the plugin for the modal or the form, download the css file customstyles.css and load it into your html file. 

For the subtle css styles, leave the name of `subtle`. For the light grey `murderedOut` styles, change the class name of `subtle` to `murderedOut`.

Next, copy the following into your HTML document, directly below the opening `<body>` tag. Make sure to replace the contents of the div `subtle` with the sign up form information. If you would like to use a different form than the one that comes with this plugin, simply replace the content of the `subtle` div.


```
 <p>
    <a class='activate_modal' name='first_window' href='#'>Clickable Form Modal</a>
</p>

<div id='first_window' class='modal_window'>
    <div class="subtle">
    <div id="holder">
        <h4>First Name</h4>
        <span class="edit" data-thing="mouseover">Edit me</span>
    </div>

    <div id="holder">
        <h4>Last Name</h4>
        <span class="edit" data-thing="dblclick">Edit here too</span>
    </div>
</div>

<div id='mask' class='close_modal'></div> 

 ```
 
For the form options, the input can appear based on `click` , `mouseover` or `dblclick`. To change this option change the information in the `data-thing` attribute. 

```


That's all! Enjoy your new Badass editable input form. Tell all your friends.

If you would like to improve on this plugin, feel free to fork it.

[VIEW DEMO]: