module.exports = async function (context, req) {
  const date = "2023-12-12T22:08:53.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

