module.exports = async function (context, req) {
  const date = "2024-06-21T01:55:13.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

