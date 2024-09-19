module.exports = async function (context, req) {
  const date = "2024-09-19T20:12:03.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

