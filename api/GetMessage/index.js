module.exports = async function (context, req) {
  const date = "2023-01-19T15:57:26.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

