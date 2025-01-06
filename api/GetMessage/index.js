module.exports = async function (context, req) {
  const date = "2025-01-06T05:12:15.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

