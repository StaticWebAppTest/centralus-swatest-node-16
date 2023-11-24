module.exports = async function (context, req) {
  const date = "2023-11-24T12:16:53.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

