module.exports = async function (context, req) {
  const date = "2025-01-13T08:16:38.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

