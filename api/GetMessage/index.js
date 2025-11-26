module.exports = async function (context, req) {
  const date = "2025-11-26T07:13:53.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

