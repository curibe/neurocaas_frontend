function truncate(n, len) {
/*
    truncate text

    @params:
            n: string,
            len: int
    @return:
            truncated string
*/

    if(n.length <= len) {
        return n;
    }

    var ext = n.substring(n.length - 8, n.length);
    var filename = n.replace(ext,'');

    filename = filename.substr(0, len-11) + (n.length > len ? '...' : '');
    return filename + ext;
};


function insert(children = [], [head, ...tail], text_length) {
    /*
        Insert path into directory tree structure:

        @params:
                children: array,
                text_length: int
        @return:
                array
    */
    let child = children.find(child => child.text === head);
    if (!child) {
        var text = truncate(head, text_length);
        tail.length === 0 ?
        children.push(child = {
            text: text, children: [],
            icon: 'jstree-file',
            li_attr: {
                title: head,
                type: 'file'
            }
        }) :
        children.push(child = {
            text: head,
            children: [],
            state : { 'opened' : true },
            li_attr: {
                title: head,
                type: 'folder'
            }
        })
    }

    if (tail.length > 0) insert(child.children, tail, text_length);
    return children;
}


function get_json_from_array(arr, text_length=34){
    /*
        get JSON from files path array

        @params:
                arr: array,
                text_length: int
        @return:
                json
    */
    let objectArray = arr
        .map(path => path.split('/').slice(1))
        .reduce((children, path) => insert(children, path, text_length), []);
    return objectArray;
}


function get_full_path_of_node(node, tree){
    /*
        Get full path from jstree node.

        @params:
                node: jstree node,
                tree: jstree object,
        @return:
                string
    */
    return tree.get_path(node,"/").replace(node.text, node.li_attr.title) + "/";
}


// download Action
function down_action(node, key){
    /*
        Down file or folder

        @params:
                node: jstree node,
                key: folder or file path,
        @return:
                None
    */
    if (node.li_attr.type === 'folder')
        download_folder(key, ana_id);
    else
        download_file(key, ana_id);
}


async function download_file(file_key, ana_id){
    /*
        Down file

        @params:
                node: jstree node,
                file_key: file path,
        @return:
                None
    */
    var url = '/files/' + ana_id + '/?key=' + encodeURIComponent(file_key);
    var res = await AjaxRequest(url);

    if (res.status == 200){
        document.getElementById('_iframe').href = "/" + res.message;
        document.getElementById('_iframe').click();
    }
}


async function download_folder(folder_key, ana_id){
    /*
        Down folder

        @params:
                node: jstree node,
                folder_key: folder path,
        @return:
                None
    */

    var url = '/files/' + ana_id + '/';
    var params = {
        'key': folder_key
    }

    var res = await AjaxRequest(url, 'POST', params);

    if (res.status === 200){
        document.getElementById('_iframe').href = "/" + res.message;
        document.getElementById('_iframe').click();
    }
}


async function show_file_content(file_key, ana_id){
    /*
        Show file content in new tab when user click file of jstree

        @params:
                ana_id: analysis id,
                file_key: file path,
        @return:
                None
    */

    var url = '/files/' + ana_id + '/?key=' + encodeURIComponent(file_key);
    var res = await AjaxRequest(url);

    if (res.status == 200)
        window.open("/" + res.message, '_blank');
}



// delete Action
async function delete_action(node, key, tree){

    var url = '/files/' + ana_id + '/';
    data = {
        key: key
    };

    var res = await AjaxRequest(url, 'DELETE', data);
    tree.delete_node(node);
}