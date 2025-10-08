module.exports = async function (context, req) {
  const date = "2025-10-08T05:13:13.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

