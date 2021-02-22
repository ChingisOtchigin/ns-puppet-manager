(function(){
    addBarButton('puppet_manager', 'PUPPETS', 'fas fa-address-book', openPuppetList);
})();

function addBarButton(id, name, iclass, cb){
    var button = $(`<div class="bel" id="${id}"></div>`);
    button.append(`<a class="bellink" style="cursor:pointer"><i class="${iclass}" style="padding:4px"></i>${name}</a>`);
    $('#loginswitcher').before(button);
    $(`#${id}`).on('click', cb);
}

function openPuppetList(){
    test_puppets = [
        {'name' : 'test folder', 
            'puppets' : [
                {'name': 'test1'},
                {'name': 'test2'}
            ]
        },
        {'name' : 'test folder 2', 
            'puppets' : [
                {'name': 'test1'},
                {'name': 'test2'}
            ]
        }
    ];

    if($('#puppet_popup_outer').length !== 0){
        $('#puppet_popup_outer').css('display', 'block');
        return;
    }
    popup_outer = $('<div class="puppet-popup puppet-popup-outer" id="puppet_popup_outer"></div>');
    popup_inner = $('<div class="puppet-popup puppet-popup-inner" id="puppet_popup_inner"></div>');
    popup_outer.on('click', function(){
        $('#puppet_popup_outer').css('display', 'none');
    });
    popup_inner.on('click', function(e){
        e.stopPropagation();
    });
    popup_outer.append(popup_inner);

    test_puppets.forEach(function(curr_folder){
        var folder_div = $(`<div class="puppet-tab tab-folder-outer" id="${curr_folder.name.toLowerCase().replace(/ /g, '_')}_folder_outer"></div>`);
        folder_div.append(`<div class="puppet-tab tab-folder-inner" id="${curr_folder.name.toLowerCase().replace(/ /g, '_')}_folder_inner">${curr_folder.name}</div>`)
        curr_folder.puppets.forEach(function(curr_puppet){
            folder_div.append(`<div class="puppet-tab tab-puppet" id="${curr_puppet.name.toLowerCase().replace(/ /g, '_')}_puppet">${curr_puppet.name}</div>`)
        });
        popup_inner.append(folder_div);
    });

    $('body').append(popup_outer);
}