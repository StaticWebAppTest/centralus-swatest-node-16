module.exports = async function (context, req) {
  const date = "2022-04-01T05:09:38.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

