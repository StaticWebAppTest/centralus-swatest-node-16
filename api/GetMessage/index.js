module.exports = async function (context, req) {
  const date = "2024-04-01T17:10:35.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

