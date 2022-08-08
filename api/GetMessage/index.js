module.exports = async function (context, req) {
  const date = "2022-08-08T00:56:19.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

