module.exports = async function (context, req) {
  const date = "2022-06-26T21:08:38.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

