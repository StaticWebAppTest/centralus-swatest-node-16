module.exports = async function (context, req) {
  const date = "2024-11-13T20:12:24.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

