module.exports = async function (context, req) {
  const date = "2025-05-29T05:14:12.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

