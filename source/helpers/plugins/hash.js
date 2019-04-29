import v4 from 'uuid/v4';

export const hashPlugin = (schema) => {
    schema.add({
        hash: String,
    });

    schema.pre('save', function(next) {
        this.hash = v4();
        next();
    });

    schema.path('hash').index(true);
    schema.path('hash').unique(true);
};
