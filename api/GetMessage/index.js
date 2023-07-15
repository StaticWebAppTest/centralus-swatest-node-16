module.exports = async function (context, req) {
  const date = "2023-07-15T03:25:19.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

