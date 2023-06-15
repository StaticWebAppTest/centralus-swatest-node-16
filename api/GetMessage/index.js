module.exports = async function (context, req) {
  const date = "2023-06-15T20:08:59.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

