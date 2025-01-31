module.exports = async function (context, req) {
  const date = "2025-01-31T14:10:33.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

