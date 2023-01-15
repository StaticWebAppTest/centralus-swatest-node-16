module.exports = async function (context, req) {
  const date = "2023-01-15T17:07:57.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

