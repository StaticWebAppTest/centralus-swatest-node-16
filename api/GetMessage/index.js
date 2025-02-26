module.exports = async function (context, req) {
  const date = "2025-02-26T22:11:26.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

