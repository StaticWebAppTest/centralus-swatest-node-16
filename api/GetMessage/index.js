module.exports = async function (context, req) {
  const date = "2023-01-17T17:08:37.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

