module.exports = async function (context, req) {
  const date = "2025-04-12T02:54:05.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

