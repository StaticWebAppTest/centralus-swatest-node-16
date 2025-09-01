module.exports = async function (context, req) {
  const date = "2025-09-01T17:10:47.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

