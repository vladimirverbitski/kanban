export const RequiredDirective = () => ({
    restrict: 'A',
    link($scope, $elem, $attr) {

        $attr.required = (modelValue) => {
            if ($attr.isEmpty(modelValue)) {
                console.log('asdasdasd');
                return true;
            }

            return false;
        };

    }
});