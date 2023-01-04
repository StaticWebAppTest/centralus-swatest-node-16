module.exports = async function (context, req) {
  const date = "2023-01-04T10:10:55.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

