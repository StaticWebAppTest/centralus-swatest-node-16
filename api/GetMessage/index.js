module.exports = async function (context, req) {
  const date = "2023-08-16T03:09:11.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

