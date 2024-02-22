module.exports = async function (context, req) {
  const date = "2024-02-22T03:09:57.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

