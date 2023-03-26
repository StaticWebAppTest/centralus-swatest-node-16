module.exports = async function (context, req) {
  const date = "2023-03-26T12:15:43.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

