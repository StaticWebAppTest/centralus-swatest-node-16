module.exports = async function (context, req) {
  const date = "2025-12-03T16:20:28.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

