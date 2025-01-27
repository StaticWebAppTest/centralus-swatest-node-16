module.exports = async function (context, req) {
  const date = "2025-01-27T00:57:02.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

