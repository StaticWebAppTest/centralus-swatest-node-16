module.exports = async function (context, req) {
  const date = "2024-12-03T23:11:49.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

