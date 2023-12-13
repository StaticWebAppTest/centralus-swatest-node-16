module.exports = async function (context, req) {
  const date = "2023-12-13T22:08:43.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

