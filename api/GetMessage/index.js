module.exports = async function (context, req) {
  const date = "2023-11-24T22:08:08.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

