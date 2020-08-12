exports.up = function(knex) {
    return knex.schema
        .createTable("transactions", function(table) {
            table.increments("id")
            table.timestamp("created_at").defaultTo(knex.fn.now())
            table.integer("year")
            table.integer("month")
            table.string("type")
            table.decimal("transac")

        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("transactions")
};
