module.exports = async function (context, req) {
  const date = "2024-08-13T20:11:09.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

