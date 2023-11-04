module.exports = async function (context, req) {
  const date = "2023-11-04T22:08:21.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

