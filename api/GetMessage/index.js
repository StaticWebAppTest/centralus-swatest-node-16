module.exports = async function (context, req) {
  const date = "2023-03-31T22:08:03.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

