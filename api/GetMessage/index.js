module.exports = async function (context, req) {
  const date = "2023-01-14T00:48:05.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

