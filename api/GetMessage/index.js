module.exports = async function (context, req) {
  const date = "2025-04-25T08:17:56.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

