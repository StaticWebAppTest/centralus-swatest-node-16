module.exports = async function (context, req) {
  const date = "2023-03-31T16:10:29.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

