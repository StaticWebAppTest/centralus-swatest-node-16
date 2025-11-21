module.exports = async function (context, req) {
  const date = "2025-11-21T04:16:53.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

