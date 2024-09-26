module.exports = async function (context, req) {
  const date = "2024-09-26T03:17:29.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

