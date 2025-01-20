module.exports = async function (context, req) {
  const date = "2025-01-20T07:11:41.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

