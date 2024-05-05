module.exports = async function (context, req) {
  const date = "2024-05-05T04:11:49.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

