module.exports = async function (context, req) {
  const date = "2023-07-30T00:50:55.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

