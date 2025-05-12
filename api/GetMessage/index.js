module.exports = async function (context, req) {
  const date = "2025-05-12T20:14:58.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

