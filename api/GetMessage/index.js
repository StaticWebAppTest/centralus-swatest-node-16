module.exports = async function (context, req) {
  const date = "2022-08-09T10:13:36.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

