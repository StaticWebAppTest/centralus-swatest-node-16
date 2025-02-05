module.exports = async function (context, req) {
  const date = "2025-02-05T05:11:52.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

