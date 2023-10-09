module.exports = async function (context, req) {
  const date = "2023-10-09T20:08:35.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

