module.exports = async function (context, req) {
  const date = "2025-09-29T15:13:22.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

