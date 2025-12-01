module.exports = async function (context, req) {
  const date = "2025-12-01T09:21:09.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

