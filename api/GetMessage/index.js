module.exports = async function (context, req) {
  const date = "2023-01-09T10:11:24.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

