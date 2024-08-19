module.exports = async function (context, req) {
  const date = "2024-08-19T23:11:49.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

