module.exports = async function (context, req) {
  const date = "2025-04-23T10:14:41.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

