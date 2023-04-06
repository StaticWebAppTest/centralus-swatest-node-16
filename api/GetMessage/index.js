module.exports = async function (context, req) {
  const date = "2023-04-06T16:11:26.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

