module.exports = async function (context, req) {
  const date = "2023-07-16T21:08:14.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

