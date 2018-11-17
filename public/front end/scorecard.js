$(document).ready(function(){
    $('#btn1').on('click',AddScore);
});

function AddScore()
{
    var jqTableBody = $('#table-column-toggle tbody');
    var sTRTemplate = '<tr>' + 
                      '    <td>{courseHole}</td>' +
                      '    <td>{holePar}</td>' +
                      '    <td>{userHandicap}</td>' +
                      '    <td>{score}</td>' +
                      '</tr>';

    var sTRAppend = sTRTemplate;

    $('div[data-role="fieldcontain"] input:text').each(function(){
        switch(this.id) {
            case 'courseHole' :  sTRAppend = sTRAppend.replace('{courseHole}', this.value); break;
            case 'holePar' :  sTRAppend = sTRAppend.replace('{holePar}', this.value); break;
            case 'userHandicap' :  sTRAppend = sTRAppend.replace('{userHandicap}', this.value); break;
            case 'score' :  sTRAppend = sTRAppend.replace('{score}', this.value); break;
        }
    })
    jqTableBody.append(sTRAppend);
}