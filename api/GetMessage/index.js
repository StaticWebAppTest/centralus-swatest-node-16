module.exports = async function (context, req) {
  const date = "2023-01-18T22:09:14.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

