module.exports = async function (context, req) {
  const date = "2024-01-09T23:09:03.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

