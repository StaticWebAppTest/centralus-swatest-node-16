module.exports = async function (context, req) {
  const date = "2023-04-17T21:07:59.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

