module.exports = async function (context, req) {
  const date = "2025-12-14T05:14:11.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

