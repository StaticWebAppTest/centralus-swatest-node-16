module.exports = async function (context, req) {
  const date = "2023-02-05T22:08:52.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

