(function(){
    addBarButton('puppet_manager', 'PUPPETS', 'fas fa-address-book', openPuppetList());
})();

function addBarButton(id, name, iclass, cb){
    var button = $('<div class="bel" id="' + id + '">' + '</div>')
    button.append('<a class="bellink" style="cursor:pointer"><i class="' + iclass + '" style="padding:4px"></i>' + name + '</a>')
    $('#loginswitcher').before(button);
    $('#' + id).on("click", cb);
}

function openPuppetList(){
    alert('yeet')
}