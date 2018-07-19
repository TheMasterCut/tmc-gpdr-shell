jQuery( document ).ready( function( $ ){

    //  ----------------------------------------
    //  Initialize events calling with clicking.
    //  ----------------------------------------

    $( '[data-tmcGdprShell-click]' ).click( function( event ){

        var actionNames = $( this ).attr( 'data-tmcGdprShell-click' ).split( ' ' );

        $.each( actionNames, function( key, value ){
            $( document ).trigger( 'tmcGdprShell:' + value );
        } );

    } );

    //  ----------------------------------------
    //  Objects
    //  ----------------------------------------

    var tmcGdprShell = {

        'elems' :                   {
            "settingsPopupRootEl" :                 $( '.tmc_gdpr_shell_settings_popup' ),
            "basePopupRootEl" :                     $( '.tmc_gdpr_shell_base_popup' )
        },

        /**
         * Initializes close actions.
         *
         * @return void
         */
        initEvents :                function() {

            //  ----------------------------------------
            //  Open base popup
            //  ----------------------------------------

            $( document ).on( 'tmcGdprShell:openBase', function( event ) {

                tmcGdprShell.elems.basePopupRootEl.removeClass( 'isHidden' );

            } );

            //  ----------------------------------------
            //  Close base popup
            //  ----------------------------------------

            $( document ).on( 'tmcGdprShell:closeBase', function( event ) {

                tmcGdprShell.elems.basePopupRootEl.addClass( 'isHidden' );

            } );

            //  ----------------------------------------
            //  Open settings popup
            //  ----------------------------------------

            $( document ).on( 'tmcGdprShell:openSettings', function( event ) {

                tmcGdprShell.elems.settingsPopupRootEl.removeClass( 'isHidden' );
                document.body.classList.add( 'noScroll' );

            } );

            //  ----------------------------------------
            //  Close settings popup
            //  ----------------------------------------

            $( document ).on( 'tmcGdprShell:closeSettings', function( event ) {

                tmcGdprShell.elems.settingsPopupRootEl.addClass( 'isHidden' );
                document.body.classList.remove( 'noScroll' );

            } );

            //  ----------------------------------------
            //  Accept all
            //  ----------------------------------------

            $( document ).on( 'tmcGdprShell:acceptAll', function( event ) {

                console.log( 'All settings has been accepted.' );

            } );

            //  ----------------------------------------
            //  Accept choosen
            //  ----------------------------------------

            $( document ).on( 'tmcGdprShell:acceptChoosen', function( event ) {

                console.log( 'Only choosen settings has been accepted.' );

            } );

        },

        /**
         * Called after everything is ready.
         *
         * @return void
         */
        ready :                         function() {

            $( document ).trigger( 'tmcGdprShell:openBase' );

        }

    };

    tmcGdprShell.initEvents();
    tmcGdprShell.ready();

} );