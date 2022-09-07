module.exports = async function (context, req) {
  const date = "2022-09-07T12:24:36.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

