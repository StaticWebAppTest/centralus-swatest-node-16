module.exports = async function (context, req) {
  const date = "2025-02-26T21:11:11.074Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

