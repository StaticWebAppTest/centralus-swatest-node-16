module.exports = async function (context, req) {
  const date = "2022-12-21T18:11:35.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

