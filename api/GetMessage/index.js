module.exports = async function (context, req) {
  const date = "2024-12-18T23:11:42.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

