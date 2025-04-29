module.exports = async function (context, req) {
  const date = "2025-04-29T12:27:19.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

