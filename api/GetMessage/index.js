module.exports = async function (context, req) {
  const date = "2025-04-06T05:12:13.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

