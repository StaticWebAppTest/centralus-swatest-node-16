module.exports = async function (context, req) {
  const date = "2023-03-30T15:09:46.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

