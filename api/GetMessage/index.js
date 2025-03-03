module.exports = async function (context, req) {
  const date = "2025-03-03T06:18:31.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

