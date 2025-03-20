module.exports = async function (context, req) {
  const date = "2025-03-20T02:22:58.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

