module.exports = async function (context, req) {
  const date = "2025-06-28T23:12:35.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

