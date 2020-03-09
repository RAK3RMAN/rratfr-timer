/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
App/Filename : rratfr-manager/routes/entryRoutes.js
Author       : RAk3rman
\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/

module.exports = function (app) {
    let auth = require('../resolvers/authResolver.js');
    let entry = require('../resolvers/entryResolver.js');

    app.route('/api/entry/create')
        .post(auth.isLoggedIn, entry.create_entry);

    //app.route('/api/entry/details')
    //    .get(auth.isLoggedIn, entry.entry_details);

    //app.route('/api/entry/details/all')
    //    .get(auth.isLoggedIn, entry.entry_details_all);

    app.route('/api/entry/edit')
        .post(auth.isLoggedIn, entry.entry_edit);

    app.route('/api/entry/delete')
        .post(auth.isLoggedIn, entry.entry_delete);

    app.route('/api/entry/sort')
        .post(auth.isLoggedIn, entry.entry_sort);

    app.route('/api/entry/timing/update')
        .post(auth.isLoggedIn, entry.entry_timing_update);

    app.route('/api/voting/results')
        .get(entry.return_results);

    app.route('/api/voting/people\'s-choice')
        .post(entry.submit_vote)
        .get(auth.isLoggedIn, entry.return_all_votes);

    app.route('/api/voting/people\'s-choice/re-tabulate')
        .post(auth.isLoggedIn, entry.re_tabulate_votes);

    app.route('/api/voting/judges-choice/assign')
        .post(auth.isLoggedIn, entry.select_judges_choice);

    app.route('/api/voting/judges-choice/reset')
        .post(auth.isLoggedIn, entry.reset_judges_choice);

    app.route('/api/settings')
        .get(auth.isLoggedIn, entry.settings_get)
        .post(auth.isLoggedIn, entry.settings_update);
};