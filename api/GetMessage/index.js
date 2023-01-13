module.exports = async function (context, req) {
  const date = "2023-01-13T22:08:26.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

