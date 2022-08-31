module.exports = async function (context, req) {
  const date = "2022-08-31T14:12:06.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

