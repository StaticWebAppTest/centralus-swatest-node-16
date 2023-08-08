module.exports = async function (context, req) {
  const date = "2023-08-08T23:08:19.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

