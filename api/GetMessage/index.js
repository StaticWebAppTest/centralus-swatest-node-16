module.exports = async function (context, req) {
  const date = "2025-01-26T04:13:13.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

