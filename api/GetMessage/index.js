module.exports = async function (context, req) {
  const date = "2023-06-09T15:08:34.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

