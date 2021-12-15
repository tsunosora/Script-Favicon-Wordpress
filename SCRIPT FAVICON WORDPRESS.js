<script>
var darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
handleDarkmode(darkModeMediaQuery);
function handleDarkmode(e){
    var link = document.createElement('link');
    var darkModeOn = e.matches; // true if dark mode is enabled
    // replace icons with dark/light themes as appropriate
    if(darkModeOn){    
        var color = 'white';
    }else{
        var color = 'red';
    }
    var link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/wp-content/uploads/2021/09/logo-fav-kontraktorpameranjogja-color' + color + '.svg';
    document.getElementsByTagName('head')[0].appendChild(link);
    var link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/wp-content/uploads/2021/09/logo-fav-kontraktorpameranjogja-color' + color + '.svg';
    document.getElementsByTagName('head')[0].appendChild(link);
    var link = document.createElement('link');
    link.rel = 'apple-touch-icon';
    link.href = '/wp-content/uploads/2021/09/logo-fav-kontraktorpameranjogja-color' + color + '.svg';
    document.getElementsByTagName('head')[0].appendChild(link);
    
}
darkModeMediaQuery.addListener(handleDarkmode);
</script>



// https://kontraktorpameranjogja.com/wp-content/uploads/2021/09/logo-fav-kontraktorpameranjogja-color-red.svg
// https://kontraktorpameranjogja.com/wp-content/uploads/2021/09/logo-fav-kontraktorpameranjogja-color-white.svg


