module.exports = async function (context, req) {
  const date = "2023-06-08T20:08:44.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

