module.exports = async function (context, req) {
  const date = "2025-04-11T10:13:37.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

