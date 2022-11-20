module.exports = async function (context, req) {
  const date = "2022-11-20T20:10:34.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

