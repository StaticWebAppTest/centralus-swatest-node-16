module.exports = async function (context, req) {
  const date = "2023-05-21T12:15:03.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

