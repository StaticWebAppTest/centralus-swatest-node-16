module.exports = async function (context, req) {
  const date = "2025-01-08T05:11:57.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

