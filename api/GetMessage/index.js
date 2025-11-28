module.exports = async function (context, req) {
  const date = "2025-11-28T08:19:47.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

