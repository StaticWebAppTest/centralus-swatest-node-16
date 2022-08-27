module.exports = async function (context, req) {
  const date = "2022-08-27T19:08:51.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

