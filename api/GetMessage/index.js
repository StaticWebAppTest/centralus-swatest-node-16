module.exports = async function (context, req) {
  const date = "2023-09-01T15:08:46.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

