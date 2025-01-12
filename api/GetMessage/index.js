module.exports = async function (context, req) {
  const date = "2025-01-12T19:08:13.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

