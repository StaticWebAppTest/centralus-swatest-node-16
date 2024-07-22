module.exports = async function (context, req) {
  const date = "2024-07-22T20:11:00.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

