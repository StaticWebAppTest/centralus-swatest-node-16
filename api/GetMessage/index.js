module.exports = async function (context, req) {
  const date = "2024-03-13T12:16:44.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

