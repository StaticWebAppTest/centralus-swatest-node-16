module.exports = async function (context, req) {
  const date = "2025-01-15T05:11:33.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

