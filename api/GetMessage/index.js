module.exports = async function (context, req) {
  const date = "2022-12-30T21:08:10.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

