module.exports = async function (context, req) {
  const date = "2023-01-09T05:08:58.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

