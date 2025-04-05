module.exports = async function (context, req) {
  const date = "2025-04-05T05:13:10.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

