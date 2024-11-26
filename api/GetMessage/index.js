module.exports = async function (context, req) {
  const date = "2024-11-26T20:13:40.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

