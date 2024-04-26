module.exports = async function (context, req) {
  const date = "2024-04-26T03:11:21.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

