module.exports = async function (context, req) {
  const date = "2023-01-31T17:08:44.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

