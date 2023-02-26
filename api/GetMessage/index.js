module.exports = async function (context, req) {
  const date = "2023-02-26T10:09:49.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

