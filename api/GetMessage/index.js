module.exports = async function (context, req) {
  const date = "2024-01-03T19:07:26.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

