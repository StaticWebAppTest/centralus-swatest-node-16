module.exports = async function (context, req) {
  const date = "2024-11-12T12:22:49.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

