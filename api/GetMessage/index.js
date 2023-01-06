module.exports = async function (context, req) {
  const date = "2023-01-06T14:08:41.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

