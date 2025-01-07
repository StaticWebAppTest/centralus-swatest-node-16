module.exports = async function (context, req) {
  const date = "2025-01-07T08:15:33.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

