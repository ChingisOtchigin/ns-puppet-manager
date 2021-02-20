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
    $('body').append(popup_outer);
}