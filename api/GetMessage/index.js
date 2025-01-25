module.exports = async function (context, req) {
  const date = "2025-01-25T02:05:18.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

