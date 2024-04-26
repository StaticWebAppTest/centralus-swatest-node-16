module.exports = async function (context, req) {
  const date = "2024-04-26T13:09:43.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

