module.exports = async function (context, req) {
  const date = "2023-01-01T02:25:17.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

