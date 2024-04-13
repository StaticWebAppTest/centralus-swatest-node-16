module.exports = async function (context, req) {
  const date = "2024-04-13T20:08:08.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

