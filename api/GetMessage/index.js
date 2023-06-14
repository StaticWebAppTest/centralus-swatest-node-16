module.exports = async function (context, req) {
  const date = "2023-06-14T16:11:20.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

