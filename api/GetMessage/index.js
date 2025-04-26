module.exports = async function (context, req) {
  const date = "2025-04-26T10:12:10.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

