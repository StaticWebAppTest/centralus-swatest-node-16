module.exports = async function (context, req) {
  const date = "2024-05-07T07:15:04.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

