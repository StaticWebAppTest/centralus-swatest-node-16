module.exports = async function (context, req) {
  const date = "2025-07-11T12:27:51.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

