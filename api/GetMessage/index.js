module.exports = async function (context, req) {
  const date = "2025-04-16T14:13:37.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

