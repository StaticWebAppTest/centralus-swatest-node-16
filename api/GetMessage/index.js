module.exports = async function (context, req) {
  const date = "2025-01-06T09:13:13.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

