module.exports = async function (context, req) {
  const date = "2025-02-07T15:12:04.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

