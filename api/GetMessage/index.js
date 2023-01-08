module.exports = async function (context, req) {
  const date = "2023-01-08T20:09:33.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

