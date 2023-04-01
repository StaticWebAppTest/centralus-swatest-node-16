module.exports = async function (context, req) {
  const date = "2023-04-01T20:08:35.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

