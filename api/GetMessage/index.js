module.exports = async function (context, req) {
  const date = "2022-06-15T03:08:46.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

