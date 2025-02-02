module.exports = async function (context, req) {
  const date = "2025-02-02T12:19:15.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

