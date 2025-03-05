module.exports = async function (context, req) {
  const date = "2025-03-05T02:21:33.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

