module.exports = async function (context, req) {
  const date = "2025-01-16T06:16:08.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

