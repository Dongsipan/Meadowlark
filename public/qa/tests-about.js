/**
 * Created by Administrator on 12/7/2016.
 */
suite('"About" Page Tests', function(){
    test('page should contain link to contact page', function(){
        assert($('a[href="/contact"]').length);
    });
});