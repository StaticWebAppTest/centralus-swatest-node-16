module.exports = async function (context, req) {
  const date = "2025-01-20T10:12:25.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

