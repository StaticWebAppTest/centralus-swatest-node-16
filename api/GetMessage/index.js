module.exports = async function (context, req) {
  const date = "2025-01-27T22:10:47.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

