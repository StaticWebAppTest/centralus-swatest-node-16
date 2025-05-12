module.exports = async function (context, req) {
  const date = "2025-05-12T05:14:06.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

