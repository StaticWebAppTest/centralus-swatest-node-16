module.exports = async function (context, req) {
  const date = "2025-12-06T16:15:37.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

