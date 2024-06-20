module.exports = async function (context, req) {
  const date = "2024-06-20T03:11:13.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

