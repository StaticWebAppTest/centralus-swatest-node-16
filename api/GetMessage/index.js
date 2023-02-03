module.exports = async function (context, req) {
  const date = "2023-02-03T12:17:55.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

