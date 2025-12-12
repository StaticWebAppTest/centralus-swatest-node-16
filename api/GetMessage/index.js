module.exports = async function (context, req) {
  const date = "2025-12-12T16:17:13.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

