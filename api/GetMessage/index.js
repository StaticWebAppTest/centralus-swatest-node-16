module.exports = async function (context, req) {
  const date = "2025-12-27T07:13:36.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

