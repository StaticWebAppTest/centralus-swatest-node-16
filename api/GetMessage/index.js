module.exports = async function (context, req) {
  const date = "2023-05-15T22:08:03.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

