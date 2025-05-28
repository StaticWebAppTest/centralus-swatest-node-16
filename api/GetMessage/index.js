module.exports = async function (context, req) {
  const date = "2025-05-28T12:27:49.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

