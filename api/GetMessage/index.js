module.exports = async function (context, req) {
  const date = "2024-01-30T13:09:41.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

