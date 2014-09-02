'use strict';

var fileIncludePlugin = require('../'),
  fs = require('fs'),
  gutil = require('gulp-util'),
  should = require('should');

describe('## gulp-file-include', function() {
  var result = fs.readFileSync('test/fixtures/result.html').toString();

  describe('# default', function() {
    it('file', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-01.html',
        contents: fs.readFileSync('test/fixtures/index-01.html')
      });

      var stream = fileIncludePlugin();
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(result);
        done();
      });

      stream.write(file);
      stream.end();
    });

    it('stream', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-01.html',
        contents: fs.createReadStream('test/fixtures/index-01.html')
      });

      var stream = fileIncludePlugin();
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(result);
        done();
      });

      stream.write(file);
      stream.end();
    });
  });

  describe('# options - basepath', function() {
    it('file - basepath: @file', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-01.html',
        contents: fs.readFileSync('test/fixtures/index-01.html')
      });

      var stream = fileIncludePlugin({
        basepath: '@file'
      });
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(result);
        done();
      });

      stream.write(file);
      stream.end();
    });

    it('stream - basepath: @file', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-01.html',
        contents: fs.createReadStream('test/fixtures/index-01.html')
      });

      var stream = fileIncludePlugin({
        basepath: '@file'
      });
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(result);
        done();
      });

      stream.write(file);
      stream.end();
    });

    it('file - basepath: @root', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-03.html',
        contents: fs.readFileSync('test/fixtures/index-03.html')
      });

      var stream = fileIncludePlugin({
        basepath: '@root'
      });
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(result);
        done();
      });

      stream.write(file);
      stream.end();
    });

    it('stream - basepath: @root', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-03.html',
        contents: fs.createReadStream('test/fixtures/index-03.html')
      });

      var stream = fileIncludePlugin({
        basepath: '@root'
      });
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(result);
        done();
      });

      stream.write(file);
      stream.end();
    });

    it('file - basepath: dir', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-02.html',
        contents: fs.readFileSync('test/fixtures/index-02.html')
      });

      var stream = fileIncludePlugin({
        basepath: __dirname
      });
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(result);
        done();
      });

      stream.write(file);
      stream.end();
    });

    it('stream - basepath: dir', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-02.html',
        contents: fs.createReadStream('test/fixtures/index-02.html')
      });

      var stream = fileIncludePlugin({
        basepath: __dirname
      });
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(result);
        done();
      });

      stream.write(file);
      stream.end();
    });
  });

  describe('# options - prefix, basepath', function() {
    it('file - basepath: @file', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-01.html',
        contents: fs.readFileSync('test/fixtures/index-01.html')
      });

      var stream = fileIncludePlugin({
        prefix: '@@',
        basepath: '@file'
      });
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(result);
        done();
      });

      stream.write(file);
      stream.end();
    });

    it('stream - basepath: @file', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-01.html',
        contents: fs.createReadStream('test/fixtures/index-01.html')
      });

      var stream = fileIncludePlugin({
        prefix: '@@',
        basepath: '@file'
      });
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(result);
        done();
      });

      stream.write(file);
      stream.end();
    });

    it('file - basepath: @root', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-03.html',
        contents: fs.readFileSync('test/fixtures/index-03.html')
      });

      var stream = fileIncludePlugin({
        prefix: '@@',
        basepath: '@root'
      });
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(result);
        done();
      });

      stream.write(file);
      stream.end();
    });

    it('stream - basepath: @root', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-03.html',
        contents: fs.createReadStream('test/fixtures/index-03.html')
      });

      var stream = fileIncludePlugin({
        prefix: '@@',
        basepath: '@root'
      });
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(result);
        done();
      });

      stream.write(file);
      stream.end();
    });

    it('file - basepath: dir', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-02.html',
        contents: fs.readFileSync('test/fixtures/index-02.html')
      });

      var stream = fileIncludePlugin({
        prefix: '@@',
        basepath: __dirname
      });
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(result);
        done();
      });

      stream.write(file);
      stream.end();
    });

    it('stream - basepath: dir', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-02.html',
        contents: fs.createReadStream('test/fixtures/index-02.html')
      });

      var stream = fileIncludePlugin({
        prefix: '@@',
        basepath: __dirname
      });
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(result);
        done();
      });

      stream.write(file);
      stream.end();
    });
  });

  describe('# edge cases', function() {
    it('should escape included content to avoid recursive includes', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/index-04.html',
        contents: fs.createReadStream('test/fixtures/index-04.html')
      });
      var expected = fs.readFileSync('test/fixtures/result-02.html').toString();

      var stream = fileIncludePlugin();
      stream.on('data', function(newFile) {
        should.exist(newFile);
        should.exist(newFile.contents);

        String(newFile.contents).should.equal(expected);
        done();
      });

      stream.write(file);
      stream.end();
    });

    it('should skip commented includes', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/commentedInclusion.html',
        contents: fs.createReadStream('test/fixtures/commentedInclusion.html')
      });
      var expected = fs.readFileSync('test/fixtures/commentedInclusionResult.html')
                       .toString()
                       .replace(/\s/g, "");

      var stream = fileIncludePlugin();

      stream.on('data', function(newFile) {
        var inputString = String(newFile.contents).replace(/\s/g, "");

        inputString.should.equal(expected);
        done();
      });

      stream.write(file);
      stream.end();
    });

    it('should give an error on recursive includes', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/recursion.html',
        contents: fs.createReadStream('test/fixtures/recursion.html')
      });

      var stream = fileIncludePlugin();

      stream.on('error', function(err) {
        should.exist(err);
        done();
      });

      stream.write(file);
      stream.end();
    });

    it('should give an error on circular recursive includes', function(done) {
      var file = new gutil.File({
        path: 'test/fixtures/A.html',
        contents: fs.createReadStream('test/fixtures/A.html')
      });

      var stream = fileIncludePlugin();

      stream.on('error', function(err) {
        should.exist(err);
        done();
      });

      stream.write(file);
      stream.end();
    });
  });
});
