module.exports = async function (context, req) {
  const date = "2024-07-09T20:11:34.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

