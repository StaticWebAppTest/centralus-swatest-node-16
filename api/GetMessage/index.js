module.exports = async function (context, req) {
  const date = "2025-03-25T07:13:41.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

