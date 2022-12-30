module.exports = async function (context, req) {
  const date = "2022-12-30T23:08:51.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

