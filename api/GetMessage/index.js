module.exports = async function (context, req) {
  const date = "2025-07-18T10:15:52.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

