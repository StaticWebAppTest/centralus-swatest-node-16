module.exports = async function (context, req) {
  const date = "2025-02-16T16:12:38.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

