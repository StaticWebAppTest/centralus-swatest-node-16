module.exports = async function (context, req) {
  const date = "2023-05-18T22:08:04.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

