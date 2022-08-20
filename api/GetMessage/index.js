module.exports = async function (context, req) {
  const date = "2022-08-20T17:11:58.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

