module.exports = async function (context, req) {
  const date = "2025-01-20T02:13:03.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

