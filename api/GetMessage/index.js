module.exports = async function (context, req) {
  const date = "2022-04-14T08:13:35.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

