module.exports = async function (context, req) {
  const date = "2024-09-13T12:20:34.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

