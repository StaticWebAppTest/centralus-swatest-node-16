module.exports = async function (context, req) {
  const date = "2025-12-13T12:26:33.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

