module.exports = async function (context, req) {
  const date = "2025-09-13T12:22:19.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

