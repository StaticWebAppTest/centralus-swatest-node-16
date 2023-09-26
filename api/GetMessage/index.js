module.exports = async function (context, req) {
  const date = "2023-09-26T15:09:13.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

