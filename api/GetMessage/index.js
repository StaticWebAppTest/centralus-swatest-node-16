module.exports = async function (context, req) {
  const date = "2025-09-09T12:27:52.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

