module.exports = async function (context, req) {
  const date = "2022-08-15T14:12:36.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

