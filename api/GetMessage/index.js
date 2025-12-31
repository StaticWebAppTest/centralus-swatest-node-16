module.exports = async function (context, req) {
  const date = "2025-12-31T09:18:40.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

