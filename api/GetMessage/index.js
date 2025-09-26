module.exports = async function (context, req) {
  const date = "2025-09-26T23:11:50.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

