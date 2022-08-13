module.exports = async function (context, req) {
  const date = "2022-08-13T12:17:53.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

