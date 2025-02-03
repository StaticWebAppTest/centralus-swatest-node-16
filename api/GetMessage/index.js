module.exports = async function (context, req) {
  const date = "2025-02-03T19:09:38.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

