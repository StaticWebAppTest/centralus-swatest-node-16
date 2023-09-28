module.exports = async function (context, req) {
  const date = "2023-09-28T20:08:46.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

