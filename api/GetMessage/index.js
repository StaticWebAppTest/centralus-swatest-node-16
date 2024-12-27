module.exports = async function (context, req) {
  const date = "2024-12-27T06:16:31.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

