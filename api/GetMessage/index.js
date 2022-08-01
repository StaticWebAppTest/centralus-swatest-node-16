module.exports = async function (context, req) {
  const date = "2022-08-01T05:16:44.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

