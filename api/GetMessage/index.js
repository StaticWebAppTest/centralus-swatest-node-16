module.exports = async function (context, req) {
  const date = "2025-12-27T10:14:03.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

