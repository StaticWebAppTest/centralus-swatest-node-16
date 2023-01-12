module.exports = async function (context, req) {
  const date = "2023-01-12T20:10:48.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

