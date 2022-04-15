module.exports = async function (context, req) {
  const date = "2022-04-15T07:10:44.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

