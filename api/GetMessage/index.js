module.exports = async function (context, req) {
  const date = "2024-01-06T03:09:43.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

