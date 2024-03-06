module.exports = async function (context, req) {
  const date = "2024-03-06T23:09:49.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

