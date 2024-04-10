module.exports = async function (context, req) {
  const date = "2024-04-10T21:08:58.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

