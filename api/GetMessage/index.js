module.exports = async function (context, req) {
  const date = "2025-08-27T02:58:12.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

