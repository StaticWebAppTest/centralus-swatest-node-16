module.exports = async function (context, req) {
  const date = "2022-10-06T18:17:51.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

