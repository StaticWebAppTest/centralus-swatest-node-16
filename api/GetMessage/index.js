module.exports = async function (context, req) {
  const date = "2025-08-26T23:11:40.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

