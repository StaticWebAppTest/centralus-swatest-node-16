module.exports = async function (context, req) {
  const date = "2023-01-21T12:15:58.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

