module.exports = async function (context, req) {
  const date = "2025-05-14T20:12:42.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

