module.exports = async function (context, req) {
  const date = "2023-08-26T03:08:41.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

