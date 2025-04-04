module.exports = async function (context, req) {
  const date = "2025-04-04T15:12:58.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

