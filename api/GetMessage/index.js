module.exports = async function (context, req) {
  const date = "2023-11-20T22:08:59.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

