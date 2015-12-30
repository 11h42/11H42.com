import * as assert from 'assert';
import * as Projects from '../app/projects/projects';

(function () {
    'use strict';

    describe('projects', function () {
        it('should be alive', function () {
            var isAlive = Projects.breath();
            assert.isTrue(isAlive);
        });
    });
}());