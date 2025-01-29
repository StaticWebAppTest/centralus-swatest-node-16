module.exports = async function (context, req) {
  const date = "2025-01-29T10:12:15.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

