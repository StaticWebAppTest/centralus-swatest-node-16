module.exports = async function (context, req) {
  const date = "2023-12-18T22:08:53.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

