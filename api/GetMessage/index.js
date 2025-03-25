module.exports = async function (context, req) {
  const date = "2025-03-25T05:13:32.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

