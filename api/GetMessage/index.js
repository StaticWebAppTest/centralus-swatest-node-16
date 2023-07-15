module.exports = async function (context, req) {
  const date = "2023-07-15T12:17:20.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

