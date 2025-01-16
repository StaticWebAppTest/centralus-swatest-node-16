module.exports = async function (context, req) {
  const date = "2025-01-16T21:10:27.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

