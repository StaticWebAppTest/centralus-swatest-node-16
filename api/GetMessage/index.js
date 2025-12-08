module.exports = async function (context, req) {
  const date = "2025-12-08T18:21:58.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

