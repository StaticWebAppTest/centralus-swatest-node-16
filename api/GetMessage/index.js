module.exports = async function (context, req) {
  const date = "2022-11-26T17:08:35.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

