module.exports = async function (context, req) {
  const date = "2024-04-17T06:14:34.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

