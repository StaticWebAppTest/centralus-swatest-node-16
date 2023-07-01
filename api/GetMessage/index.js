module.exports = async function (context, req) {
  const date = "2023-07-01T22:08:18.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

