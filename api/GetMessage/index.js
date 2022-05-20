module.exports = async function (context, req) {
  const date = "2022-05-20T20:12:04.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

