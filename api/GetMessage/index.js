module.exports = async function (context, req) {
  const date = "2023-01-21T17:07:44.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

