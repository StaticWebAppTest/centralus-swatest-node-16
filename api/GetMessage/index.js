module.exports = async function (context, req) {
  const date = "2023-01-07T00:48:17.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

