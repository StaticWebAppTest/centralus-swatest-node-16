module.exports = async function (context, req) {
  const date = "2025-02-01T22:11:04.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

