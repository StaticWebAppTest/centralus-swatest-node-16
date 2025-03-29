module.exports = async function (context, req) {
  const date = "2025-03-29T20:12:08.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

