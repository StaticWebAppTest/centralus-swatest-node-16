module.exports = async function (context, req) {
  const date = "2025-03-27T08:16:42.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

