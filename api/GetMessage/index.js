module.exports = async function (context, req) {
  const date = "2025-01-19T02:19:04.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

