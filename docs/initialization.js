async function init()
{
    const loadingScreen = document.querySelector('#loading-screen');
    const screen = document.querySelector('#screen');

    const showUi = (ui) => 
    {
        [loadingScreen, screen].forEach(element => element.style.display = 'none');
        if (screen === ui)
        {
          screen.style.position = 'default';
        }

        ui.style.display = 'block';
    }

    try 
    {
        showUi(loadingScreen);
        const instance = await qtLoad({
            qt: 
            {
                onLoaded: () => showUi(screen),
                onExit: exitData =>
                {
                    showUi(loadingScreen);
                },
                entryFunction: window.app_entry,
                containerElements: [screen],
            }
        });
    } 
    catch (e) 
    {
        console.error(e);
        console.error(e.stack);
    }
}