module.exports = async function (context, req) {
  const date = "2025-12-05T05:14:42.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

