module.exports = async function (context, req) {
  const date = "2024-03-05T23:08:32.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

