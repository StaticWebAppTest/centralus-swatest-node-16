module.exports = async function (context, req) {
  const date = "2025-05-20T15:14:33.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

