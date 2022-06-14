module.exports = async function (context, req) {
  const date = "2022-06-14T18:17:24.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

