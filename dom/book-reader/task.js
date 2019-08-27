const font = document.querySelectorAll('.font-size');

for (let size of Array.from(font)) {

    function active(query, activeClass) {
        if (query.classList.contains(activeClass)) {
            query.classList.toggle(activeClass);
        }
    }

    function sizeDelete(closestClass, activeClass) {
        if (size.closest(closestClass)) {
            size.closest(closestClass).classList.remove(activeClass)
        }
    }

    function sizeAdd(query, closestClass) {
        if (query.classList.contains('font-size_small')) {
            sizeDelete(closestClass, activeClass = 'book_fs-big');
            size.closest(closestClass).classList.add('book_fs-small');
        }
        else if (query.classList.contains('font-size_big')) {
                sizeDelete(closestClass, activeClass = 'book_fs-small');
                size.closest(closestClass).classList.add('book_fs-big');
        }
        else {
            sizeDelete(closestClass, activeClass = 'book_fs-small');
            sizeDelete(closestClass, activeClass = 'book_fs-big');
        }
    }

    size.onclick = function() {
       for  (let size of Array.from(font)) {
            active(size, activeClass = 'font-size_active')
        }

        size.classList.toggle('font-size_active');
        sizeAdd(size, closestClass = '.book');
        return false;
    }
}
