module.exports = async function (context, req) {
  const date = "2025-05-07T05:13:39.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

