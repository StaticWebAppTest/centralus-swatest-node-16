module.exports = async function (context, req) {
  const date = "2025-04-30T10:14:05.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

